---
name: Ember & Bean
description: Small-batch coffee, slowly made. A warm cream-and-espresso neighborhood café site.
colors:
  cream: "#faf4ea"
  latte: "#e9d8bd"
  caramel: "#c68642"
  mocha: "#7a4a2b"
  espresso: "#2b1810"
typography:
  display:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "3.75rem"
    fontWeight: 700
    lineHeight: 1.25
  headline:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.2
  title:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.4
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    letterSpacing: "0.1em"
rounded:
  md: "6px"
  card: "16px"
  panel: "24px"
  pill: "9999px"
spacing:
  gutter: "24px"
  card: "24px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "{colors.espresso}"
    textColor: "{colors.cream}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.mocha}"
  button-hero:
    backgroundColor: "{colors.caramel}"
    textColor: "{colors.espresso}"
    rounded: "{rounded.pill}"
    padding: "12px 28px"
  button-hero-hover:
    backgroundColor: "{colors.latte}"
  menu-card:
    backgroundColor: "#ffffff99"
    textColor: "{colors.espresso}"
    rounded: "{rounded.card}"
    padding: "24px"
  quote-card:
    backgroundColor: "{colors.espresso}"
    textColor: "{colors.cream}"
    rounded: "{rounded.card}"
    padding: "32px"
  category-chip:
    backgroundColor: "#ffffff99"
    textColor: "{colors.espresso}"
    rounded: "{rounded.pill}"
    padding: "8px 20px"
---

# Design System: Ember & Bean

## Overview

**Creative North Star: "The Corner Table"**

The site should feel like the seat the shop saves for you: warm, unhurried, and a little worn-in. Cream paper carries the reading, espresso brown carries the weight, and caramel is the small glint of something freshly poured. Everything is soft: pill buttons, rounded cards, a serif with gentle personality.

Density is generous. Sections breathe on a 96px vertical rhythm inside a 1152px column, and one idea gets one block. Mood is warm, soft, neighborly; the interface speaks like a barista, not a brand deck. Practical facts (menu, price, hours, address) stay legible and are never buried in decoration.

**Key Characteristics:**
- Five-color brown-and-cream palette; no cool neutrals, no pure black or white.
- Serif display (Fraunces) over a neutral sans (Inter) for all functional text.
- Pill-shaped actions, 16px cards, hairline latte borders.
- Flat, tonal depth; shadow only as a response or on the single hero medallion.
- Alternating cream and latte bands, with espresso reserved for the hero, quotes, and footer.

## Colors

A roasted-and-milky palette: one dark, one mid-brown, one accent, two creams.

### Primary
- **Espresso Brown** (#2b1810): body text, primary buttons, hero, testimonial cards, footer. The dark anchor of every page.
- **Caramel Glow** (#c68642): the single accent. Eyebrow labels, prices, stat numbers, hover on text links, and the hero call to action.

### Secondary
- **Mocha** (#7a4a2b): secondary text (descriptions, hours), and the hover state for espresso buttons.

### Neutral
- **Warm Cream** (#faf4ea): page background and text on dark surfaces.
- **Latte Foam** (#e9d8bd): borders, dividers, chip hover, icon discs, and the half-opacity band (`latte/50`) behind About and Visit.

### Named Rules
**The Warm Only Rule.** Every neutral is tinted brown. Never introduce gray, pure black (#000), or pure white as a solid; the white card fill is always translucent (60%) over cream.

**The Glint Rule.** Caramel marks a small thing worth noticing (a price, a label, a number). It is not a section background and not body text; note that caramel on cream is low contrast, so keep it to large or bold text and verify AA before using it for small copy.

## Typography

**Display Font:** Fraunces (with Georgia, serif), weights 500 and 700
**Body Font:** Inter (with ui-sans-serif, system-ui), weights 400, 500, 600

**Character:** Fraunces brings a soft, slightly old-fashioned warmth to headings and quotes; Inter stays out of the way for menu text and hours.

### Hierarchy
- **Display** (700, 3rem to 3.75rem, 1.25): hero tagline only.
- **Headline** (700, 1.875rem to 2.25rem, ~1.2): section titles via the shared section heading.
- **Title** (700, 1.25rem to 1.5rem): card titles, "Opening hours", item names, and quotes (Fraunces 1.125rem, relaxed leading).
- **Body** (400, 0.875rem to 1.125rem, 1.5): descriptions and contact lines; hero lede at 1.125rem. Keep prose near 65ch (`max-w-md` to `max-w-2xl`).
- **Label** (600, 0.875rem, 0.1em tracking, uppercase, caramel): eyebrows above headings and footer column titles.

### Named Rules
**The Serif Speaks Rule.** Only headings and testimonial quotes use Fraunces. Prices, nav, buttons, and hours are always Inter.

## Layout

A single centered column, `max-w-6xl` (1152px) with 24px side gutters. Sections use 96px vertical padding (80px on the menu page, up to 128px in the hero), and alternate backgrounds (cream, latte at 50%) to mark chapters instead of rules. Content grids are 2 columns (hero, about, visit), 3 columns (testimonials, footer, stats), and 1 to 3 columns for menu cards (`sm:2`, `lg:3`) with 24px gaps. Section headings are centered by default; the About heading is left-aligned beside its image. The breakpoint that matters is `md` (768px): the nav collapses into a toggle with a stacked panel below it, and two-column blocks stack. In-page anchors use `scroll-mt-20` to clear the sticky header.

## Elevation & Depth

Flat and tonal. Depth is conveyed by alternating cream and latte bands, hairline latte borders, and the translucent white card fill. The header is sticky with a 90% cream backdrop blur and a latte bottom border.

### Shadow Vocabulary
- **Hover lift** (`shadow-lg`): menu cards on hover only.
- **Hero medallion** (`shadow-2xl`): the one resting shadow, under the circular hero graphic.
- **Hero glow** (`blur-3xl` caramel and mocha circles at 20% to 40%): soft ambient light behind the espresso hero.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. Shadows appear on hover, or on the hero medallion, and nowhere else.

## Shapes

Soft and round. Actions are full pills; content containers are 16px (`rounded-2xl`); the About image panel is 24px (`rounded-3xl`); the icon discs and the hero medallion are circles. Borders are 1px latte, never dark. Smaller controls (the mobile menu button) use a 6px radius. There are no sharp corners and no mixed radius within one group.

## Components

### Buttons
- **Shape:** full pill (9999px).
- **Primary:** espresso fill, cream text, 12px 24px (nav CTA 8px 20px), medium weight; hover shifts to mocha.
- **Hero primary:** caramel fill, espresso text; hover shifts to latte.
- **Hero secondary:** transparent with a 1px latte/40 border, cream text; hover adds a cream/10 wash.
- **Transitions:** color only (`transition-colors`).

### Chips
- **Style:** pill, 1px latte border, translucent white fill, 8px 20px, medium weight, centered row.
- **State:** hover fills latte. Used as in-page category links on the menu.

### Cards / Containers
- **Corner Style:** 16px.
- **Background:** translucent white (60%) over cream; testimonial cards invert to solid espresso with cream text.
- **Shadow Strategy:** none at rest, `shadow-lg` on hover (menu cards).
- **Border:** 1px latte on light cards.
- **Internal Padding:** 24px (menu cards), 32px (info and quote cards).

### Navigation
Wordmark in Fraunces bold 1.25rem beside 14px medium links; link hover turns caramel. Pill CTA on the right at `md` and up. Under `md`, a 24px hamburger toggle reveals a stacked list under a latte hairline.

### Menu Item Card (signature)
A 56px latte disc holds an emoji, then the item name (title) and caramel price on one baseline row, then a mocha description. The emoji is a placeholder; real photography or illustration should replace it without changing the card structure.

## Do's and Don'ts

### Do:
- **Do** build from the five palette colors; use espresso for text, mocha for secondary text, caramel as the accent.
- **Do** keep action shapes pill-round and containers 16px.
- **Do** alternate cream and latte/50 bands between sections.
- **Do** keep eyebrows uppercase, tracked at 0.1em, and caramel.
- **Do** keep prices, hours, and address as plain Inter text a phone can read at a glance.

### Don't:
- **Don't** use pure black, pure white, or any gray.
- **Don't** put Fraunces on prices, buttons, nav, or form-like data.
- **Don't** add resting shadows to cards or buttons.
- **Don't** use caramel for small body text on cream without checking AA contrast.
- **Don't** add dark borders or square corners.
- **Don't** treat emoji as final art; they are placeholders for real imagery.
