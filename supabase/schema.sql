create table if not exists public.profiles (
  user_id uuid primary key references auth.users (id) on delete cascade,
  display_name text not null default '',
  goal jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.attempts (
  id text primary key,
  user_id uuid not null references auth.users (id) on delete cascade,
  mode text not null default 'mock',
  level text,
  score integer not null default 0 check (score between 0 and 100),
  score_range text,
  correct integer not null default 0,
  total integer not null default 0,
  mistakes integer not null default 0,
  skill_results jsonb not null default '{}'::jsonb,
  component_results jsonb not null default '{}'::jsonb,
  details jsonb not null default '[]'::jsonb,
  timed_out boolean not null default false,
  review boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.mistakes (
  id text primary key,
  user_id uuid not null references auth.users (id) on delete cascade,
  task_type text not null default '',
  skill text not null default '',
  question jsonb not null default '{}'::jsonb,
  answer text not null default '',
  interval_days integer not null default 0 check (interval_days >= 0),
  due_at timestamptz not null default now(),
  last_reviewed_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.daily_plans (
  user_id uuid not null references auth.users (id) on delete cascade,
  plan_date date not null,
  activities jsonb not null default '[]'::jsonb,
  minutes integer not null default 0 check (minutes >= 0),
  weak_area_work boolean not null default false,
  updated_at timestamptz not null default now(),
  primary key (user_id, plan_date)
);

create table if not exists public.settings (
  user_id uuid primary key references auth.users (id) on delete cascade,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create table if not exists public.voice_recordings (
  id text primary key,
  user_id uuid not null references auth.users (id) on delete cascade,
  storage_path text not null unique,
  content_type text not null default 'audio/webm',
  task_type text not null default 'speaking',
  prompt text not null default '',
  created_at timestamptz not null default now()
);

create index if not exists attempts_user_created_idx on public.attempts (user_id, created_at desc);
create index if not exists mistakes_user_due_idx on public.mistakes (user_id, due_at);
create index if not exists voice_recordings_user_created_idx on public.voice_recordings (user_id, created_at desc);

alter table public.profiles enable row level security;
alter table public.attempts enable row level security;
alter table public.mistakes enable row level security;
alter table public.daily_plans enable row level security;
alter table public.settings enable row level security;
alter table public.voice_recordings enable row level security;

grant select, insert, update, delete on public.profiles, public.attempts, public.mistakes, public.daily_plans, public.settings, public.voice_recordings to authenticated;

drop policy if exists "Users manage own profile" on public.profiles;
create policy "Users manage own profile" on public.profiles for all to authenticated
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists "Users manage own attempts" on public.attempts;
create policy "Users manage own attempts" on public.attempts for all to authenticated
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists "Users manage own mistakes" on public.mistakes;
create policy "Users manage own mistakes" on public.mistakes for all to authenticated
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists "Users manage own daily plans" on public.daily_plans;
create policy "Users manage own daily plans" on public.daily_plans for all to authenticated
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists "Users manage own settings" on public.settings;
create policy "Users manage own settings" on public.settings for all to authenticated
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists "Users manage own voice metadata" on public.voice_recordings;
create policy "Users manage own voice metadata" on public.voice_recordings for all to authenticated
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('voice-recordings', 'voice-recordings', false, 15728640, array['audio/webm', 'audio/ogg', 'audio/mp4', 'audio/m4a'])
on conflict (id) do update set public = false, file_size_limit = 15728640;

drop policy if exists "Users read own voice files" on storage.objects;
create policy "Users read own voice files" on storage.objects for select to authenticated
  using (bucket_id = 'voice-recordings' and (storage.foldername(name))[1] = auth.uid()::text);

drop policy if exists "Users upload own voice files" on storage.objects;
create policy "Users upload own voice files" on storage.objects for insert to authenticated
  with check (bucket_id = 'voice-recordings' and (storage.foldername(name))[1] = auth.uid()::text);

drop policy if exists "Users update own voice files" on storage.objects;
create policy "Users update own voice files" on storage.objects for update to authenticated
  using (bucket_id = 'voice-recordings' and (storage.foldername(name))[1] = auth.uid()::text)
  with check (bucket_id = 'voice-recordings' and (storage.foldername(name))[1] = auth.uid()::text);

drop policy if exists "Users delete own voice files" on storage.objects;
create policy "Users delete own voice files" on storage.objects for delete to authenticated
  using (bucket_id = 'voice-recordings' and (storage.foldername(name))[1] = auth.uid()::text);

-- One-time migration for users of the previous JSON-only user_progress table.
do $$
declare old_row record;
begin
  if to_regclass('public.user_progress') is not null then
    for old_row in execute 'select user_id, data, updated_at from public.user_progress' loop
      insert into public.profiles (user_id, display_name, goal, updated_at)
      values (old_row.user_id, coalesce(old_row.data->>'name', ''), old_row.data->'goal', old_row.updated_at)
      on conflict (user_id) do nothing;

      insert into public.attempts (id, user_id, mode, level, score, score_range, correct, total, mistakes, skill_results, component_results, details, timed_out, review, created_at)
      select coalesce(item->>'id', gen_random_uuid()::text), old_row.user_id, coalesce(item->>'mode', 'mock'), item->>'level', coalesce((item->>'score')::integer, 0), item->>'scoreRange', coalesce((item->>'correct')::integer, 0), coalesce((item->>'total')::integer, 0), coalesce((item->>'mistakes')::integer, 0), coalesce(item->'skillResults', '{}'::jsonb), coalesce(item->'componentResults', '{}'::jsonb), coalesce(item->'mistakeDetails', '[]'::jsonb), coalesce((item->>'timedOut')::boolean, false), coalesce((item->>'review')::boolean, false), coalesce((item->>'date')::timestamptz, old_row.updated_at)
      from jsonb_array_elements(coalesce(old_row.data->'tests', '[]'::jsonb)) item
      on conflict (id) do nothing;

      insert into public.mistakes (id, user_id, task_type, skill, question, answer, interval_days, due_at, last_reviewed_at, created_at)
      select coalesce(item->>'id', gen_random_uuid()::text), old_row.user_id, coalesce(item->>'taskType', ''), coalesce(item->>'skill', ''), coalesce(item->'question', '{}'::jsonb), coalesce(item->>'answer', ''), coalesce((item->>'interval')::integer, 0), coalesce((item->>'dueAt')::timestamptz, old_row.updated_at), (item->>'lastReviewedAt')::timestamptz, coalesce((item->>'createdAt')::timestamptz, old_row.updated_at)
      from jsonb_array_elements(coalesce(old_row.data->'errors', '[]'::jsonb)) item
      on conflict (id) do nothing;

      insert into public.daily_plans (user_id, plan_date, activities, minutes, weak_area_work, updated_at)
      select old_row.user_id, (item->>'day')::date, jsonb_agg(item), sum(coalesce((item->>'minutes')::integer, 0)), bool_or(coalesce((item->>'weakAreaWork')::boolean, false)), old_row.updated_at
      from jsonb_array_elements(coalesce(old_row.data->'activities', '[]'::jsonb)) item
      where item ? 'day'
      group by (item->>'day')::date
      on conflict (user_id, plan_date) do nothing;

      insert into public.settings (user_id, data, updated_at)
      values (old_row.user_id, old_row.data - array['name', 'goal', 'tests', 'errors', 'activities'], old_row.updated_at)
      on conflict (user_id) do nothing;
    end loop;
  end if;
end $$;