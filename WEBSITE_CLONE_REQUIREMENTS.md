# CoreCraft Technologies Website Clone — Product and Engineering Requirements

**Reference website:** <https://corecraftnepal.com/>  
**Repository:** `Corecraft_Technologies`  
**Working branch:** `bishowdip`  
**Document status:** Implementation source of truth  
**Audience:** Four-person design and engineering team  
**Last audited:** 2026-09-05

---

## 1. Purpose

Build a production-quality reproduction of the public CoreCraft Technologies website. The new site must match the reference site's recognizable visual design, content structure, responsive layout, transitions, and interactive behavior while correcting broken links, malformed content, accessibility problems, and performance issues found during the audit.

This document is the canonical requirements specification. Contributors must not invent missing content, destinations, statistics, form recipients, or business claims. Any unresolved value must remain marked `TBD` and be confirmed in an issue or pull request before it is shipped.

### 1.1 Meaning of “same website”

“Same” means:

- Same information architecture and approved page set.
- Same section order and visual hierarchy.
- Closely matched typography, colors, spacing, imagery, borders, shapes, and responsive behavior.
- Equivalent hero slider, sticky header, mobile navigation, reveal animations, counters, accordions, hover effects, and carousels.
- Same approved business content after spelling, destination, and security review.
- Same user-visible functionality, implemented with the repository's React/Next.js stack rather than copied WordPress/Elementor markup.

“Same” does **not** mean:

- Copying suspicious blog posts, malicious content, third-party demo links, or compromised WordPress data.
- Reproducing obvious bugs, inaccessible behavior, horizontal overflow, empty sections, or malformed telephone URLs.
- Adding ecommerce, login, cart, checkout, or payment features merely because unrelated ecommerce code exists in the repository.
- Scraping or hotlinking production assets indefinitely.

---

## 2. Non-negotiable guardrails

1. Confirm ownership or permission before reusing the logo, photos, illustrations, font files, written content, and blog media.
2. Store approved assets locally or in the team's approved media service. Do not depend on WordPress theme-demo URLs.
3. Do not migrate the suspicious software/crack/torrent articles currently visible on the reference website.
4. Do not invent statistics. Values such as client satisfaction, completed projects, and customers supported require written confirmation.
5. Do not invent service prices. The reference Pricing item currently points to `#`; it is not a defined page.
6. Do not submit forms to the old production WordPress installation.
7. The public website scope is separate from the repository's ecommerce backend. No ecommerce API is required for this project unless separately approved.
8. Every feature must work with keyboard input, touch, and `prefers-reduced-motion`.
9. No pull request may contain unrelated formatting or backend refactors.

---

## 3. Git and four-person collaboration workflow

### 3.1 Branches

- `main` is protected and must remain deployable.
- This specification was created from a clean `main` on branch `bishowdip`.
- Each contributor creates a focused branch from the latest agreed integration base.
- Recommended names:
  - `bishowdip/site-foundation`
  - `developer-2/homepage-sections`
  - `developer-3/motion-responsive`
  - `developer-4/internal-pages-forms`
- Never allow two contributors to modify the same component without explicitly assigning ownership first.
- Merge through pull requests. Do not push directly to `main`.
- Rebase or merge the current integration branch before requesting final review.

### 3.2 Commit rules

- Keep commits small and scoped to one behavior.
- Suggested prefixes: `feat:`, `fix:`, `refactor:`, `test:`, `docs:`, `chore:`.
- Never commit `.env`, API keys, email credentials, database secrets, generated build folders, or downloaded production backups.
- Do not commit visual assets until ownership and intended use are recorded.

### 3.3 Pull-request checklist

Every PR must include:

- Requirement IDs completed.
- Pages and breakpoints affected.
- Before/after screenshots or a short recording for visual or motion changes.
- Commands run and their results.
- Accessibility notes.
- Known deviations from the reference.
- Confirmation that there is no horizontal overflow at affected breakpoints.
- Confirmation that reduced-motion behavior was tested when animations changed.

### 3.4 Recommended ownership split

| Owner | Primary responsibility | Files/components | Must coordinate with |
|---|---|---|---|
| Person 1 | Foundation and shared shell | tokens, fonts, layout, header, navigation, footer, reusable UI | Everyone |
| Person 2 | Homepage content | hero content, process, services, benefits, commitment, CTA | Person 3 for motion |
| Person 3 | Motion and responsive QA | carousel, reveals, counters, accordion, breakpoints, reduced motion | Persons 1 and 2 |
| Person 4 | Internal pages and integrations | About, Services, Contact, Blog, forms, metadata | Person 1 for shared templates |

One person owns final integration and visual sign-off. Component ownership must be recorded in project issues before implementation begins.

---

## 4. Audited reference baseline

The reference site was inspected as rendered at desktop and mobile sizes.

### 4.1 Detected implementation

- WordPress and Elementor.
- Tolak theme and Tolak Addon.
- Bootstrap 5 and jQuery.
- Owl Carousel and Swiper.
- WOW.js and Animate.css.
- Jarallax and Tilt.js.
- Odometer/counter animation utilities.
- Contact Form 7.
- Multiple Google Fonts and icon-font libraries.

The clone should reproduce behaviors with modern, minimal dependencies; it should not copy this dependency stack.

### 4.2 Audited page sizes at 1440 × 900

| Page | Reference route | Approximate rendered height |
|---|---|---:|
| Home | `/` | 8,894 px |
| About | `/about/` | 4,576 px |
| Services | `/services/` | 2,827 px |
| Contact | `/contact/` | 2,415 px |
| Blog listing | `/blog-grid-right/` | 5,081 px |

These heights are diagnostic references, not hard-coded targets. Content must determine height naturally.

### 4.3 Confirmed defects in the reference

- Hero and service links lead to the Tolak vendor demo.
- Pricing and several arrow/footer links lead to `#`.
- Social links are inconsistent; some point only to platform homepages.
- Telephone URLs use several inconsistent and malformed formats.
- Several labels contain spelling or grammar errors.
- Some statistics render only `%` or `k+` without a number.
- Copyright displays the year twice.
- Important page headings are not consistently represented as `h1`.
- Forms depend on placeholders instead of persistent labels.
- Empty team/project/text-slider sections remain in the DOM.
- The mobile layout is unusually long and displayed a width mismatch/overflow condition during audit.
- The blog contains suspicious and irrelevant software/crack/torrent content.

Each defect must be handled by an explicit content decision; it must not be silently copied.

---

## 5. Target technical architecture

### 5.1 Required frontend baseline

Use the existing application in `frontend-ecommerce`:

- Next.js 14 App Router.
- React 18.
- TypeScript with strict type checking.
- Tailwind CSS 3.4, supplemented by CSS modules or global tokens only where needed.
- Existing Biome configuration for linting and formatting.

### 5.2 Approved additions

Add a dependency only when it replaces substantial custom complexity:

- `framer-motion` for coordinated motion and reduced-motion handling.
- `embla-carousel-react` or one shared carousel package. Do not install multiple carousel libraries.
- `react-hook-form` with `zod` for form state and validation.
- `lucide-react` or a single approved SVG icon set.

Dependencies require review before installation. Prefer CSS transitions and `IntersectionObserver` for simple reveals.

### 5.3 Rendering model

- Public informational pages should be statically rendered or incrementally regenerated.
- Interactive islands must be client components only where browser state is necessary.
- Do not turn an entire page into a client component to support one animation.
- Blog and page content must have a typed data source. Until a CMS is selected, keep content in typed local data modules.

### 5.4 Project boundaries

- Website frontend: `frontend-ecommerce`.
- Existing Express backend: do not change unless approved for form delivery or CMS integration.
- Contact and newsletter endpoints must be isolated from ecommerce authentication, products, orders, carts, and payments.

### 5.5 Required folder direction

```text
frontend-ecommerce/src/
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx
│   │   ├── about/page.tsx
│   │   ├── services/page.tsx
│   │   ├── contact/page.tsx
│   │   └── blog/
│   │       ├── page.tsx
│   │       └── [slug]/page.tsx
│   ├── layout.tsx
│   ├── not-found.tsx
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── layout/
│   ├── home/
│   ├── blog/
│   ├── forms/
│   ├── motion/
│   └── ui/
├── content/
├── lib/
├── styles/
└── types/
```

Existing component files may be migrated incrementally. Avoid a large rename-only change while multiple people are developing.

---

## 6. Design tokens

All values below must be measured against captured screenshots before final sign-off. Do not scatter literals across components.

### 6.1 Color roles

Create variables for:

- `--color-brand-primary`: primary electric/royal blue.
- `--color-brand-primary-hover`: darker hover blue.
- `--color-brand-secondary`: supporting cyan/light blue if present in the logo.
- `--color-navy`: top bar and dark emphasis areas.
- `--color-surface-dark`: charcoal hero/footer background.
- `--color-surface-light`: pale gray alternate-section background.
- `--color-surface-white`.
- `--color-heading`.
- `--color-body`.
- `--color-muted`.
- `--color-border`.
- `--color-success`, `--color-error`, and `--color-focus`.

Initial values must be sampled from approved screenshots, then documented in the token file.

### 6.2 Typography

Reference assets load Rubik, Raleway, Barlow, Red Hat Text, Heebo, Open Sans, Mukta, Saira, Roboto, and Roboto Slab. The clone must not load all of them.

Required process:

1. Determine the visible heading, body, and accent families from screenshots/computed styles.
2. Select no more than two font families unless the logo contains baked-in typography.
3. Self-host licensed font files or use `next/font`.
4. Define fluid styles for display, `h1`–`h6`, body, small copy, navigation, labels, and buttons.
5. Preserve readable line length, approximately 45–75 characters for paragraphs.

### 6.3 Layout tokens

- Centered content container: measure against the reference; expected maximum approximately 1,200–1,300 px.
- Standard horizontal page padding must scale at desktop, tablet, and mobile.
- Standard section spacing must be tokenized for compact, normal, large, and hero sections.
- Use a consistent 12-column desktop grid or equivalent CSS grid.
- Do not use absolute positioning for primary document flow.

### 6.4 Breakpoints

Implement and test at minimum:

- Small mobile: 320–374 px.
- Mobile: 375–479 px.
- Large mobile: 480–767 px.
- Tablet: 768–991 px.
- Compact desktop: 992–1199 px.
- Desktop: 1200–1439 px.
- Large desktop: 1440 px and above.

### 6.5 Reusable visual primitives

- Primary, secondary, text, and icon-only buttons.
- Section eyebrow with decorative blue line.
- Section title and paragraph group.
- Responsive media frame.
- Feature list item with check icon.
- Service card.
- Blog card.
- Statistic item.
- Accordion item.
- Form field, error message, and submission notice.
- Carousel controls and pagination dots.

---

## 7. Global behavior requirements

### GLO-001 — Top information bar

- Desktop only unless approved otherwise.
- Left group: email and Kapan, Kathmandu.
- Right group: About Us, Service, and News links separated visually by slashes.
- Email uses a valid `mailto:` URL.
- Location must use an approved map destination or render as non-interactive text; never link to `#`.
- Height, background navy, icon spacing, and text alignment must match the reference.

### GLO-002 — Main desktop header

- White background with logo left, navigation centered/right, and Contact Us CTA at the far right.
- Routes: Home, About, Services, Pricing/TBD, Contact.
- Pricing must be hidden or disabled with an honest status until a page is approved; never use `#`.
- Active route has blue emphasis.
- All controls expose visible focus states.
- Logo has useful alternative text and returns to `/`.

### GLO-003 — Sticky header

- A compact header appears after the user scrolls beyond the original header.
- It must not create a layout jump.
- Entrance/exit should use transform and opacity, not layout-heavy properties.
- Repeated rapid scrolling must not create duplicate headers.
- Sticky behavior is disabled only if it obstructs small mobile screens.

### GLO-004 — Mobile navigation

- At the tablet/mobile breakpoint, replace the desktop nav with a hamburger button.
- Opening displays an off-canvas panel plus backdrop.
- Panel includes logo, navigation, contact details, and approved social links.
- Close through close button, backdrop click, Escape, or successful route change.
- Lock background scrolling while open.
- Trap keyboard focus in the panel and return focus to the trigger on close.
- Use `aria-expanded`, `aria-controls`, and an accessible label.

### GLO-005 — Search

- Match the reference search overlay/panel visual if search remains in scope.
- Search field has a real label, visible placeholder, submit button, Escape close behavior, and focus management.
- Submit navigates to an implemented search route.
- If site search is not implemented, remove the trigger instead of shipping a decorative control.

### GLO-006 — Footer

- Logo and opening-hours/contact block.
- Approved Facebook and Instagram destinations only.
- Recent-post block populated only with approved posts.
- Service navigation and quick links.
- Newsletter is specified separately.
- Copyright year is rendered once and may update automatically.
- On mobile, columns stack in a deliberate order with no clipped content.

### GLO-007 — Scroll-to-top

- Appears after meaningful scrolling.
- Smooth-scrolls to the page start unless reduced motion is requested.
- Keyboard accessible with an accessible name.

---

## 8. Homepage requirements

The homepage must preserve this exact section order unless a design decision is recorded.

### HOME-001 — Hero carousel

**Desktop structure**

- Starts immediately below the desktop header.
- Large photographic background with dark navy overlay for text contrast.
- Content aligned to the left within the main container.
- Eyebrow text with short blue rule.
- Large two-line title with selected words in blue and underlined.
- Supporting paragraph limited to a readable width.
- Blue Contact Now CTA.
- Floating client-satisfaction badge near the upper-right content area.
- Decorative geometric shapes and curved lower/side treatment.
- Pagination dots and/or arrow controls match the reference positions.

**Confirmed slide content**

Slide 1:

- Eyebrow: `WELCOME TO CORECRAFT TECHNOLOGIES`
- Title: `Your Digital Growth Partner`
- Body: `We design, develop, and deploy cutting-edge digital solutions that empower businesses to innovate, automate, and compete globally.`
- CTA destination: `/contact` after approval; never the Tolak demo.

Slide 2:

- Eyebrow: `FROM NEPAL TO THE WORLD`
- Title: `Empowering Business Through Technology`
- Body: `CoreCraft Technologies delivers custom websites, business software, mobile applications, and digital transformation services designed to help organizations succeed in the modern world.`
- CTA destination: `/contact` after approval.

**Carousel behavior**

- Autoplay interval target: 5–7 seconds, verified against reference recordings.
- Pause on pointer hover and keyboard focus.
- Manual navigation resets the autoplay timer.
- Transition must not shift page layout.
- Each newly active slide replays its staged text entrance once.
- Inactive slides must be hidden from assistive technology and tab order.
- Announce slide position without announcing every autoplay transition intrusively.
- Swipe must work on touch devices.

**Mobile behavior**

- Header remains above the hero and does not overlap content.
- Background uses an approved mobile crop.
- Text stays readable over the image; overlay strength may increase.
- Title size reduces fluidly and must not clip.
- Decorative shapes that cause overflow must be repositioned or hidden.
- Pagination remains visible above the bottom edge.
- The floating statistic badge may move, simplify, or hide according to the approved mobile reference.

### HOME-002 — How We Work / From Idea to Execution

- Display a client-satisfaction/statistic block and the headings `How We Work` and `From Idea To The Execution`.
- Reproduce the reference icon-led process presentation and author/avatar stack where approved assets exist.
- `More` links to `/services`.
- Layout transitions from horizontal desktop composition to readable stacked mobile content.
- Decorative elements cannot determine semantic reading order.

### HOME-003 — Innovation/process CTA

- Preserve the reference's dark/light contrast and image/text relationship.
- Clarify final content from the existing repository component and approved screenshot before editing copy.
- Any process steps must be data-driven with stable IDs.
- On-scroll entrance uses a single reveal per page visit.

### HOME-004 — Services grid

Section headings:

- Eyebrow: `Our Best Service`
- Current reference title is grammatically incorrect. Approved replacement: `Services Built for Your Business`, unless stakeholders provide different copy.

Six required services:

1. Website Development — modern, responsive, user-friendly websites tailored to business needs.
2. Digital Marketing — SEO, social media, and digital advertising strategies.
3. UI/UX & Graphic Design — user-focused interfaces and brand visuals.
4. Mobile App Development — Android and iOS applications.
5. Software Development — secure, scalable, customized business software.
6. Cloud & Hosting Services — hosting, cloud solutions, domains, reliability, and performance.

Each card requires:

- Approved image.
- Approved SVG icon.
- Title.
- Short description.
- Real destination or non-link treatment.
- Hover image scale, icon/color transition, and arrow motion.
- Equal visual height per row where content permits.
- One-column mobile, two-column tablet, and reference-matched desktop grid.

### HOME-005 — Why CoreCraft

Required benefit list:

- Innovative Technology Solutions.
- Experienced & Dedicated Team.
- Client-Focused Approach.
- Scalable & Secure Systems.
- Reliable Project Delivery.
- Long-Term Technology Partnership.

Requirements:

- Present the benefits with consistent icons and concise text.
- `About More` links to `/about`.
- The accompanying image must use approved asset and meaningful alt text, or empty alt if decorative.
- The mobile order must place explanatory content before or immediately after the related image.

### HOME-006 — Statistics and FAQ

Statistics require confirmed numbers for:

- Client Commitment.
- Projects Completed.
- Customer Support or Customers Supported.

Until numbers are approved, use typed placeholders in development data and do not render misleading public values.

Counter behavior:

- Start when at least part of the statistic group first enters the viewport.
- Animate once from zero to the final value.
- Preserve prefix/suffix separately from the number.
- Show final values immediately under reduced motion.
- No counter may render only `%` or `k+`.

FAQ questions:

1. What makes CoreCraft Technologies different?
2. What Services Do We Offer?
3. How Do We Work With Clients?
4. Why Partner With CoreCraft?
5. Our Commitment.

FAQ behavior:

- One panel open by default, matching the approved reference.
- Decide and document whether multiple panels may remain open.
- Animate height and opacity without cutting off wrapped text.
- Heading button owns `aria-expanded` and `aria-controls`.
- Icon visibly changes or rotates.
- Content answers come only from approved copy.

### HOME-007 — Consultation CTA

- Dark/blue emphasis band.
- Heading: `Ready to Transform Your Business with Technology?`
- Supporting copy describing websites, software, mobile apps, and digital transformation.
- Primary CTA: `Get a Free Consultation` → `/contact`.
- Secondary CTA: `Call Now` → one normalized approved telephone URI.
- Telephone display format and `tel:` value must be stored centrally.

### HOME-008 — Commitment/solution section

- Eyebrow: `OUR COMMITMENT`.
- Heading: `Delivering Technology Solutions That Drive Business Growth`.
- Paragraph describing innovative, reliable, and scalable digital solutions.
- Image with decorative shape layers.
- Subheading: `Why Businesses Choose Us`.
- Required list:
  - Customized solutions tailored to business needs.
  - Experienced team focused on quality and innovation.
  - Reliable, scalable, future-ready technology.
  - Dedicated support and long-term partnership.
- Decorative icons must be SVG or CSS, not unidentified icon-font characters.

### HOME-009 — Technology/feature strip

- The reference includes a compact icon/feature strip below the commitment section.
- Exact item labels and icons are `TBD`; capture and approve before implementation.
- If no meaningful content is approved, omit this section rather than rendering empty separators.

### HOME-010 — Contact request section

- Prominent split layout with approved background/media treatment.
- Contact links:
  - Telephone: approved value; current visible candidate is `+977 9861941981`.
  - Email: `info@corecraftnepal.com`, pending confirmation.
- Fields: Name, Email address, Message.
- Submit label: `Send Request`.
- Persistent visible labels are required even if placeholders are also present.
- Complete behavior is defined in Section 12.

### HOME-011 — Latest blog

- Eyebrow: `Our Largest Blog` should be reviewed; suggested replacement is `Our Blog`.
- Heading: `Latest News From The Blog`.
- Desktop carousel of approved recent posts.
- Each card has featured image, date, optional comment count, title, and Read More link.
- Do not show suspicious posts found on the reference site.
- If there are fewer posts than the carousel capacity, render a static grid without duplicated clones.

### HOME-012 — Newsletter strip

- Heading: `Our Newsletter`.
- Replace the placeholder sentence `We are dolor sit amet csectetur` with approved copy.
- Email field plus Subscribe button.
- Do not ship until a provider or backend endpoint exists.
- Complete behavior is defined in Section 12.

---

## 9. Internal page requirements

### PAGE-001 — Inner header and page banner

Used on About, Services, Contact, Blog, search, archive, and legal pages.

- More compact main header than the homepage reference.
- Large visual banner approximately 670 px tall on audited desktop, adjusted responsively.
- Dark overlay and approved background image.
- Exactly one visible `h1` containing the page name.
- Breadcrumb: Home / Current Page.
- Current breadcrumb is text, not a redundant link.
- Decorative motion is subtle and disabled under reduced motion.

### PAGE-002 — About page

Required order:

1. Inner header and About banner.
2. Company introduction (`about-three` reference section).
3. Statistics (`funfact-two`).
4. Reversed How We Work CTA.
5. Services summary.
6. FAQ.
7. Newsletter.
8. Footer.

Content requirements:

- Mission, experience, and value statements are `TBD` unless already approved in repository copy.
- Do not invent founding date, employee count, client count, awards, partners, certifications, or geographic reach.
- All statistics use the same counter component as the homepage.

### PAGE-003 — Services page

Required order:

1. Inner header and Services banner.
2. Six-service grid from HOME-004.
3. Newsletter.
4. Footer.

Requirements:

- Reuse service data; do not duplicate copy in the page component.
- Each service destination must either be a real detail route or a non-link card.
- Service-detail pages are out of scope until content is approved.

### PAGE-004 — Contact page

Required order:

1. Inner header and Contact banner.
2. Contact information and form section.
3. Optional map only if an exact office destination is approved.
4. Newsletter.
5. Footer.

Requirements:

- Display approved phone, email, address, and opening hours from one site-settings object.
- Do not embed a map pointing only to an approximate address without approval.
- Form behavior follows Section 12.

### PAGE-005 — Blog listing

Canonical new route: `/blog`. Preserve `/blog-grid-right/` through redirect if the legacy URL must remain valid.

Required content:

- Inner header and Blog banner.
- Post listing/grid.
- Sidebar on desktop.
- Search.
- Recent posts.
- Categories.
- Tags if meaningful.
- Pagination.
- Newsletter and footer.

Sidebar behavior:

- Moves below posts on mobile.
- Recent Comments and Archives are optional; exclude them unless real approved data exists.
- Search returns a useful result route rather than reloading with no feedback.

### PAGE-006 — Blog article

- One `h1` title.
- Publication date, author if approved, category, and featured image.
- Semantic article body.
- Optional table of contents for long posts.
- Previous/next or related-post navigation.
- Social sharing only through deliberate user clicks.
- Comments disabled unless moderation, privacy, and spam handling are approved.
- Article and breadcrumb structured data.

### PAGE-007 — Search and archives

- Search route supports a query parameter and displays the query safely.
- Empty results provide a helpful message and routes back to Services/Home.
- Category routes show only approved posts.
- Pagination state is reflected in the URL.

### PAGE-008 — 404

- Branded page with clear message and Home/Contact actions.
- Returns an actual 404 response.
- No automatic redirect.

---

## 10. Motion specification

### MOT-001 — Motion tokens

Define centralized durations and easing:

- Instant feedback: 100–150 ms.
- Hover/focus transitions: 180–250 ms.
- Small reveal: 400–600 ms.
- Large media reveal: 600–900 ms.
- Carousel slide: 700–1,000 ms, verified visually.
- Stagger gap: 60–140 ms.
- Standard easing: one approved ease-out curve.
- Emphasis easing: one approved custom cubic-bezier curve.

Do not choose new timing independently in each component.

### MOT-002 — Scroll reveal

- Supported variants: fade-up, fade-left, fade-right, and scale-in.
- Trigger through Intersection Observer or the motion library viewport API.
- Default to once per page visit.
- Content must exist in the normal document flow before animation.
- Initial server-rendered HTML must remain meaningful.
- Avoid hiding an entire page when JavaScript fails.

### MOT-003 — Staggered groups

- Apply to service cards, benefit items, blog cards, and icon strips.
- Stagger visual entrance only; preserve DOM reading order.
- On mobile, reduce distance and delay.

### MOT-004 — Hover motion

- Service/blog image scales subtly within an overflow-hidden frame.
- Button arrow translates a few pixels.
- Color and shadow transitions stay under 250 ms.
- Hover cannot be the only way information is revealed.
- Touch devices do not depend on hover state.

### MOT-005 — Parallax and tilt

- Use only on the approved image/decorative elements corresponding to the reference.
- Keep movement small enough to avoid motion sickness.
- Disable on coarse pointers, reduced motion, and devices where performance suffers.
- Do not attach scroll listeners that force layout every frame.

### MOT-006 — Custom cursor

- Desktop fine-pointer only.
- Decorative and never required for interaction.
- Must not replace or hide the native cursor over controls unless fully tested.
- Disabled for reduced motion, touch, and stylus/coarse pointers.

---

## 11. Responsive requirements

### 11.1 Required test viewports

Test at least:

- 1440 × 900.
- 1366 × 768.
- 1024 × 768.
- 834 × 1194.
- 768 × 1024.
- 430 × 932.
- 390 × 844.
- 375 × 812.
- 360 × 800.
- 320 × 568.

### 11.2 Global responsive acceptance

- `document.documentElement.scrollWidth` must not exceed the layout viewport width.
- No text, focus ring, carousel control, or CTA may be clipped.
- Minimum touch target is 44 × 44 CSS pixels.
- Body copy remains at least 16 CSS pixels on mobile unless it is clearly secondary metadata.
- The site works at 200% browser zoom.
- Section spacing becomes smaller but maintains clear grouping.
- Multi-column content stacks in semantic order.
- Images use deliberate crops and never stretch.
- Decorative absolute-positioned shapes cannot create overflow.

### 11.3 Mobile reference warning

The audited reference measured a 390 px viewport while document content reported a narrower width and the screenshot showed unused/overflow-like space. The clone must not reproduce this defect. Add an automated overflow diagnostic during development.

---

## 12. Forms and integrations

### FORM-001 — Contact form fields

- Name: required, trimmed, 2–100 characters.
- Email: required, normalized, valid email, maximum 254 characters.
- Message: required, trimmed, 10–5,000 characters.
- Honeypot field or equivalent passive spam check.
- Optional Turnstile only after privacy and deployment setup.

### FORM-002 — Contact submission states

- Idle.
- Invalid with field-level messages.
- Submitting with disabled duplicate submission.
- Success with clear confirmation.
- Server error with retry guidance.
- Rate-limited with non-technical guidance.

### FORM-003 — Submission backend

- Recipient email is `TBD` and cannot be inferred from visible page copy.
- Validate again on the server.
- Sanitize/escape content in generated email templates.
- Apply rate limiting.
- Never log full message bodies or unnecessary personal data in production logs.
- Set a request ID for troubleshooting.
- Return structured JSON errors.
- Do not disclose mail-provider credentials or internal stack traces.

### FORM-004 — Newsletter

- Email is required and validated.
- Provider and mailing list are `TBD`.
- Explain consent and link to the privacy policy.
- Display success, already-subscribed, invalid, rate-limited, and provider-error states.
- Do not simulate successful subscription when no provider exists.

### FORM-005 — Privacy

- Define retention policy for contact messages.
- Publish a privacy notice before collecting production submissions.
- Load analytics or map embeds according to the approved consent model.

---

## 13. Content source of truth

Create typed central data for:

- Site name.
- Logo variants.
- Email.
- Display phone and normalized phone URI.
- Address.
- Opening hours.
- Approved social profiles.
- Navigation.
- Hero slides.
- Services.
- Benefits.
- Statistics.
- FAQ entries.
- Blog posts/categories/tags.
- Footer links.

Rules:

- No component may contain a different copy of the phone number or email.
- Do not render raw CMS HTML without sanitization.
- Every image record includes source, width, height, alt text, and usage rights/status.
- Every external link indicates whether it opens a new tab; new-tab links include safe `rel` attributes.
- Copy edits require content-owner approval when they change meaning rather than correcting obvious spelling.

### 13.1 Required content decisions

The following are unresolved and must have issues:

- Exact validated statistic numbers.
- Pricing navigation behavior and whether a Pricing page exists.
- Service-detail destinations.
- Newsletter provider and consent copy.
- Contact form recipient.
- Exact office-map coordinates.
- Approved social URLs.
- Opening hours.
- About-page business history and claims.
- Blog posts to migrate.
- Homepage feature-strip labels.
- Copyright/legal entity name.

---

## 14. Accessibility requirements

Target WCAG 2.2 AA.

- One `h1` per primary page and sequential heading structure.
- `header`, `nav`, `main`, `section`, `article`, `aside`, and `footer` landmarks used appropriately.
- Skip link is first keyboard-focusable element.
- All functionality works without a mouse.
- Visible focus style meets contrast requirements.
- Text contrast at least 4.5:1; large text at least 3:1.
- Non-text controls and focus indicators at least 3:1 against adjacent colors.
- Informative images have accurate alt text; decorative images use empty alt.
- Icon-only buttons have accessible names.
- Form errors are associated with fields and announced.
- Carousel has pause controls and meaningful labels.
- Accordion state is exposed programmatically.
- Mobile menu manages focus.
- No rapid flashing.
- Page remains functional with reduced motion.
- Page remains usable at 200% zoom and with enlarged text.

Automated accessibility tests do not replace manual keyboard and screen-reader checks.

---

## 15. SEO requirements

- Unique title and description for every indexable page.
- Canonical URL.
- Open Graph and social-card metadata.
- Organization schema using only verified business information.
- Breadcrumb schema on internal pages.
- Article schema on blog articles.
- XML sitemap containing only canonical, approved routes.
- `robots.txt` with correct production and non-production behavior.
- Preview/staging environments use `noindex`.
- Semantic heading structure.
- Descriptive internal links.
- Redirect map for approved legacy URLs, including `/blog-grid-right/` if replaced.
- No indexable search-result spam or unmoderated tag archives.

---

## 16. Performance requirements

Production targets on representative mobile tests:

- Largest Contentful Paint: under 2.5 seconds.
- Cumulative Layout Shift: under 0.1.
- Interaction to Next Paint: under 200 ms.
- Lighthouse Performance: 90 or higher.
- Lighthouse Accessibility: 95 or higher.
- Lighthouse Best Practices: 95 or higher.
- Lighthouse SEO: 95 or higher.

Implementation rules:

- Optimize hero images and preload only the initial required hero asset.
- Use responsive `sizes` and modern image formats.
- Supply width and height for images.
- Lazy-load below-the-fold imagery.
- Load at most two font families and necessary weights.
- Use SVG components instead of multiple icon fonts.
- Avoid duplicated infinite-carousel DOM when unnecessary.
- No large animation library for a single fade effect.
- No long-running scroll handlers on the main thread.
- Respect Next.js server/client component boundaries.

---

## 17. Security requirements

- Treat the current WordPress blog as untrusted input.
- Do not import executable files, plugins, themes, users, or raw database dumps into the new application.
- Scan and review every migrated media asset.
- Validate and sanitize all form submissions.
- Rate-limit public endpoints.
- Apply secure headers and a deliberate Content Security Policy.
- Allow CORS only where necessary.
- Keep secrets in deployment environment variables.
- Ensure preview deployments do not expose production secrets.
- Do not render unsanitized HTML.
- Keep dependencies patched and run dependency/security checks before release.
- Do not expose stack traces, database details, or mail-provider responses publicly.

The website owner should separately audit the old WordPress users, plugins, themes, scheduled tasks, posts, uploads, server logs, and credentials.

---

## 18. Testing requirements

### 18.1 Required automated tests

- Unit tests for content utilities, phone/email normalization, validation, and motion preferences.
- Component tests for header, mobile nav, accordion, carousel controls, counters, and forms.
- End-to-end tests for main navigation, mobile menu, contact form states, blog navigation, search, and 404.
- Automated checks for broken internal links.
- Automated page-level accessibility checks.
- Visual regression screenshots at key desktop and mobile viewports.

### 18.2 Required manual tests

- Chrome, Safari, Firefox, and Edge current versions.
- iOS Safari and Android Chrome.
- Keyboard-only navigation.
- VoiceOver or NVDA smoke test.
- Reduced-motion mode.
- Slow network and disabled-cache loading.
- 200% zoom.
- Long content and validation errors.
- Carousel swipe and pause.
- Sticky-header transitions in both scroll directions.

### 18.3 Required commands before merge

From `frontend-ecommerce`:

```bash
npm run check
npm run typecheck
npm run build
```

Add and document test commands when the test framework is introduced.

---

## 19. Visual acceptance workflow

1. Capture the approved reference at every required viewport.
2. Capture the same viewport from the local implementation.
3. Compare section by section, not only as a full-page thumbnail.
4. Record differences in layout, font metrics, spacing, image crop, color, border, shadow, and motion.
5. Correct systematic token differences before component-specific exceptions.
6. Verify the correction at adjacent breakpoints.
7. Store final comparison evidence with the PR or QA report.

Suggested tolerances:

- Major container alignment: within 8 px.
- Repeated card alignment/spacing: within 6 px.
- Typography should match line breaks at the audited width unless corrected copy changes them.
- Section height may differ naturally with corrected content; unexplained large differences require review.
- Motion timing should feel equivalent and use recorded values, not memory.

---

## 20. Delivery phases and gates

### Phase 0 — Decisions and asset clearance

- Resolve Section 13.1 decisions.
- Approve assets and capture references.
- Gate: no production content implementation with invented values.

### Phase 1 — Foundation

- Tokens, fonts, global CSS, layout primitives, content models, route plan.
- Gate: typecheck/build pass; tokens reviewed.

### Phase 2 — Shared shell

- Top bar, header, sticky header, mobile nav, search decision, footer, newsletter shell.
- Gate: keyboard and responsive shell tests pass.

### Phase 3 — Homepage static fidelity

- All HOME sections in correct order without advanced motion.
- Gate: desktop and mobile layout review passes.

### Phase 4 — Motion

- Hero carousel, reveals, counters, FAQ transitions, hover motion, optional parallax/cursor.
- Gate: reduced-motion and performance checks pass.

### Phase 5 — Internal pages

- About, Services, Contact, Blog, article, search/archive, 404.
- Gate: route, metadata, and semantic-heading checks pass.

### Phase 6 — Integrations

- Contact delivery, newsletter, CMS/data source, analytics/consent.
- Gate: success/error/security tests pass in staging.

### Phase 7 — Release QA

- Cross-browser, responsive, accessibility, performance, security, link crawl, redirects.
- Gate: all definition-of-done items pass with no unresolved critical/high defects.

---

## 21. Definition of done

The project is complete only when all of the following are true:

- Approved pages and routes exist.
- Section order and visual hierarchy match the reference.
- Shared content is centralized and typed.
- All navigation, CTA, phone, email, social, service, and blog links have valid destinations.
- No links point to the Tolak demo or use placeholder `#` destinations.
- Hero carousel, sticky navigation, mobile menu, counters, accordion, reveals, cards, and blog carousel behave as specified.
- Reduced-motion mode is complete.
- No horizontal overflow exists at required viewports.
- Forms are accessible, secure, rate-limited, and connected to approved recipients/providers.
- Suspicious legacy posts are excluded.
- Each page has correct metadata and semantic headings.
- Accessibility and performance targets pass.
- Build, typecheck, lint/check, automated tests, and link checks pass.
- Required browser/device manual tests are recorded.
- Production environment, monitoring, backups, and rollback steps are documented.
- Stakeholder approves final desktop and mobile visual comparisons.

---

## 22. Requirement tracking template

Use this structure for project issues:

```markdown
## Requirement IDs
HOME-001, MOT-001, MOT-006

## Owner
@name

## Dependencies
- Approved hero images
- Shared Button component

## Acceptance evidence
- [ ] 1440 × 900 screenshot
- [ ] 390 × 844 screenshot
- [ ] Autoplay/pause recording
- [ ] Keyboard test
- [ ] Reduced-motion test
- [ ] `npm run check`
- [ ] `npm run typecheck`
- [ ] `npm run build`

## Deviations / decisions
Link to the approved decision. Do not leave undocumented differences.
```

---

## 23. Final anti-hallucination checklist

Before adding content or functionality, the implementer must answer:

1. Is this visible on the audited reference, already present in approved repository content, or explicitly requested?
2. Is the exact wording/value verified?
3. Is the destination real and tested?
4. Is the asset approved and locally available?
5. Is the behavior specified here or recorded in a reference capture?
6. Does the change reproduce a known defect? If yes, stop and request a decision.
7. Is another contributor editing the same component?
8. Is the change inside public marketing-site scope rather than inferred from unrelated ecommerce code?

If any answer is unknown, use `TBD`, open a decision issue, and continue only with work that does not depend on the missing fact.
