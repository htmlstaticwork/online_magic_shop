# Prompt — Online Magic Shop (Tricks & Supplies)

> **Dashboard: No** — E-commerce storefront. No admin dashboard.

---

## IDENTITY & CONCEPT

Build a complete multipage e-commerce site for **"The Arcane Emporium"** — an online magic shop selling tricks, books, props, and instructional kits for magicians of all levels. The site must feel like **entering a secret shop through a hidden door** — mysterious, theatrical, and playful — not a generic Shopify-style storefront. Every section should make the visitor feel like they've discovered something hidden.

**Technology**: Bootstrap 5 + Bootstrap Icons + Vanilla JS only.  
**Branding**: Single SVG logo (top-hat-with-cards icon + "The Arcane Emporium" text). Reuse everywhere. Favicon from SVG.

---

## ANTI-REDUNDANCY RULES (MANDATORY)

- ❌ No generic e-commerce layout (hero banner + product grid + "Shop Now" repeat).
- ❌ No standard category cards that could sell shoes or electronics.
- ❌ No duplicated section patterns across pages.
- ✔ Every section must be **magic-specific** — skill levels, trick categories, performance types.
- ✔ Products must be described in magician language: "effect," "method," "audience size," "difficulty."
- ✔ If a section could belong to a general retail store, **redesign it with magic-world flavor**.

---

## FOLDER STRUCTURE (STRICT — DO NOT CHANGE)

```
arcane-emporium/
├── index.html
├── home-2.html
├── about.html
├── services.html
├── service-details.html
├── blog.html
├── blog-details.html
├── pricing.html
├── contact.html
├── login.html
├── register.html
├── 404.html
├── coming-soon.html
└── assets/
    ├── css/
    │   ├── style.css
    │   ├── dark-mode.css
    │   └── rtl.css
    ├── js/
    │   └── main.js
    ├── images/
    └── fonts/
```

❌ No extra folders. ❌ No nested page directories.

---

## DESIGN SYSTEM

**Palette** (STRICT — 3 colors only):
- **Black** (#000) → text in light mode.
- **White** (#FFF) → backgrounds in light mode, text in dark mode.
- **Accent: Royal Purple** (#6B21A8) → buttons, links, active states, magical accents, badges, hover effects, star ratings, price highlights.
- ❌ NO other colors. No Conjurer's Gold, no grey, no muted tones.

**Typography**:
- H1: 40–48px. Slightly theatrical but readable serif or display font.
- H2: 32–36px. H3: 24–28px. Body: 16–18px.
- Line height: 1.25–1.5. Max 2–3 font families. Use Google Fonts.

**Dark Mode**: Separate `dark-mode.css` file. Velvet Black (#12111A). Rich and atmospheric. Theme toggle in header.

**RTL**: Separate `rtl.css` file. Full support.

---

## RESPONSIVE BREAKPOINTS (NON-NEGOTIABLE)

- **280px – 1100px** → Hamburger ONLY, Offcanvas, centered logo.
- **1100px+** → Full desktop nav.

Test at: 320px, 480px, 768px, 1024px, 1440px.

Mobile-specific:
- Touch-friendly buttons (minimum 44px).
- Reduced animations on mobile.
- Optimized image sizes for mobile data.

---

## HEADER (ALL PAGES IDENTICAL)

Logo, Nav (Home, Shop, Categories, About, Blog, Contact), Login/Register (same color), Theme toggle (top-right).

## FOOTER (ALL PAGES IDENTICAL)

4 columns (Brand/Social, Shop Categories, Support, Newsletter). © 2026. Back-to-top.

---

## HOME 1 (`index.html`) — "Step Into the Secret"

**S1 — The Hidden Door** (NOT a product banner hero): A full-viewport dark section. At center: a **CSS-animated "door" graphic** — a simple rectangular outline that "creaks open" (CSS transform rotate on scroll or after 2 seconds) to reveal the shop title: "The Arcane Emporium — Tricks, Props & Secrets Since 1987." Below: "Enter the Shop" button with a subtle shimmer animation (CSS keyframe). No product images. The entrance IS the experience.

**S2 — Skill Level Pathways** (NOT a category grid): A **3-pathway selector** displayed as a vertical fork in the road. Three paths diverge from a single point: "Apprentice (Beginner)" / "Conjurer (Intermediate)" / "Grand Illusionist (Master)." Clicking a path scrolls to a filtered product preview showing 2 products from that skill level. The interaction IS the categorization — not a dropdown filter.

**S3 — "Trick of the Week" Spotlight**: A **single full-width feature card** for one product. Contains: trick name ("The Vanishing Monarch"), difficulty badge (Conjurer), effect description ("Four kings vanish one by one from a freely selected packet"), audience size ("Close-up, 1–8 people"), price, and an "Add to Cart" button. One trick. Focused attention.

**S4 — Shop by Performance Type** (NOT standard categories): A **2×2 grid** where each card represents HOW the trick is performed: "Close-Up (Table Magic)" / "Parlour (Living Room Shows)" / "Stage (Theatre Illusions)" / "Street (Impromptu)." Each card: performance type name, 1-line description, estimated audience size, "Browse" link.

**S5 — The Magician's Oath**: A **single dark section** with centered text — a stylized version of the magician's code. Decorative, brand-building, trust-establishing. Styled as an embossed plaque.

**S6 — CTA**: H2: "Every great magician started with one trick." Email input + "Join the Inner Circle" (newsletter).

---

## HOME 2 (`home-2.html`) — "The Catalog"

**S1 — New Arrivals Strip**: Horizontal scrollable strip of 4 product cards (even count). Each: product name, price, skill badge, "View" link. Mobile: vertical stack.

**S2 — "Why Buy From Us?"** (NOT generic trust icons): An **accordion** of 4 magic-specific reasons.

**S3 — Bestsellers**: 2×2 product grid. Each card: name, price, difficulty badge, star rating, "Quick View" link.

**S4 — Blog Preview**: 2 posts (2-column). Topics: trick reviews, performance tips.
**S5 — CTA**: Same as Home 1 S6.

---

## OTHER PAGES

**about.html**: Shop origin story → Timeline → Philosophy ("We sell wonder, not just props") → 2×2 values.
**services.html** → **Shop Categories**: 6 category cards (2×3): "Card Magic," "Coin & Token," "Mentalism," "Stage Illusions," "Books & DVDs," "Gimmicks & Accessories."
**service-details.html** → **Product Detail Page**: Product hero → "What the audience sees" → "What you get" → Skill requirements → Related products (2-column).
**blog.html**: Search + filter (Trick Reviews, Performance Tips, History, Behind the Curtain). Full-width posts.
**blog-details.html**: Article + sidebar.
**pricing.html** → **Membership Tiers**: 2-column: "Free Browser" vs. "Inner Circle" ($9.99/mo).
**contact.html**: Form (Name, Email, Subject dropdown, Message).
**login.html / register.html**: No header/footer. Centered form. "Enter your secret password" flavor text. Social login. Vertical inputs.
**404.html**: "Poof! This page has vanished. 🎩" + "Back to the Shop."
**coming-soon.html**: "Something magical is being prepared..." + countdown + signup.

---

## FORM VALIDATION

All forms must include client-side validation with clear error messages, tooltips, and visual feedback.

## CRITICAL RULES

❌ No low contrast. ❌ No overlaps. ❌ No horizontal scroll. ❌ No inconsistent buttons. Even grids only (2×1, 2×2, 2×3).

## PERFORMANCE & SEO

- Optimize images (alt text, WebP). Minimal CSS/JS minified for production.
- SEO meta tags on every page. Unique title tags (60 chars max). Meta descriptions (150–160 chars).
- One H1 per page, proper heading hierarchy. JSON-LD structured data. PageSpeed 90+.

## CODE QUALITY

- HTML: Semantic markup, proper heading hierarchy. CSS: CSS variables for theming.
- JavaScript: ES6+, modular, no console logs. Code comments for sections and functions.

## FINAL CHECKLIST

✔ Readable text. ✔ Working buttons/nav. ✔ Dark mode. ✔ RTL. ✔ No spacing issues. ✔ Forms validated. ✔ Cross-browser tested. ✔ Accessibility tested. ✔ Images optimized with alt text.
