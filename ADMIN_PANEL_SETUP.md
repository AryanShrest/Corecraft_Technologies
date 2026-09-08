# CoreCraft Admin Panel Setup

## Architecture

The website and backend are one deployable Next.js application in `frontend-ecommerce`.
The former `new-backend-ecommerce` Express shop is not used by the admin panel.

Supabase provides three managed capabilities without a second application server:

- PostgreSQL records for homepage slides and partners
- Supabase Auth for administrator sessions
- Supabase Storage for uploaded images

The public homepage keeps its checked-in images as a fallback until Supabase is configured.

## One-time Supabase setup

1. Create one Supabase project.
2. Open SQL Editor and run:
   `frontend-ecommerce/supabase/migrations/202609080001_home_content.sql`
   Then run:
   `frontend-ecommerce/supabase/migrations/202609080002_contact_inquiries.sql`
3. In Authentication, create the first administrator manually with email and password.
   Do not enable public sign-up for this CMS.
4. Copy that user's UUID and grant access in SQL Editor:

```sql
insert into public.admin_profiles (user_id)
values ('AUTH-USER-UUID');
```

5. Copy the project URL, anon key, and service-role key into local `.env.local` and the
   production host environment:

```env
NEXT_PUBLIC_SUPABASE_URL=https://PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=PUBLIC_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY=SERVER_ONLY_SERVICE_ROLE_KEY
```

6. Never expose `SUPABASE_SERVICE_ROLE_KEY` through a `NEXT_PUBLIC_` variable.
7. Restart local development or redeploy production.
8. Open `/admin/login` and sign in with the manually created administrator.

## Content rules

### Project inquiries

- Every accepted contact form is saved to Supabase before email notification is attempted.
- `/admin/inquiries` is the durable team inbox and source of truth.
- Leads move through `new`, `contacted`, `qualified`, `won`, and `closed` stages.
- Administrators can search submissions, reply by email, and store private follow-up notes.
- A failed or unconfigured email notification does not discard the saved inquiry.
- The public browser has no direct read or write access to inquiry records.

### Hero slides

- A maximum of four slides can be active.
- Upload JPG, PNG, WebP, or AVIF only.
- Maximum file size is 5 MB.
- Title and meaningful alternative text are required.
- The homepage uses active records ordered by `position`.

### Partners

- The list has no artificial maximum.
- Company name and logo are required.
- Website URL is optional and restricted to HTTP/HTTPS.
- Disabled records remain in the CMS but are hidden publicly.
- The public “Trusted by” count comes from real active records, not a hardcoded claim.

## Security model

- Supabase sessions are refreshed by `src/proxy.ts` for admin routes.
- Every CMS API request verifies both the authenticated user and `admin_profiles` membership.
- Database writes and storage operations happen only on the server.
- Mutation endpoints reject cross-site requests.
- Uploads are checked by size, MIME allowlist, and binary file signature.
- SVG is intentionally disallowed.
- The service-role key bypasses RLS and must remain server-only.
- Public database policies expose only active homepage records.

## Deployment checklist

- [ ] Migration applied successfully.
- [ ] Contact inquiry migration applied successfully.
- [ ] `site-media` bucket exists and is public.
- [ ] First Auth user created manually.
- [ ] User UUID inserted into `admin_profiles`.
- [ ] All three Supabase variables configured locally.
- [ ] All three Supabase variables configured in production.
- [ ] `/admin/login` accepts the administrator account.
- [ ] A test logo can be uploaded, hidden, shown, and removed.
- [ ] The homepage updates after an admin mutation.
- [ ] A contact form submission appears in `/admin/inquiries`.
- [ ] Inquiry status and private notes can be updated.
- [ ] Service-role key is absent from browser bundles and logs.
