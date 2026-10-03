# Supabase Setup

## Project Setup

1. Create a Supabase project.
2. In **SQL Editor**, run the complete `supabase/schema.sql`. It creates `profiles`, `attempts`, `mistakes`, `daily_plans`, `settings`, the private `voice-recordings` bucket, RLS policies, and a one-time migration from the previous `user_progress` JSON table. The migration preserves the old table; remove it only after verifying the migrated profile data.
3. In **Project Settings → API**, copy the project URL and publishable/anon key into `supabase-config.js`. Never place a service-role/secret key in browser code.
4. In **Authentication → URL Configuration**, set the local site URL to `http://localhost:8000` and add the exact local and deployed URLs to the redirect allow list.
5. In **Authentication → Sign In / Providers**, enable Email. Choose whether new accounts require email confirmation. If enabled, confirm the email before the first cloud sign-in.
6. To enable Google, configure the Google provider and its client ID/secret in Supabase, then add the Supabase callback URL shown on that provider page to the Google OAuth client. The same site redirect must also be allow-listed.
7. In **Authentication → Multi-Factor Authentication**, enable the Authenticator app (TOTP) factor. The site enrolls and verifies TOTP, then requests a fresh code when Supabase requires AAL2.

## Edge Functions

From the project root, deploy both functions:

```sh
supabase login
supabase link --project-ref YOUR_PROJECT_REF
supabase functions deploy adaptive-question
supabase functions deploy delete-account
```

`delete-account` requires `SUPABASE_SERVICE_ROLE_KEY` in the Edge Function environment. Supabase normally provides this server-side variable to functions. If it is absent in your project, add it only through the Supabase function secrets UI/CLI; never put it in `supabase-config.js` or send it in a chat. The endpoint verifies the caller's JWT, removes that user's private voice objects, then deletes the Auth user so database rows cascade.

AI feedback is optional. To enable it, set the provider key as a server-side secret from your terminal:

```sh
supabase secrets set AI_API_KEY=YOUR_MODEL_API_KEY
```

Optionally set `AI_API_URL` and `AI_MODEL` as function secrets. The app calls the function only after the user opts in. Feedback is formative and is not an official DET score or pronunciation assessment.

## Data And Privacy

- A guest profile is saved in this browser. Local account passwords are PBKDF2-hashed and are not synced or recoverable by email; the local account is only for this device/browser.
- Registering a guest profile copies its tests, mistakes, plan, settings, and local voice recordings to the new user's own cloud rows after a real Supabase session is established.
- Authenticated reads and writes are constrained by `auth.uid() = user_id`. The voice bucket is private and paths must begin with the caller's UUID. Voice playback uses short-lived signed URLs.
- Download exports the current profile and voice-recording metadata as JSON. Account deletion uses the Edge Function in cloud mode; local mode deletes the local account and local voice blobs.

## Verification Checklist

1. With Supabase unset, take the diagnostic, create a local account, sign out, sign back in, and confirm the test and mistakes are still present.
2. With Supabase configured, repeat the test, register with email, confirm the address if required, sign in, and verify the same attempt appears in the cloud-backed Tests screen.
3. Change the account email and password; confirm the email via the provider link and sign in with the new password. Test Google linking only after configuring the provider.
4. Enroll TOTP, sign out, sign in, and verify that the site requests and validates the authenticator code. Test a wrong code and confirm that access is not granted.
5. Record a speaking response. Check that its object is in the private bucket under `<your-user-id>/...`, play it from Settings, then delete it and confirm both metadata and object are gone.
6. Download JSON and verify it contains the profile, tests, mistakes, and recording metadata but no password or service-role secrets.
7. In SQL Editor, temporarily emulate an authenticated user to verify row isolation (the SQL Editor's default owner role bypasses RLS):

   ```sql
   begin;
   set local role authenticated;
   select set_config('request.jwt.claim.sub', 'USER_A_UUID', true);
   select * from public.profiles where user_id = 'USER_B_UUID'; -- must return zero rows
   rollback;
   ```

   Repeat with `attempts`, `mistakes`, `daily_plans`, `settings`, and `voice_recordings`. An insert/update using another user's UUID must be rejected. Also attempt a Storage signed URL for another user's path with User A's session; it must fail.
8. Use Settings → **Удалить аккаунт и данные**. Confirm the user disappears from Auth, all six tables cascade-delete that user's rows, and the Edge Function removes their Storage objects.

Without project URL/key, the app stays in local mode. Cloud account, Google OAuth, TOTP, Storage, and Edge Functions need the setup above before they can be tested end to end.