# Frontend Dependency Decisions

**Task:** FND-011  
**Branch:** `bishowdip`  
**Reviewed:** 2026-09-05

## Approved decisions

| Capability | Decision | Installation state | Reason |
|---|---|---|---|
| Layout and styling | Keep Tailwind CSS and shared CSS variables | Existing | Already established; sufficient for the audited design. |
| Simple motion | Native CSS transitions plus `IntersectionObserver` | Implemented | Covers reveal, stagger, hover, and reduced-motion behavior without another runtime dependency. |
| Counters | Local `requestAnimationFrame` component | Implemented | Small, deterministic, and accessible fallback is under team control. |
| Accordion | Local React component | Implemented | No third-party package is required for the specified behavior. |
| Carousel | Prefer one Embla integration if manual implementation becomes risky | Deferred | Install only in HOME-T02; do not add Owl, Swiper, and Embla together. |
| Icons | Local reviewed SVG components | Approved | Avoid loading several icon fonts or a broad icon package. Decorative SVGs must use `aria-hidden`; meaningful icons need names. |
| Forms | Existing Zod plus native React initially | Deferred | Add React Hook Form only if INT-T01 demonstrates enough complexity to justify it. |
| Server state | TanStack Query | Review before removal | Existing ecommerce code may use it; the marketing homepage does not currently require it. |
| Client state | Zustand | Review before removal | Existing ecommerce code may use it; shared marketing components should prefer local state. |
| Component tests | Vitest 4, Testing Library, user-event, jest-dom, jsdom | Installed | Compatible with React 18 and the local Node runtime; tests behavior through the accessibility tree. |
| End-to-end tests | Playwright | Deferred | Add during the E2E portion of FND-012/QA-T09 with CI browser setup. |

## Version and security notes

- Local Node is 25.6.1.
- Vitest 5.0.0's published engine range does not include Node 25; Vitest 4.1.11 accepts Node 24 and newer.
- The existing Next.js 14 dependency chain reports two high-severity audit entries.
- Do not run `npm audit fix --force`; it proposes a major Next.js upgrade.
- Framework remediation requires a separate tested change covering Next.js, React, PostCSS, build behavior, route behavior, fonts, images, and tests.

## Dependency rules for contributors

1. Search this document before adding a package.
2. Record the capability, exact reason, alternatives considered, and bundle/runtime effect.
3. Use one package per capability.
4. Do not add a package for behavior already supplied by shared primitives.
5. Pin or lock through `package-lock.json` and commit the lockfile change.
6. Run tests, typecheck, build, and dependency audit after dependency changes.
7. Never force-upgrade around peer or engine warnings without an explicit migration task.
