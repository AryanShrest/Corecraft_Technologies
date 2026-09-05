# CoreCraft Website Clone — Project Progress Tracker

**Requirements:** [WEBSITE_CLONE_REQUIREMENTS.md](./WEBSITE_CLONE_REQUIREMENTS.md)  
**Integration branch:** `bishowdip`  
**Last updated:** 2026-09-05  
**Overall status:** In progress

> This file is the canonical task tracker. Before starting work, claim the task here and pull the latest branch. Do not begin a task already marked `IN PROGRESS`, `IN REVIEW`, or `BLOCKED` without contacting its owner.

---

## 1. How to use this tracker

### Status values

| Status | Meaning |
|---|---|
| `NOT STARTED` | Nobody has begun the task. |
| `READY` | Dependencies and decisions are complete; the task can be claimed. |
| `IN PROGRESS` | One named owner is actively implementing it. |
| `BLOCKED` | Work cannot continue; blocker and decision owner are recorded. |
| `IN REVIEW` | Implementation is complete and a pull request is awaiting review. |
| `CHANGES REQUESTED` | Reviewer requested corrections. |
| `DONE` | Merged, tested, and acceptance evidence is recorded. |
| `DEFERRED` | Explicitly removed from the current release, with approval recorded. |

### Claiming a task

Before writing code:

1. Pull or fetch the latest agreed integration branch.
2. Confirm the task is not owned by someone else.
3. Enter your name in **Owner**.
4. Change the task to `IN PROGRESS`.
5. Add the branch name.
6. Add the start date.
7. Commit the tracker update before substantial implementation.
8. Notify the team in the agreed communication channel.

### Completing a task

A task becomes `DONE` only after:

- Its pull request is merged.
- Requirement acceptance criteria pass.
- Tests and verification evidence are linked.
- Any known deviation is recorded.
- The PR or commit reference is added to this file.

Writing code alone does not make a task complete.

### Ownership rules

- One primary owner per task.
- A second person may be listed as reviewer or pair programmer.
- Never edit another person's owned files without coordination.
- If a task touches a shared component, notify all dependent task owners first.
- A blocked task remains owned until reassigned explicitly.
- Contributors must update this file in the same PR as their implementation.

---

## 2. Team roster and ownership

Replace placeholders before development begins.

| Team member | Primary area | Active branch | Current task | Availability |
|---|---|---|---|---|
| Bishowdip | Integration, foundation, final review | `bishowdip` | Documentation/setup | Active |
| Developer 2 — `TBD` | Homepage static sections | `TBD` | Unassigned | `TBD` |
| Developer 3 — `TBD` | Motion and responsive QA | `TBD` | Unassigned | `TBD` |
| Developer 4 — `TBD` | Internal pages and integrations | `TBD` | Unassigned | `TBD` |

### Shared-file ownership

| File or area | Owner | Edit policy |
|---|---|---|
| `PROJECT_PROGRESS.md` | All contributors | Update only assigned rows and logs; resolve conflicts carefully. |
| `WEBSITE_CLONE_REQUIREMENTS.md` | Bishowdip/integration owner | Changes require review and a recorded decision. |
| `src/app/globals.css` and design tokens | Foundation owner | Other owners request or coordinate token changes. |
| Shared header/footer/layout | Foundation owner | Coordinate before modification. |
| Shared content/data models | Foundation + content owner | Schema changes require dependent-owner review. |
| Shared motion primitives | Motion owner | Consumers may configure but should not duplicate primitives. |

---

## 3. Project dashboard

| Milestone | Status | Owner | Target | Completed | Evidence/notes |
|---|---|---|---|---|---|
| M0 — Decisions and asset clearance | `NOT STARTED` | `TBD` | `TBD` | — | — |
| M1 — Foundation | `NOT STARTED` | Bishowdip | `TBD` | — | — |
| M2 — Shared shell | `NOT STARTED` | `TBD` | `TBD` | — | — |
| M3 — Homepage static fidelity | `NOT STARTED` | `TBD` | `TBD` | — | — |
| M4 — Motion system | `NOT STARTED` | `TBD` | `TBD` | — | — |
| M5 — Internal pages | `NOT STARTED` | `TBD` | `TBD` | — | — |
| M6 — Forms and integrations | `NOT STARTED` | `TBD` | `TBD` | — | — |
| M7 — Accessibility, SEO, performance | `NOT STARTED` | `TBD` | `TBD` | — | — |
| M8 — Release QA and launch | `NOT STARTED` | `TBD` | `TBD` | — | — |

### Progress totals

Update these counts whenever a task moves to `DONE`.

| Category | Done | Total | Progress |
|---|---:|---:|---:|
| Decisions/assets | 0 | 12 | 0% |
| Foundation | 1 | 12 | 8% |
| Shared shell | 0 | 8 | 0% |
| Homepage | 0 | 12 | 0% |
| Motion/responsive | 0 | 10 | 0% |
| Internal pages | 0 | 8 | 0% |
| Forms/integrations | 0 | 8 | 0% |
| Quality/release | 0 | 14 | 0% |
| **Overall** | **1** | **84** | **1%** |

---

## 4. Decision and asset tasks

These tasks block accurate implementation. Do not replace them with assumptions.

| Task | Requirement | Deliverable | Owner | Status | Depends on | Branch/PR | Evidence/notes |
|---|---|---|---|---|---|---|---|
| DEC-001 | §2, §13 | Confirm permission to reproduce the design and written content | `TBD` | `NOT STARTED` | Client/owner | — | — |
| DEC-002 | §2, §13 | Approve logo files and usage | `TBD` | `NOT STARTED` | DEC-001 | — | — |
| DEC-003 | §2, §13 | Approve all website photos/illustrations and record sources | `TBD` | `NOT STARTED` | DEC-001 | — | — |
| DEC-004 | HOME-006 | Confirm all statistic numbers and suffixes | `TBD` | `NOT STARTED` | Client/owner | — | Never invent values. |
| DEC-005 | GLO-002 | Decide Pricing link/page behavior | `TBD` | `NOT STARTED` | Client/owner | — | Hide until approved rather than linking to `#`. |
| DEC-006 | HOME-004, PAGE-003 | Confirm service-detail destinations | `TBD` | `NOT STARTED` | Content owner | — | — |
| DEC-007 | FORM-003 | Confirm contact-form recipient and mail provider | `TBD` | `NOT STARTED` | Client/owner | — | Keep credentials out of Git. |
| DEC-008 | FORM-004 | Confirm newsletter provider, audience, and consent copy | `TBD` | `NOT STARTED` | Client/owner | — | — |
| DEC-009 | PAGE-004 | Confirm address, map coordinates, phone, email, and opening hours | `TBD` | `NOT STARTED` | Client/owner | — | Normalize in one settings object. |
| DEC-010 | PAGE-005/006 | Approve legitimate blog posts and reject suspicious legacy posts | `TBD` | `NOT STARTED` | Security/content review | — | Do not import old database blindly. |
| DEC-011 | HOME-009 | Approve feature-strip labels/icons or remove the section | `TBD` | `NOT STARTED` | Content/design | — | — |
| DEC-012 | §13 | Approve final site copy, social URLs, and legal entity name | `TBD` | `NOT STARTED` | Client/owner | — | — |

---

## 5. Foundation tasks

| Task | Requirement | Deliverable | Owner | Status | Depends on | Branch/PR | Evidence/notes |
|---|---|---|---|---|---|---|---|
| FND-001 | §3 | Confirm team names, branches, ownership, and reviewers | Bishowdip | `BLOCKED` | Team member identities | `bishowdip` | Waiting for the other three names/handles. |
| FND-002 | §5 | Audit existing frontend components before changing architecture | Bishowdip | `DONE` | — | `bishowdip` | See `FRONTEND_BASELINE_AUDIT.md`; baseline typecheck/build pass, Biome and audit fail. |
| FND-003 | §5.5 | Confirm route and folder migration plan | `TBD` | `NOT STARTED` | FND-002 | — | Avoid one huge rename PR. |
| FND-004 | §6.1 | Create approved CSS color tokens | `TBD` | `NOT STARTED` | Reference captures | — | Include sampled values. |
| FND-005 | §6.2 | Confirm and configure no more than two font families | `TBD` | `NOT STARTED` | Asset/license review | — | Record weights and loading method. |
| FND-006 | §6.3/6.4 | Implement containers, grids, spacing, and breakpoints | `TBD` | `NOT STARTED` | FND-004 | — | Test at all required widths. |
| FND-007 | §6.5 | Build shared Button and icon-button primitives | `TBD` | `NOT STARTED` | FND-004/005 | — | Include focus/disabled/loading states. |
| FND-008 | §6.5 | Build SectionHeading and media-frame primitives | `TBD` | `NOT STARTED` | FND-004/005/006 | — | — |
| FND-009 | §13 | Create typed site settings and navigation data | `TBD` | `NOT STARTED` | DEC-005/009/012 | — | Temporary `TBD` values must not ship. |
| FND-010 | §13 | Create typed hero, service, benefit, FAQ, and statistic data | `TBD` | `NOT STARTED` | DEC-004/006 | — | No duplicated content in components. |
| FND-011 | §5.2 | Review and approve required dependencies | `TBD` | `NOT STARTED` | FND-002 | — | One carousel and one icon strategy only. |
| FND-012 | §18 | Configure component/E2E/accessibility/visual test foundation | `TBD` | `NOT STARTED` | FND-002 | — | Document new commands. |

---

## 6. Shared shell tasks

| Task | Requirement | Deliverable | Owner | Status | Depends on | Branch/PR | Evidence/notes |
|---|---|---|---|---|---|---|---|
| SHELL-001 | GLO-001 | Top information bar | `TBD` | `NOT STARTED` | FND-004/005/006/009 | — | Desktop behavior verified. |
| SHELL-002 | GLO-002 | Main desktop header and active routes | `TBD` | `NOT STARTED` | SHELL-001, DEC-005 | — | No placeholder routes. |
| SHELL-003 | GLO-003 | Sticky header without duplicate DOM bugs/layout shift | `TBD` | `NOT STARTED` | SHELL-002 | — | Scroll both directions. |
| SHELL-004 | GLO-004 | Accessible mobile off-canvas navigation | `TBD` | `NOT STARTED` | SHELL-002 | — | Focus trap, Escape, scroll lock. |
| SHELL-005 | GLO-005 | Functional search or approved removal | `TBD` | `NOT STARTED` | Search scope decision | — | Decorative search is forbidden. |
| SHELL-006 | GLO-006 | Shared footer and copyright bar | `TBD` | `NOT STARTED` | FND-009, DEC-010/012 | — | No suspicious recent posts. |
| SHELL-007 | GLO-007 | Accessible scroll-to-top control | `TBD` | `NOT STARTED` | MOT-001 | — | Reduced-motion behavior. |
| SHELL-008 | PAGE-001 | Reusable internal-page header/banner/breadcrumb | `TBD` | `NOT STARTED` | SHELL-002, FND-008 | — | Exactly one page `h1`. |

---

## 7. Homepage tasks

| Task | Requirement | Deliverable | Owner | Status | Depends on | Branch/PR | Evidence/notes |
|---|---|---|---|---|---|---|---|
| HOME-T01 | HOME-001 | Static hero structure and responsive imagery | `TBD` | `NOT STARTED` | FND-006/007/010, DEC-003 | — | Motion handled separately. |
| HOME-T02 | HOME-001 | Hero carousel, controls, autoplay, swipe, accessibility | `TBD` | `NOT STARTED` | HOME-T01, MOT-T01 | — | Pause on hover/focus. |
| HOME-T03 | HOME-002 | How We Work section | `TBD` | `NOT STARTED` | FND-008, DEC-003 | — | `/services` CTA. |
| HOME-T04 | HOME-003 | Innovation/process CTA section | `TBD` | `NOT STARTED` | Approved copy/assets | — | No invented steps. |
| HOME-T05 | HOME-004 | Six-card service grid | `TBD` | `NOT STARTED` | FND-010, DEC-003/006 | — | Reused on Services page. |
| HOME-T06 | HOME-005 | Why CoreCraft benefits section | `TBD` | `NOT STARTED` | FND-010, DEC-003 | — | Semantic mobile order. |
| HOME-T07 | HOME-006 | Statistics layout and verified counter values | `TBD` | `NOT STARTED` | DEC-004, MOT-T03 | — | No suffix-only values. |
| HOME-T08 | HOME-006 | Accessible FAQ accordion | `TBD` | `NOT STARTED` | FND-010, MOT-T04 | — | Keyboard/ARIA tests. |
| HOME-T09 | HOME-007 | Consultation CTA band | `TBD` | `NOT STARTED` | FND-009, DEC-009 | — | Valid phone and contact route. |
| HOME-T10 | HOME-008 | Commitment/solution section | `TBD` | `NOT STARTED` | DEC-003, FND-008/010 | — | Approved image and copy. |
| HOME-T11 | HOME-009 | Feature strip or approved removal | `TBD` | `NOT STARTED` | DEC-011 | — | No empty section. |
| HOME-T12 | HOME-011 | Approved latest-blog carousel/grid | `TBD` | `NOT STARTED` | DEC-010, blog data model | — | No duplicated cards when unnecessary. |

Contact and newsletter homepage sections are tracked under integrations so their implementation is not duplicated.

---

## 8. Motion and responsive tasks

| Task | Requirement | Deliverable | Owner | Status | Depends on | Branch/PR | Evidence/notes |
|---|---|---|---|---|---|---|---|
| MOT-T01 | MOT-001 | Central motion durations/easing tokens | `TBD` | `NOT STARTED` | Reference recording | — | No per-component random timing. |
| MOT-T02 | MOT-002/003 | Reusable reveal and stagger primitives | `TBD` | `NOT STARTED` | MOT-T01 | — | Server content remains usable. |
| MOT-T03 | MOT-002, HOME-006 | One-time animated counter primitive | `TBD` | `NOT STARTED` | MOT-T01 | — | Immediate final value under reduced motion. |
| MOT-T04 | MOT-001, HOME-006 | Reusable accordion transition | `TBD` | `NOT STARTED` | MOT-T01 | — | No clipped dynamic content. |
| MOT-T05 | MOT-004 | Shared card/button hover motion | `TBD` | `NOT STARTED` | MOT-T01, FND-007 | — | Touch-safe. |
| MOT-T06 | MOT-005 | Approved parallax/tilt behavior | `TBD` | `NOT STARTED` | DEC-003, MOT-T01 | — | Disable on touch/reduced motion. |
| MOT-T07 | MOT-006 | Optional desktop custom cursor | `TBD` | `NOT STARTED` | MOT-T01 | — | May be deferred for usability/performance. |
| RWD-T01 | §11 | Eliminate horizontal overflow at all required widths | `TBD` | `NOT STARTED` | Main layouts | — | Record automated measurement. |
| RWD-T02 | §11 | Complete tablet/mobile section layouts and image crops | `TBD` | `NOT STARTED` | Homepage/internal pages | — | Screenshots at all required sizes. |
| RWD-T03 | §11, §14 | Verify 44 px targets, 200% zoom, reduced motion | `TBD` | `NOT STARTED` | RWD-T02, motion tasks | — | Manual evidence required. |

---

## 9. Internal page tasks

| Task | Requirement | Deliverable | Owner | Status | Depends on | Branch/PR | Evidence/notes |
|---|---|---|---|---|---|---|---|
| PAGE-T01 | PAGE-002 | About page in specified section order | `TBD` | `NOT STARTED` | SHELL-008, approved About copy | — | No invented company claims. |
| PAGE-T02 | PAGE-003 | Services page using shared service data/components | `TBD` | `NOT STARTED` | SHELL-008, HOME-T05 | — | No duplicate service source. |
| PAGE-T03 | PAGE-004 | Contact page structure and approved contact details | `TBD` | `NOT STARTED` | SHELL-008, DEC-009 | — | Map only if exact location approved. |
| PAGE-T04 | PAGE-005 | Blog listing and responsive sidebar | `TBD` | `NOT STARTED` | SHELL-008, DEC-010 | — | Canonical `/blog`. |
| PAGE-T05 | PAGE-006 | Individual blog article template | `TBD` | `NOT STARTED` | PAGE-T04 | — | Structured article semantics. |
| PAGE-T06 | PAGE-007 | Search results and category/archive pages | `TBD` | `NOT STARTED` | PAGE-T04, SHELL-005 | — | Query/pagination reflected in URL. |
| PAGE-T07 | PAGE-008 | Branded real 404 page | `TBD` | `NOT STARTED` | FND-007, SHELL-006 | — | Must return 404. |
| PAGE-T08 | §15 | Legacy redirect map, sitemap, and robots routes | `TBD` | `NOT STARTED` | Final route list | — | Include legacy blog route decision. |

---

## 10. Form and integration tasks

| Task | Requirement | Deliverable | Owner | Status | Depends on | Branch/PR | Evidence/notes |
|---|---|---|---|---|---|---|---|
| INT-T01 | FORM-001/002 | Accessible contact-form UI and validation | `TBD` | `NOT STARTED` | FND-007, DEC-009 | — | Idle/error/loading/success states. |
| INT-T02 | FORM-003 | Secure server submission endpoint | `TBD` | `NOT STARTED` | DEC-007, INT-T01 | — | Server validation and rate limit. |
| INT-T03 | HOME-010 | Homepage contact section using shared form | `TBD` | `NOT STARTED` | INT-T01, DEC-003/009 | — | Do not duplicate form logic. |
| INT-T04 | PAGE-004 | Contact-page integration using shared form | `TBD` | `NOT STARTED` | PAGE-T03, INT-T01/002 | — | — |
| INT-T05 | FORM-004 | Newsletter UI and validation | `TBD` | `NOT STARTED` | DEC-008, SHELL-006 | — | Do not fake success. |
| INT-T06 | FORM-004 | Newsletter provider/backend integration | `TBD` | `NOT STARTED` | INT-T05, DEC-008 | — | Consent and provider errors. |
| INT-T07 | FORM-005 | Privacy notice and retention/consent behavior | `TBD` | `NOT STARTED` | DEC-007/008 | — | Required before production collection. |
| INT-T08 | §5.3, §13 | Final CMS or typed-content integration | `TBD` | `NOT STARTED` | DEC-010, FND-010 | — | Sanitize any CMS HTML. |

---

## 11. Quality and release tasks

| Task | Requirement | Deliverable | Owner | Status | Depends on | Branch/PR | Evidence/notes |
|---|---|---|---|---|---|---|---|
| QA-T01 | §14 | Keyboard-only audit | `TBD` | `NOT STARTED` | Feature complete | — | Record issues/results. |
| QA-T02 | §14 | Screen-reader smoke test | `TBD` | `NOT STARTED` | Feature complete | — | VoiceOver or NVDA. |
| QA-T03 | §14 | Automated accessibility audit | `TBD` | `NOT STARTED` | FND-012, feature complete | — | No serious/critical findings. |
| QA-T04 | §15 | Metadata, canonical, structured data, sitemap, robots audit | `TBD` | `NOT STARTED` | PAGE-T08 | — | Staging must be `noindex`. |
| QA-T05 | §16 | Image/font/bundle optimization | `TBD` | `NOT STARTED` | Feature complete | — | Record bundle and asset findings. |
| QA-T06 | §16 | Core Web Vitals/Lighthouse validation | `TBD` | `NOT STARTED` | QA-T05 | — | Record mobile reports. |
| QA-T07 | §17 | Form, dependency, headers, CSP, and secret review | `TBD` | `NOT STARTED` | Integrations complete | — | No sensitive values in repo. |
| QA-T08 | §18 | Component/unit test pass | `TBD` | `NOT STARTED` | FND-012, feature complete | — | Link CI run. |
| QA-T09 | §18 | End-to-end critical-flow test pass | `TBD` | `NOT STARTED` | FND-012, feature complete | — | Desktop and mobile. |
| QA-T10 | §18 | Broken-link and route crawl | `TBD` | `NOT STARTED` | All routes complete | — | No demo or `#` links. |
| QA-T11 | §18/19 | Visual regression comparison | `TBD` | `NOT STARTED` | All pages styled | — | Store required viewport evidence. |
| QA-T12 | §18 | Cross-browser/device manual test | `TBD` | `NOT STARTED` | Release candidate | — | Chrome/Safari/Firefox/Edge/iOS/Android. |
| QA-T13 | §18.3 | Final check, typecheck, build, and test commands | `TBD` | `NOT STARTED` | Release candidate | — | Paste CI link/results. |
| QA-T14 | §21 | Stakeholder acceptance and launch/rollback documentation | `TBD` | `NOT STARTED` | QA-T01–T13 | — | Final release gate. |

---

## 12. Current sprint

**Sprint name:** Setup and decision capture  
**Sprint dates:** `TBD`  
**Sprint goal:** Establish verified content/assets, shared design foundations, and non-overlapping ownership.

| Priority | Task | Owner | Status | Planned completion | Notes |
|---:|---|---|---|---|---|
| 1 | FND-001 — Confirm roster and ownership | Bishowdip | `BLOCKED` | `TBD` | Waiting for the other three team names/handles. |
| 2 | DEC-001 — Confirm reproduction permission | `TBD` | `NOT STARTED` | `TBD` | Blocks asset reuse. |
| 3 | FND-002 — Audit current components | Bishowdip | `DONE` | 2026-09-05 | See `FRONTEND_BASELINE_AUDIT.md`. |
| 4 | DEC-004/005/006/009 — Resolve core content decisions | `TBD` | `NOT STARTED` | `TBD` | Required for shared data. |
| 5 | FND-004/005/006 — Design tokens and layout | `TBD` | `NOT STARTED` | `TBD` | Foundation for all UI work. |
| 6 | FND-009/010 — Typed content | `TBD` | `NOT STARTED` | `TBD` | Blocks page implementation. |

### Sprint risks/blockers

| ID | Risk/blocker | Impact | Owner | State | Resolution/decision needed |
|---|---|---|---|---|---|
| RISK-001 | Asset ownership is not recorded | Images/logo may not be legally reusable | `TBD` | Open | Complete DEC-001–003. |
| RISK-002 | Reference statistics are missing values | Cannot faithfully build counters | `TBD` | Open | Complete DEC-004. |
| RISK-003 | Legacy blog appears contaminated | Unsafe or irrelevant content migration | `TBD` | Open | Complete security and content review under DEC-010. |
| RISK-004 | Existing repository is named/configured for ecommerce | Contributors may expand scope accidentally | Bishowdip | Open | Enforce marketing-site boundary in requirements. |
| RISK-005 | Frontend dependency audit reports two high-severity entries | Production security/reliability risk | Bishowdip | Open | Plan a tested Next.js/PostCSS upgrade; do not force-upgrade automatically. |
| RISK-006 | `npm run check` reports 118 existing errors | Merge quality gate is currently unreliable | Bishowdip | Open | Fix in scoped foundation work and keep typecheck/build green. |

---

## 13. Blocker log

Add a row immediately when a task changes to `BLOCKED`.

| Date | Task | Owner | Blocker | Waiting on | Next action | Last updated |
|---|---|---|---|---|---|---|
| 2026-09-05 | FND-001 | Bishowdip | Other three team identities/handles are unknown | Project owner | Provide names/handles and branch naming preference | 2026-09-05 |

---

## 14. Decision log

Record decisions that affect multiple contributors. Never rely only on chat history.

| Date | Decision ID | Decision | Approved by | Affected tasks/files | Link/evidence |
|---|---|---|---|---|---|
| 2026-09-05 | ADR-001 | Work begins from branch `bishowdip`; `main` is not edited directly. | Bishowdip | All tasks | Git branch state |
| 2026-09-05 | ADR-002 | `WEBSITE_CLONE_REQUIREMENTS.md` is the requirement source of truth. | Bishowdip | All tasks | Requirements document |
| 2026-09-05 | ADR-003 | Existing homepage components are prototypes to refactor or replace; do not independently duplicate them. | Bishowdip | FND and HOME tasks | `FRONTEND_BASELINE_AUDIT.md` |

---

## 15. Pull-request and merge log

| Date | PR | Branch | Owner | Tasks completed | Reviewer | Result | Notes |
|---|---|---|---|---|---|---|---|
| — | — | — | — | — | — | — | — |

---

## 16. Verification evidence log

| Date | Task/page | Viewport/browser | Check performed | Result | Evidence link | Verified by |
|---|---|---|---|---|---|---|
| 2026-09-05 | FND-002 | Local baseline | Component/route audit, typecheck, build, Biome, npm audit | Partial pass | `FRONTEND_BASELINE_AUDIT.md` | Bishowdip |

---

## 17. Completed work archive

Move a task summary here only after its tracker row is `DONE`. Keep the original task row for counting and traceability.

| Completed date | Task | Owner | PR/commit | Verification summary |
|---|---|---|---|---|
| 2026-09-05 | FND-002 | Bishowdip | Pending commit | Existing frontend audited; typecheck/build pass; 118 Biome errors and two high-severity dependency entries recorded. |

---

## 18. Daily update template

Each contributor can copy this into the team update channel:

```markdown
### Name — YYYY-MM-DD

- Completed: TASK-ID — short outcome
- Working on: TASK-ID — current scope
- Next: TASK-ID
- Blocked by: none / exact blocker and owner needed
- Files owned today: list exact components/files
- PR: link or not opened
```

---

## 19. Final release checklist

### Scope and content

- [ ] All approved routes exist.
- [ ] All `TBD` values required for production are resolved.
- [ ] No suspicious legacy blog content was imported.
- [ ] No unapproved claims, statistics, prices, or testimonials were invented.
- [ ] All asset rights/sources are recorded.
- [ ] Phone, email, address, hours, and social links are consistent.

### Functionality

- [ ] Header, sticky header, mobile menu, and search behave as specified.
- [ ] Hero autoplay, manual controls, pause, and swipe work.
- [ ] Counters and accordion work accessibly.
- [ ] Contact form success and failure paths work.
- [ ] Newsletter is connected or intentionally removed.
- [ ] Blog, categories/search, pagination, and 404 work.
- [ ] No internal link is broken.
- [ ] No link points to `#` or the Tolak demo.

### Responsive and visual

- [ ] All required viewport screenshots are approved.
- [ ] No horizontal overflow exists.
- [ ] Image crops are approved on desktop and mobile.
- [ ] Motion matches the recorded reference closely.
- [ ] Reduced-motion mode is complete.
- [ ] 200% zoom remains usable.

### Quality

- [ ] Accessibility audit passes.
- [ ] Keyboard and screen-reader smoke tests pass.
- [ ] Required browsers and mobile devices pass.
- [ ] Core Web Vitals and Lighthouse targets pass.
- [ ] Security review passes.
- [ ] `npm run check` passes.
- [ ] `npm run typecheck` passes.
- [ ] `npm run build` passes.
- [ ] Automated tests pass.

### Release

- [ ] Production environment variables are configured.
- [ ] Staging is `noindex`; production indexing is correct.
- [ ] Redirects, sitemap, robots, canonical metadata, and structured data are verified.
- [ ] Monitoring and error reporting are active.
- [ ] Backup and rollback procedure is documented and tested.
- [ ] Stakeholder acceptance is recorded.

---

## 20. Tracker integrity rules

- Never delete completed task history.
- Never mark work `DONE` before merge and verification.
- Never remove a blocker without recording its resolution.
- Never change requirement scope only in this file; update the requirements document and decision log together.
- Never reuse a task ID for different work.
- Split unexpectedly large work into child IDs such as `HOME-T02a` and `HOME-T02b`.
- Add newly discovered defects as `BUG-###` tasks with owner, severity, reproduction steps, and evidence.
- Recalculate dashboard totals whenever tasks are added, removed, deferred, or completed.
- If two branches change this tracker, preserve both contributors' updates during conflict resolution.
