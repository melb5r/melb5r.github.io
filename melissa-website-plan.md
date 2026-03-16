# Personal Website — Melissa Buckley
## Cursor Composer Agent Plan

---

## Project Overview

Build a minimal personal website for Melissa Buckley — a manufacturing and process engineer returning from a career break, targeting hardware engineering and AI program management roles in San Francisco. The site should feel warm, personal, and quietly confident. It uses a serif/sans-serif pairing and earthy palette (Theme A — Warm Earth). It is a plain HTML + CSS + JS site with no build step, no frameworks, and no dependencies.

---

## File Structure to Create

```
melissa-buckley/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── pages/
│   ├── work.html
│   ├── not-work.html
│   ├── writing.html
│   └── about.html
└── assets/
    └── (empty for now — photos go here later)
```

---

## Design Tokens (from Theme A — Warm Earth)

Implement these as CSS custom properties in `:root` inside `css/style.css`:

```css
--color-bg:          #F5F0E8;
--color-surface:     #EDE8DE;
--color-text:        #2A2118;
--color-text-muted:  #7A6E5F;
--color-accent:      #8B4A2A;
--color-accent-soft: #D4956A;
--color-border:      #C8BFB0;
--color-border-soft: #DDD8CE;

--font-display: 'Lora', Georgia, serif;
--font-body:    'DM Sans', system-ui, sans-serif;

--max-width: 720px;
```

Import both Google Fonts in the `<head>` of every HTML file:
```html
<link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;1,400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">
```

---

## Page-by-Page Specifications

---

### 1. `index.html` — Home / Landing

**Purpose:** First impression. Warm, human, not a resume.

**Sections (top to bottom):**

#### Navigation (sticky)
- Left: "Melissa Buckley" in Lora, 18px
- Right: four links — Work · Not Work · Writing · About
- Links in DM Sans, 11px, uppercase, letter-spacing 0.08em, color `--color-text-muted`
- Sticky, background `--color-bg`, bottom border `1px solid --color-border-soft`

#### Hero
- Large heading in Lora (font-size: 44px, weight 500, letter-spacing -0.02em):
  ```
  Engineer,
  explorer,
  curious person.
  ```
  Each word/phrase on its own line using `<br>`.
- Below heading: one short paragraph in DM Sans, 18px, color `--color-text-muted`, max-width 520px:
  ```
  Seven years in manufacturing engineering at Apple. Now on a
  career break — travelling, thinking, and figuring out what
  comes next at the intersection of hardware, AI, and making
  things work.
  ```
- Padding: 80px top, 60px bottom

#### Section: Work (preview strip)
- Section label (h4): "Work" — DM Sans, 11px, uppercase, letter-spacing 0.12em, `--color-text-muted`
- Show only the most recent work item (Apple) as a single `.work-item` row
- Below it, a small link: "Full history →" linking to `pages/work.html`

#### Section: Not Work (preview strip)
- Section label (h4): "Not Work"
- Show two `.card` elements side by side in a 2-column grid:
  - Card 1: label "Interest → Project" / title "Cycling" / body "Marin headlands, power meters, and the Marin headlands again."
  - Card 2: label "Interest → Project" / title "Mushrooms" / body "Foraging and cultivation in the Bay Area. Learning what not to eat."
- Below cards, a small link: "See more →" linking to `pages/not-work.html`

#### Footer
- Left: "© 2025 Melissa Buckley"
- Right: links to LinkedIn (placeholder `#`) and Email (placeholder `#`)
- Both in DM Sans, 13px, `--color-text-muted`

---

### 2. `pages/work.html` — Work History

**Purpose:** Resume equivalent. Project management and manufacturing pedigree at Apple. Honest about the nature of the work (manufacturing, not product design) — framed around impact and cross-functional leadership.

**Sections:**

#### Navigation
Same as index.html on every page. Extract into a reusable HTML snippet or just copy consistently.

#### Page Header
- h1 in Lora: "Work"
- Subheading in DM Sans, 18px, `--color-text-muted`:
  ```
  Seven years at Apple in manufacturing and process engineering —
  shipping products at scale, across teams, under pressure.
  ```

#### Work Items (`.work-item` rows, two-column grid: 140px meta | 1fr content)

**Item 1 — Apple**
- Meta: "2017 – 2024"
- Role: "Manufacturing & Process Engineer"
- Company: "Apple · Various sites"
- Description (2–3 sentences):
  ```
  Process and quality engineering across multiple hardware product
  lines from prototype through mass production. Led cross-functional
  teams coordinating supplier quality, yield improvement, and
  production readiness. Strong focus on root cause analysis,
  corrective action, and engineering change management.
  ```
- Tags (`.tag` pills): Process Engineering · Quality Systems · Cross-functional Leadership · Supplier Management · Project Management

**Item 2 — University of Waterloo**
- Meta: "2013 – 2017"
- Role: "BASc Chemical Engineering"
- Company: "University of Waterloo · Ontario, Canada"
- Description:
  ```
  Co-op program with four internships in manufacturing and process
  industries. Graduated with a Bachelor of Applied Science.
  ```

#### Skills / Capabilities Block
- Section label (h4): "Capabilities"
- Simple tag cloud of `.tag` pills — no card, just flowing tags:
  Process Engineering, Quality Engineering, Root Cause Analysis,
  FMEA, DOE, Statistical Process Control, Cross-functional Team Leadership,
  Project Management, Supplier Quality, Engineering Change Management,
  Manufacturing Scale-up

#### Download Resume Link
- Simple text link: "Download resume (PDF) →" — link to `assets/resume.pdf` (placeholder, file to be added later)
- DM Sans, 14px, `--color-accent`

---

### 3. `pages/not-work.html` — Not Work

**Purpose:** Personality, curiosity, interests becoming projects. This section takes pressure off the resume and shows how Melissa thinks. Written in first person, conversational tone.

**Sections:**

#### Page Header
- h1 in Lora: "Not Work"
- Subheading in DM Sans, 18px, `--color-text-muted`:
  ```
  Things I do because I want to, and the projects they might become.
  ```

#### Cards Grid (2-column, `.card` components, background `--color-surface`)

**Card 1: Cycling**
- Label: "Active"
- Title: "Cycling"
- Body:
  ```
  Road and gravel riding around San Francisco and Marin. I've been
  getting into training with power meters — there's more engineering
  in endurance sport than most people realise.
  ```

**Card 2: Mushrooms**
- Label: "Active"
- Title: "Mushrooms"
- Body:
  ```
  Foraging and cultivation in the Bay Area. Part pattern recognition,
  part ecology, part patience. I'm still learning what not to eat.
  ```

**Card 3: Sauna**
- Label: "In Progress"
- Title: "Home Sauna Build"
- Body:
  ```
  Adding a sauna to my home in SF. Turned into a full electrical
  subpanel project. More fun than it sounds.
  ```

**Card 4: Writing**
- Label: "Starting"
- Title: "Writing"
- Body:
  ```
  Trying to write more — about engineering, career breaks, and
  whatever else seems worth putting down. See the writing section.
  ```
- Link the card title to `writing.html`

---

### 4. `pages/writing.html` — Writing

**Purpose:** Home for LinkedIn-style posts, notes, and longer essays as Melissa starts publishing. Starts mostly empty — that's fine and intentional.

**Sections:**

#### Page Header
- h1 in Lora: "Writing"
- Subheading:
  ```
  Notes and essays. Infrequent, intentional.
  ```

#### Post List
Use a `.post-list` layout — simple vertical stack, no cards. Each item:
- Date in DM Sans, 13px, `--color-text-muted` (use placeholder dates)
- Title as an `<h3>` in Lora, linking to a placeholder `#`
- One-line description in DM Sans, 14px, `--color-text-muted`

**Placeholder posts (clearly marked as placeholders with an HTML comment):**
```
<!-- PLACEHOLDER — replace with real posts -->
March 2025 — "What seven years in manufacturing actually teaches you"
February 2025 — "On taking a career break in your early thirties"
```

#### Empty State Note (visible until real posts exist)
Below the placeholder posts, a small note in DM Sans, 14px italic, `--color-text-muted`:
```
More coming. Cross-posting from LinkedIn as I go.
```

---

### 5. `pages/about.html` — About

**Purpose:** Human introduction. Not a resume, not a pitch. Who Melissa is, where she's been, where she's headed. Warm and direct.

**Sections:**

#### Page Header
- h1 in Lora: "About"

#### Bio Block (prose, no cards)
Three short paragraphs in DM Sans, 16px, line-height 1.75, max-width 600px:

```
Paragraph 1 (who + background):
I'm a manufacturing and process engineer based in San Francisco.
I spent seven years at Apple working on hardware products — the
kind of work that happens after the design is done and before
anything reaches a customer. Process development, quality systems,
cross-functional coordination, getting things shipped.

Paragraph 2 (the break):
I'm currently on a career break. I've been travelling, applying
for my green card, and taking time to think about what kind of
work I actually want to do next. I'm interested in hardware
engineering roles and increasingly in AI — particularly on the
program and operations side.

Paragraph 3 (the person):
Outside of work I ride bikes, forage for mushrooms, and am in
the middle of adding a sauna to my house. I'm from Canada
originally — University of Waterloo, chemical engineering. I've
been in San Francisco long enough that I complain about the fog
with genuine feeling.
```

#### Connect Block
- Section label (h4): "Get in touch"
- Two links, each on its own line, in DM Sans 16px, `--color-accent`:
  - "LinkedIn →" (placeholder `#`)
  - "Email →" (placeholder `#`)

---

## CSS Architecture (`css/style.css`)

Write all styles in a single flat file. Structure with comment blocks:

```
/* ── Reset ── */
/* ── Tokens ── */
/* ── Base (body, headings, links, p) ── */
/* ── Layout (.container, section) ── */
/* ── Navigation ── */
/* ── Hero ── */
/* ── Work items (.work-item) ── */
/* ── Cards (.card, .grid) ── */
/* ── Tags (.tag) ── */
/* ── Post list (.post-list) ── */
/* ── Footer ── */
/* ── Utilities ── */
```

Key rules to implement (copy from theme-A.css or implement from scratch):

- `.container`: max-width 720px, margin 0 auto, padding 0 40px
- `section`: padding 60px 0, border-top 1px solid `--color-border-soft`
- `.work-item`: CSS grid, 140px | 1fr, gap 32px, padding 24px 0, border-bottom
- `.grid`: CSS grid, repeat(auto-fit, minmax(280px, 1fr)), gap 16px
- `.card`: background `--color-surface`, border 1px solid `--color-border-soft`, border-radius 4px, padding 24px
- `.tag`: inline-block, font-size 11px, border 1px solid `--color-border`, border-radius 2px, padding 2px 8px
- Nav: sticky, top 0, z-index 10, background `--color-bg`
- All headings: font-family `--font-display`, Lora
- h4 labels: font-family `--font-body`, DM Sans, 11px, uppercase, letter-spacing 0.12em

---

## JavaScript (`js/main.js`)

Keep this minimal. Only two things:

1. **Active nav link highlighting:** On page load, read `window.location.pathname` and add an `active` class to the matching nav link. Style `.nav-links a.active` with `color: --color-text` instead of muted.

2. **Smooth scroll:** For any in-page anchor links, add smooth scroll behavior (or just set `scroll-behavior: smooth` on `html` in CSS — prefer the CSS approach).

That is all. No other JavaScript needed at this stage.

---

## Content Placeholders

Wherever real content is missing, use clearly marked HTML comments so Melissa can find and fill them in:

```html
<!-- TODO: Add real LinkedIn URL -->
<!-- TODO: Add real email address -->
<!-- TODO: Add headshot photo to assets/ and update src -->
<!-- TODO: Replace placeholder resume PDF -->
<!-- TODO: Add real writing posts -->
```

Do not invent URLs, emails, or photo paths. Leave them as `#` or empty with a comment.

---

## Constraints and Rules

- No CSS frameworks (no Tailwind, no Bootstrap)
- No JavaScript frameworks (no React, no Vue)
- No npm, no package.json, no build step
- No external dependencies except Google Fonts (CDN link in `<head>`)
- All pages must work by opening the HTML file directly in a browser (file:// protocol)
- Use relative paths for all internal links (e.g. `../pages/work.html` from index, `work.html` from within pages/)
- Do not add any features not listed in this plan without asking first
- Do not add animations, scroll effects, or hover transitions beyond simple color changes
- Keep the total CSS under 300 lines
- Every page must have a consistent `<title>`: "Melissa Buckley — [Page Name]"
- Every page must have a `<meta name="description">` tag

---

## Definition of Done

The plan is complete when:
- [ ] All 5 HTML files exist and open without errors in a browser
- [ ] Navigation works between all pages with correct active state highlighting
- [ ] All placeholder content is marked with TODO comments
- [ ] The site looks correct on a 1280px wide desktop browser window
- [ ] No console errors on any page
- [ ] CSS is in one file (`css/style.css`) and JS is in one file (`js/main.js`)
- [ ] Google Fonts load correctly (requires internet connection)

---

## Next Iteration Plan (based on live reactions)

### Navigation & Home

- Make the `Melissa Buckley` name in the top-left a clickable link back to the home page on every page.
- Shift emphasis so the experience feels **About-first** rather than **Work-first**:
  - Keep `index.html` as the landing page, but lean the hero and copy toward the About content.
  - Consider nav order: About · Work · Not Work · Writing.

### Work Content

- Replace the single Apple block with **separate roles** that mirror LinkedIn once those entries are pasted into this file.
- Correct the University of Waterloo years to the true dates.
- Keep the **Capabilities** tag cloud.
- Move the “Download resume (PDF)” link to the **top of the Work page** near the header, leaving it as a TODO until a real resume exists.

### Visual Design & Imagery

- Reduce the “bland” feel while keeping the warm, quiet tone:
  - Slightly deepen `--color-bg` or increase contrast for section borders/headings.
  - Add one or two accent background bands using `--color-accent-soft` behind key sections (e.g. hero or capabilities).
- Add layout hooks for imagery:
  - Reserve space on the About page for a **headshot** image in `assets/`.
  - On Work, optionally support **product photos** from Apple’s existing public marketing images of products you worked on. Only use images clearly available on apple.com or official marketing pages; avoid anything internal or implying ownership beyond your stated role.

### Links & Contact

- Replace all LinkedIn `#` placeholders with the real profile:
  - `https://www.linkedin.com/in/melissa-buckley-05/`
- Keep email as a placeholder until a preferred address is chosen.

### Implementation Order (when ready to run)

1. Update nav brand link behavior across all pages.
2. Rework `index.html` hero/intro so the first impression feels like “About Melissa” rather than “Work preview”.
3. Restructure Work items into multiple Apple roles + corrected education dates.
4. Move the resume download link higher on the Work page (still placeholder).
5. Adjust color tokens and add one or two accent background sections.
6. Add image hooks on About and Work (headshot, optional product photos).
7. Replace LinkedIn placeholders with the real URL everywhere.
