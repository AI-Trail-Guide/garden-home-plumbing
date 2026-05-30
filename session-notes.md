# Garden Home Plumbing — Session Notes
*Last updated: 2026-05-12*

## Project
Static HTML website for **Garden Home Plumbing & Drain LLC**
- Owner: Derek Marsh (veteran-owned, solo plumber)
- Phone: (503) 753-0225
- Email: gardenhomeplumbing@gmail.com
- Address: 6725 SW Florence Ln, Portland, OR 97223
- Hours: Mon–Thu 8am–5pm, Fri 8am–4pm

## Live URLs
- **Vercel (live):** https://garden-home-plumbing-jik125bbw-waynes-projects-dc4915e2.vercel.app
- **GitHub repo:** https://github.com/AI-Trail-Guide/garden-home-plumbing

## How to get back to this project

### Opening a terminal
Press **Command + Space**, type `Terminal`, press Enter. This opens the macOS Terminal app.

### Navigating to the project folder
The terminal always opens in your home folder. Run this to get into the project:
```
cd ~/Projects/garden-home-plumbing
```
You should see the prompt change to show `garden-home-plumbing`. You're now in the right place.

### Starting a Claude Code session
With the terminal open and in the project folder, type:
```
claude
```
This opens Claude Code. You can paste the contents of this file into the chat to resume where you left off.

### Confirming everything looks right
```
git status        — shows any files you've changed since the last push
git log --oneline — shows recent commits
```

---

## Deployment workflow
Any change to the site:
```
git add .
git commit -m "describe what changed"
git push
```
Vercel auto-deploys within ~30 seconds of every push.

## Site structure
```
/Users/waynerowe/Projects/garden-home-plumbing/
├── index.html          — Homepage
├── services.html       — Services (11 alternating sections)
├── about.html          — About Derek
├── reviews.html        — Customer reviews
├── service-area.html   — Service area grid
├── contact.html        — Contact info + form
├── styles.css          — Master stylesheet
├── components.js       — Shared nav + footer injection
├── sitemap.xml
├── robots.txt
└── images/             — 14 compressed photos (all ≤500KB)
```

## Session history

### Session: 2026-05-29

#### Copy tightening pass (15 changes across 4 files)
- `index.html` — H1 rewritten ("Portland Plumber. Veteran-Owned. Serving Portland's West Side Since 2012."); tagline shortened; services intro shortened; two body sentences rewritten for directness; "follow-ups so nothing gets missed" → "callbacks"
- `services.html` — page header subhead shortened to "Honest work. Fair prices."; drain section opening rewritten; pricing block "No surprises, no hidden costs." removed
- `about.html` — customer praise sentence tightened; closing paragraph replaced with "We'd rather have 50 customers who trust us than 500 who don't know who's showing up."
- `reviews.html` — page header subhead shortened; bottom-cta `<h2>` removed entirely; CTA support text updated to "Call us. We'll get it scheduled."
- **Flagged (not found, no change made):** services.html change #7 (water heater paragraph already rewritten in previous session); service-area.html change #15 (page intro already updated in previous session); reviews.html change #13 exact string not found (heading had been updated to "See Why West Portland Trusts Us" — intent applied, `<h2>` removed)

#### contact.html edits
- Page header subhead updated: "The fastest way to reach us is to call. We're quick to answer and quick to schedule." → "Call us. We answer, and scheduling is quick."
- Redundant `<p>` below phone button removed ("Call us. It's the fastest way to get help.")

---

### Session: 2026-05-28

#### Removals
- Removed all "tankless" references from `index.html` and `services.html`
- Removed all BBB references sitewide: meta descriptions, og tags, schema `sameAs`, hero copy, trust badges, credentials grid, review stats bar, review link card, footer "Why Choose Us" list (`components.js`)

#### Yelp corrections
- Yelp rating updated 4.9 → 4.5 across all 6 HTML files
- Yelp review count updated 44 → 43 across all 6 HTML files (one stat display `44` in `reviews.html` was missed and corrected in a follow-up pass)

#### Image swap
- `about-team_NEW.jpg` renamed to `about-team.jpg` (AI-generated placeholder, replaces original two-person photo)
- Original saved as `about-team_OLD.jpg` (safe to delete)
- Image inventory created at `docs/image-inventory.md`

#### CSS centering fix
- Switched `.trust-badges-grid`, `.credentials-grid`, `.review-links` from fixed-column CSS Grid to flexbox with `justify-content: center` — items now center regardless of count
- Added `text-align: center` to `.review-stat`
- Updated responsive breakpoints to remove stale `grid-template-columns` overrides

#### 12-task copy pass
- `index.html` — rewrote two paragraphs in "Why Portland Homeowners Call Us Back": trades timeline anchored to 2012, Garden Home neighborhood name origin
- `about.html` — rewrote veteran-to-trades arc with plumbing license number (PB1260) and military-discipline framing; added Angi Super Service Award to meta and og descriptions
- `services.html` — rewrote water heater section with Portland winters / aging homes angle; rewrote repiping section with pre-1970s west side housing stock context
- `service-area.html` — removed "proudly serves" boilerplate; added Derek's primary communities and housing stock context paragraph
- `reviews.html` — added Angi Super Service Award to meta/og descriptions; CTA heading changed to "See Why West Portland Trusts Us"

---

### Session: 2026-05-12
- Reviewed full project status (no code changes this session)
- Confirmed the custom domain (`gardenhomeplumbing.com`) is registered through **HostGator** — cPanel login at `https://gator4080.hostgator.com`
- Provided step-by-step DNS connection instructions (see updated Custom Domain section below)
- **Status:** DNS steps handed off to user — awaiting completion

---

### Session: 2026-05-06 — What was done

### Bug fixes
- **Mobile horizontal overflow** — `.nav-phone` was never hidden at ≤640px, causing the nav to overflow on iPhone. Fixed by hiding `.nav-phone` at mobile and adding a gold "Call Now" button inside the hamburger dropdown (`nav-mobile-phone` class).
- **Service area grid borders** — `nth-child(4n)` border-right removal rule was wrong at 2 and 3 column breakpoints. Replaced with collapsed-border approach: `border-top` and `border-left` on the `.area-grid` container, `border-right` and `border-bottom` on each cell. No nth-child rules needed at any breakpoint.

### Content changes
- Removed all references to **Lani** across the site (she is no longer part of the business being referenced publicly). Replaced with "our office" / "our team" / "us" equivalents.
- Updated email from `gardenhomeplumbingndrain@yahoo.com` → `gardenhomeplumbing@gmail.com` across all 6 HTML files, components.js, and all schema markup.
- Swapped `about-derek-lani.jpg` for `about-derek.jpg` in the Our Story section.
- Merged "Our Story" and "About Derek" sections on about.html into one combined section with one photo.
- Updated homepage H1: "Family-Run" → "Serving Portland Since 2012"
- Trimmed customer testimonial in reviews.html — removed the sentence thanking Lani, quote now ends at "without incident since!"

### Files with Lani references still present (planning docs only — not live pages)
- `wireframe-plan.md` — original planning document, safe to ignore
- `research-brief.md` — original research document, safe to ignore

## Pending / next steps

### 1. Contact form (BLOCKED — waiting on two keys)
The form in `contact.html` currently shows a fake success message on submit. Plan is to wire it up with **Formspree + Google reCAPTCHA v2**.

Code is ready to write once you have:
- **Formspree form ID** — sign up at formspree.io, create a form pointed at `gardenhomeplumbing@gmail.com`, get an ID like `xabc1234`
- **Google reCAPTCHA v2 site key** — register at google.com/recaptcha, choose "I'm not a robot" checkbox, add `gardenhomeplumbing.com` as the domain (also add `localhost` for testing), get a Site Key

Once you have both keys, Claude can wire up the form in one session. Formspree free tier allows 50 submissions/month, which is plenty for a solo plumber.

### 2. Custom domain (IN PROGRESS)
Domain `gardenhomeplumbing.com` is registered through **HostGator**. cPanel login: `https://gator4080.hostgator.com`

Steps to complete connection:
1. Log in to Vercel → select the project → **Settings > Domains** → add `gardenhomeplumbing.com`
2. Vercel will display the DNS records needed — keep that tab open
3. Log in to HostGator cPanel → **Zone Editor** → **Manage** next to the domain
4. Add these two records:

| Type | Name | Value |
|------|------|-------|
| A | `@` | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns.com` |

5. If an A record for `@` already exists, edit it rather than adding a new one
6. DNS propagation takes 15 min – 2 hours; Vercel will show a green checkmark and auto-issue SSL when it detects the records

### 3. Planning files in GitHub
`wireframe-plan.md`, `research-brief.md`, and `style-guide.md` are committed to the public GitHub repo. Consider adding them to `.gitignore` before going fully public if you'd prefer they not be visible.

## Tech setup (already done)
- Git configured: username `AI-Trail_Guide`, email `wayne@aitrailguide.com`
- GitHub PAC token stored in macOS Keychain — no action needed on future pushes
- Vercel CLI 51.2.1 installed, logged in via GitHub
