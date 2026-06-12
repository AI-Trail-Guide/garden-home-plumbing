# Garden Home Plumbing — Session Notes
*Last updated: 2026-06-12*

## Project
Static HTML website for **Garden Home Plumbing & Drain LLC**
- Owner: Derek Marsh (veteran-owned, solo plumber)
- Phone: (503) 753-0225
- Email: gardenhomeplumbing@gmail.com
- Address: 6725 SW Florence Ln, Portland, OR 97223 — STALE (removed from site; Derek moved to Woodburn, exact address unconfirmed)
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

## Standing Procedures

### Master Plan update workflow
The file `docs/Derek_Account_Transition_Master_Plan.md` is a local-only copy (excluded from git) of the master plan kept in the Claude.ai project knowledge base.

**When Claude.ai gives you a section to update:**
1. Tell Claude Code what section changed and paste the new content
2. Claude Code updates `docs/Derek_Account_Transition_Master_Plan.md` — both the changed section AND the two `**Last updated:**` fields at the top and inside the Current State section
3. Claude Code creates a new dated folder at:
   `~/Desktop/AI Stuff/AI Trail Guide/Plumber - DEREK/Claude Project Files/CURRENT MASTER PLAN/updated [M-DD-YYYY]/`
   and copies the updated file into it
4. You upload that file to the Claude.ai project to replace the old version

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

### Session: 2026-06-12

#### Image swap — about-derek
- Replaced `about-derek.jpg` with new AI-generated PNG portrait (`about-derek_NEW.png` → `about-derek.png`) — plumber with tablet standing in front of branded van
- Updated `about.html` `<img>` src and og:image meta tag to reference `.png` extension

#### Physical address removed sitewide
- Removed `6725 SW Florence Ln / Portland, OR 97223` from every location on the site:
  - JSON-LD schema (`streetAddress` + `postalCode` fields) in all 6 HTML files
  - Visible "Address" row in the contact page info block
  - Site footer in `components.js` (this is what showed on every page)
- City/state (`Portland, OR`) and `addressCountry` retained in schema

#### Wilsonville added to service area
- Added Wilsonville to the community grid in `service-area.html` and to the `areaServed` schema list
- Grid was previously 16 items (even 4×4). Adding Wilsonville made 17 — resolved by giving "Surrounding Portland areas" a `grid-column: 1 / -1` full-width span at the bottom (added `.area-grid-item--full` CSS modifier)

#### Contact form — Formspree setup initiated (pending)
- Formspree account created (under Wayne's email); destination set to `gardenhomeplumbing@gmail.com`
- **Blocked:** waiting on Derek to click the one-time verification email Formspree sent to gardenhomeplumbing@gmail.com
- Once Derek clicks confirm, next step is to drop the Formspree form ID into the form `action` attribute in `contact.html` and remove the fake submit handler

---

### Session: 2026-05-30

- Full presence audit run 2026-05-30: 14 URLs checked. Files created/overwritten: investigation/presence-audit.md, investigation/listings.json, investigation/screenshots/ (14 screenshots). No site files were modified.

#### Listing investigation (read-only — no site files changed)
- Ran Playwright/Chromium headless browser check against Google Maps and Yelp listings
- Files created: `investigation/listing-check-findings.md`, `investigation/gbp_maps.png`, `investigation/yelp.png`, `investigation/check-listings.js` (all excluded from git via `.gitignore`)
- Google Maps: listing confirmed live, name and phone match canonical, no "Claim this business" link found (suggestive of claimed). No website URL linked to listing — needs to be added once custom domain is live.
- Yelp: hard bot-block, no data extractable. Last known state (2026-05-28): 4.5 stars, 43 reviews, Claimed.

#### Hero H1 update
- Replaced "Serving Portland's West Side Since 2012" with "20+ Years of Experience" in `index.html` hero H1 — removes contradiction with tagline, puts stronger credential in headline
- Dropped "20+ years of experience" from hero sub (was redundant after H1 change)

#### Image swaps
- Replaced five service images with new AI-generated photos: `service-disposal.jpg`, `service-drain.jpg`, `service-leak.jpg`, `service-repiping.jpg`, `service-water-main.jpg`
- Old versions saved as `_OLD` backups (not committed)
- Additional swaps later in session: `service-leak.jpg` (second replacement), `about-derek.jpg`, `service-remodel.jpg`

#### GBP update
- Google Business Profile claimed by Wayne. Google account confirmed. No website linked yet (pending domain connection). No Google reviews visible.

#### Derek call — May 30, 2026
- Derek viewed the new website live on the call and gave informal verbal approval
- Contact form decision resolved: wire to Gmail
- Derek chose Option 3 (neighbor with guide from Wayne) for account transition — formal Phase 1 at $375 will not occur; compensation arrangement undefined
- Derek confirmed Wilsonville should be added to website service area and GBP service area
- Derek has moved to Woodburn — exact address unconfirmed; Florence Ln address is stale pending confirmation
- New HP EliteDesk is fully set up — Derek and Lani configured QuickBooks, Gmail, and Yahoo on it themselves
- Wall-hung toilet image flagged for possible swap on services page
- Second HostGator password identified from Lani's list (marked "not used") — to be tested against billing portal

#### Project infrastructure
- `CLAUDE.md` created in project root — auto-loaded by Claude Code on every session, documents startup instructions and master plan update workflow
- `docs/Derek_Account_Transition_Master_Plan.md` added (local-only, excluded from git) — copy of the Claude.ai project master plan, updated via standing workflow
- Master plan update workflow documented in Standing Procedures section of this file

---

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

### 1. Contact form — IN PROGRESS (waiting on Derek)
Formspree account set up. Destination email: `gardenhomeplumbing@gmail.com`. Blocked on Derek clicking the verification email Formspree sent to that Gmail. Once confirmed, drop the Formspree form ID into the `action` attribute on the `<form>` in `contact.html` and remove the fake submit handler JS block.

### 2. About page photo
Wayne to composite a photo of Derek from selfie and truck wrap images. AI placeholder (`about-team.jpg`) is still live.

### 3. Wilsonville — DONE on website, GBP still pending
Added to `service-area.html` grid and schema (2026-06-12). Still needs to be added to the GBP service area listing.

### 4. Wall-hung toilet image
`service-toilet.jpg` flagged by Derek for possible replacement. Low priority until a better image is available.

### 5. Custom domain (IN PROGRESS — gated on HostGator billing portal access)
Domain `gardenhomeplumbing.com` is registered through **HostGator**. cPanel login: `https://gator4080.hostgator.com`
- cPanel password confirmed working
- Billing portal password still unresolved — a second credential from Lani's list (marked "not used") exists to test
- DNS steps are ready to execute once HostGator access is confirmed through Derek's account transition work

DNS records needed when ready:

| Type | Name | Value |
|------|------|-------|
| A | `@` | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns.com` |

After domain is pointed: add website URL to GBP listing.

### 6. Derek's address — removed from site, GBP still needs update
Florence Ln address removed from all website pages (2026-06-12) — schema, contact page, and footer. Derek moved to Woodburn; exact address unconfirmed. Still needs to update CCB registration and GBP listing once Woodburn address is confirmed.

### 7. Derek neighbor / account transition timeline
Derek chose Option 3 (neighbor with guide from Wayne) for the account transition. No timeline set for them to sit down. Follow up to establish a date.

### 8. Planning files in GitHub
`wireframe-plan.md`, `research-brief.md`, and `style-guide.md` are committed to the public GitHub repo. Add them to `.gitignore` before the repo is referenced publicly.

## Tech setup (already done)
- Git configured: username `AI-Trail_Guide`, email `wayne@aitrailguide.com`
- GitHub PAC token stored in macOS Keychain — no action needed on future pushes
- Vercel CLI 51.2.1 installed, logged in via GitHub
