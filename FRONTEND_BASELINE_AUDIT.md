# Frontend Baseline Audit

**Task:** FND-002  
**Branch:** `bishowdip`  
**Audit date:** 2026-09-05  
**Scope:** `frontend-ecommerce`

## Outcome

The existing frontend is a homepage-only Next.js prototype, not a faithful or production-ready clone. Its section/component split is useful and should be preserved conceptually, but most components need refactoring before reuse because content is invented or duplicated, images depend on temporary external generation URLs, interactions are incomplete, and accessibility checks currently fail.

## Baseline verification

| Check | Result | Notes |
|---|---|---|
| `npm ci` | Pass | 114 packages installed from the lockfile. |
| `npm run typecheck` | Pass | TypeScript reports no errors. |
| `npm run build` | Pass | Static `/` and `/_not-found` generated. Homepage first-load JS is approximately 104 kB. |
| `npm run check` | Fail | 118 Biome errors, including formatting/import-order and SVG accessibility errors. |
| `npm audit` | Fail | Two high-severity vulnerable dependency entries, centered on the old Next.js/PostCSS dependency chain. |

Do not run an automatic forced dependency upgrade. Next.js requires a deliberate framework-upgrade task with regression testing.

## Existing routes

| Route | State | Decision |
|---|---|---|
| `/` | Implemented prototype | Keep route; refactor page composition. |
| `/_not-found` | Framework default | Replace under PAGE-T07. |
| `/about` | Missing | Build under PAGE-T01. |
| `/services` | Missing | Build under PAGE-T02. |
| `/contact` | Missing | Build under PAGE-T03/INT-T04. |
| `/blog` | Missing | Build under PAGE-T04. |
| `/blog/[slug]` | Missing | Build under PAGE-T05. |

## Component decisions

| Existing component | Decision | Reason and required action |
|---|---|---|
| `Navbar.tsx` | Refactor | Useful responsive starting point, but lacks the audited top bar, sticky-header behavior, robust off-canvas focus management, active-route handling, and finalized shared navigation data. Move toward shared layout ownership. |
| `Hero.tsx` | Replace behavior; reuse selected markup ideas | Current component is not the audited multi-slide carousel. Build from HOME-001 with approved assets, slide data, autoplay/pause/swipe, staged motion, and reduced-motion support. |
| `HowWeWork.tsx` | Refactor | Component boundary matches the required section. Move content to typed data and correct SVG accessibility. Match audited layout rather than preserving prototype styling blindly. |
| `InnovationSection.tsx` | Review then refactor | This appears to represent HOME-003 but its exact copy/layout must be verified against captured reference evidence before reuse. Replace temporary external imagery. |
| `ServicesSection.tsx` | Refactor | Six-service concept is reusable. Move services to central typed data, replace remote generated images, use real destinations, correct visual fidelity, and share with `/services`. |
| `WhyCoreCraft.tsx` | Refactor | Required section exists, but copy differs from the audited source and uses unsupported business claims. Replace external generated image and source benefits centrally. |
| `StatsFaqSection.tsx` | Refactor substantially | Contains invented statistics and local accordion behavior. Statistics must remain blocked pending DEC-004. Extract accessible Accordion and Counter primitives and add ARIA relationships. |
| `ReadyCta.tsx` | Refactor | Reuse section purpose only. Normalize contact data through site settings and replace external image. |
| `CommitmentSection.tsx` | Refactor substantially | Contains temporary generated images, invented claims, extra offerings, and a fabricated statistic. Rebuild from HOME-008 approved content. |
| `ContactSection.tsx` | Replace form behavior; reuse layout ideas | Current form simulates success, clears data, and sends nothing. It contains invented statistics and temporary images. Implement shared validated form and real backend states under INT-T01–T04. |
| `BlogSection.tsx` | Replace content | Current hard-coded posts resemble the suspicious legacy content explicitly excluded by requirements. Rebuild with approved typed/CMS posts. |
| `Footer.tsx` | Refactor substantially | Useful component boundary, but current newsletter and social destinations require verification; `#` links exist. Extract shared footer and newsletter integration. |

## Cross-cutting findings

### Content integrity

- Business contact values are duplicated and inconsistent across components.
- At least one prototype phone number differs from the audited reference candidate.
- Statistics such as years, projects, clients, and buildings are invented and must not ship.
- Blog data is hard-coded and unacceptable for migration.
- Several section titles and benefit descriptions differ from the audited reference without an approval record.

### Asset integrity

- Multiple sections load images from `coresg-normal.trae.ai` text-to-image endpoints.
- These URLs are not approved production assets and may be unstable.
- Most images use raw `<img>` rather than the configured Next.js image pipeline.
- The Next.js configuration allows every HTTPS hostname through `hostname: '**'`; narrow this to approved hosts or local assets.

### Accessibility

- Biome reports many decorative SVGs without an accessible handling strategy.
- The FAQ buttons do not yet expose the required `aria-expanded` and `aria-controls` relationships.
- Mobile-navigation focus trap, Escape handling, background scroll lock, and focus restoration are incomplete.
- The simulated form does not expose robust validation/error semantics.
- Repeated `key={index}` patterns should be replaced with stable data IDs where list identity matters.

### Architecture

- The root metadata still describes `CoreCraft Ecommerce`, which is wrong for the marketing website.
- The root layout uses Inter even though the audited site uses a different typography system.
- Global CSS remains the default starter gradient rather than the required token system.
- Content is defined independently inside each component instead of typed central modules.
- Only three components are client components, which is a reasonable baseline; preserve server components wherever possible.
- TanStack Query/Zustand providers are currently loaded globally even though the homepage does not visibly need ecommerce state. Review before removing because other planned work may depend on them.

### Quality and security

- Type checking and production build pass.
- The formatter/linter baseline is red with 118 errors, so contributors cannot use `npm run check` as a reliable merge gate yet.
- The lockfile resolves Next.js 14.2.35, which has known advisories reported by `npm audit`.
- Dependency remediation should be a scoped upgrade task, not `npm audit fix --force`.

## Recommended sequence from this audit

1. Resolve FND-001 team ownership so files are not edited concurrently.
2. Add a framework dependency-remediation task and agree on the supported Next.js major version.
3. Complete FND-004–010: tokens, fonts, layout, shared primitives, and typed content.
4. Refactor `Navbar` and `Footer` into the shared shell.
5. Refactor homepage sections one at a time behind verified data and approved assets.
6. Extract motion primitives before adding independent component animations.
7. Restore `npm run check` to green in scoped foundation work before enforcing it as a PR gate.

## Audit completion criteria

- [x] Existing routes inventoried.
- [x] Existing homepage components inventoried.
- [x] Each component assigned a keep/refactor/replace direction.
- [x] Baseline install, typecheck, build, lint/check, and dependency audit run.
- [x] High-risk content, asset, accessibility, and security issues recorded.
- [x] No production component behavior changed during the audit.
