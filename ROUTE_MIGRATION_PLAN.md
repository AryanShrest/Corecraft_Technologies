# Marketing Route and Folder Migration Plan

**Task:** FND-003  
**Status:** Approved for incremental implementation  
**Branch:** `bishowdip`

## Decision

Keep the existing homepage route operational while shared foundations are introduced. Add internal marketing routes incrementally and move layout components only when their replacements are ready. Do not perform a repository-wide rename or move in one pull request.

## Canonical routes

| Route | Purpose | Delivery task | Legacy behavior |
|---|---|---|---|
| `/` | Homepage | HOME-T01–T12 | Existing canonical route |
| `/about` | About | PAGE-T01 | Redirect `/about/` naturally through Next.js policy if needed |
| `/services` | Services | PAGE-T02 | Redirect `/services/` if needed |
| `/contact` | Contact | PAGE-T03/INT-T04 | Redirect `/contact/` if needed |
| `/blog` | Blog listing | PAGE-T04 | Permanent redirect from `/blog-grid-right/` after launch approval |
| `/blog/[slug]` | Article | PAGE-T05 | Per-post legacy redirects require an approved migration list |
| `/search?q=` | Search results | PAGE-T06 | Implement only if site search remains approved |
| `/blog/category/[slug]` | Category archive | PAGE-T06 | Generate only for approved categories |
| `/privacy` | Privacy notice | INT-T07 | Required before production data collection |
| `/terms` | Terms | DEC-012/PAGE work | Content requires approval |
| `/_not-found` | Framework 404 | PAGE-T07 | Replace with branded `not-found.tsx` |

Pricing is not a canonical route until DEC-005 is resolved.

## Incremental folder direction

1. Keep `src/app/(home)/page.tsx` until the homepage composition is migrated.
2. Add internal routes under an App Router marketing group without changing public URLs.
3. Introduce new shared components under `src/components/layout`, `ui`, `motion`, `forms`, and `blog`.
4. Keep old `src/components/home` files until each corresponding HOME task is merged.
5. Delete or rename an old component only in the PR that replaces its last consumer.
6. Keep content in `src/content` and shared content types in `src/types`.

Target structure:

```text
src/
├── app/
│   ├── (home)/page.tsx
│   ├── (marketing)/
│   │   ├── about/page.tsx
│   │   ├── services/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── blog/page.tsx
│   │   ├── blog/[slug]/page.tsx
│   │   ├── privacy/page.tsx
│   │   └── terms/page.tsx
│   ├── layout.tsx
│   ├── not-found.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── layout/
│   ├── ui/
│   ├── motion/
│   ├── forms/
│   ├── blog/
│   └── home/
├── content/
├── lib/
└── types/
```

## Collision prevention

- Shared layout files are owned by the foundation owner.
- Homepage owners may edit only their assigned section files plus approved data modules.
- Motion primitives are owned by the motion owner; section owners consume them through props.
- Internal-page owners reuse shared data/components instead of copying homepage code.
- Route creation and redirects must be listed in PROJECT_PROGRESS.md before implementation.

## Migration acceptance

- Public URLs do not expose route-group folder names.
- Existing homepage remains buildable during incremental work.
- No component has both an old and new active implementation after its migration task is done.
- Redirects are added only after destination routes exist.
- Search, Pricing, article, privacy, and terms routes do not ship as empty placeholders.
