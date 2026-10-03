import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, apikey, content-type, x-client-info',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

function json(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
}

Deno.serve(async (request) => {
  if (request.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  if (request.method !== 'POST') return json({ error: 'Method not allowed' }, 405);

  const authorization = request.headers.get('Authorization');
  const supabaseUrl = Deno.env.get('SUPABASE_URL');
  const anonKey = Deno.env.get('SUPABASE_ANON_KEY');
  const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
  if (!authorization || !supabaseUrl || !anonKey || !serviceRoleKey) return json({ error: 'Missing server configuration or authorization' }, 401);

  const userClient = createClient(supabaseUrl, anonKey, { global: { headers: { Authorization: authorization } }, auth: { persistSession: false } });
  const { data: userResult, error: userError } = await userClient.auth.getUser();
  if (userError || !userResult.user) return json({ error: 'A valid user session is required' }, 401);

  const adminClient = createClient(supabaseUrl, serviceRoleKey, { auth: { persistSession: false, autoRefreshToken: false } });
  const userId = userResult.user.id;
  const { data: recordings, error: recordingsError } = await adminClient
    .from('voice_recordings')
    .select('storage_path')
    .eq('user_id', userId);
  if (recordingsError) return json({ error: 'Could not list user recordings' }, 500);

  const paths = (recordings || []).map((recording) => recording.storage_path).filter((path): path is string => typeof path === 'string' && path.startsWith(`${userId}/`));
  for (let offset = 0; offset < paths.length; offset += 100) {
    const { error } = await adminClient.storage.from('voice-recordings').remove(paths.slice(offset, offset + 100));
    if (error) return json({ error: 'Could not delete private voice recordings' }, 500);
  }

  const { error: deleteError } = await adminClient.auth.admin.deleteUser(userId);
  if (deleteError) return json({ error: 'Could not delete the authenticated account' }, 500);
  return json({ deleted: true });
});
