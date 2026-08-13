# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing/information site for **Siem Reap Booyoung Country Club**, an 18-hole golf course + golftel (on-site hotel) + driving range in Siem Reap, Cambodia. Korean-language site aimed at Korean golf tourists. Next.js 14 (App Router) + TypeScript + Tailwind CSS, fully static (SSG) — no backend, no database, no API routes.

**Scope guardrail**: this is an information/inquiry site, not a booking system. Do not add online reservation, payment, or checkout functionality — the design brief explicitly excludes it (phone/KakaoTalk inquiry is the intended conversion path).

## Commands

```
npm run dev      # start dev server (http://localhost:3000)
npm run build    # production build (also the fastest way to typecheck)
npm run start    # serve the production build
npm run lint     # next lint
```

There is no test suite configured.

**Windows dev-server note**: on this environment `lsof` is unavailable, so killing a stray dev server requires `netstat -ano | grep :3000` to find the PID, then `taskkill //F //PID <pid>`. Never delete `.next/` while a dev server is running against it — it leaves the server serving 404s for every route until restarted.

## Architecture

### Content lives in `lib/data.ts`, not in components

Every piece of copy, contact info, and structured content (18 holes, room types, FAQ, notices, inquiries, facility items, family-group links) is a typed array/object exported from `lib/data.ts`. Page and component files only import from there and map over it — they don't hardcode Korean copy inline except for one-off section headings. When asked to change site content (prices, hours, addresses, hole yardages, etc.), edit `lib/data.ts` first and check whether the same data is reused elsewhere (e.g. `CONTACT_ROWS` is shared by both the homepage ACCESS section and `/access`; `FACILITY_TEASERS` feeds the homepage cards while `ROOMS`/`CLUBHOUSE_ITEMS`/`GOLFTEL_ITEMS`/`RANGE_ITEMS` feed the `/facilities/*` pages).

### Routing is flat, not dynamic

Sections that look like they'd be one dynamic route are actually separate static route folders sharing a client-side tab bar, because each needs its own URL for SEO/sharing:
- `app/facilities/{golftel,clubhouse,range}/page.tsx` share `<FacilityShell>` (hero + `<RouteTabs>`).
- `app/board/{notice,faq,inquiry}/page.tsx` share `<BoardShell>` (hero + `<RouteTabs>`).
- `app/facilities/page.tsx` and `app/board/page.tsx` are redirect-only stubs to the first child route.

`<RouteTabs>` highlights the active tab by comparing `usePathname()` to each tab's `href` — it's real navigation (`next/link`), not client state.

The one exception is the course page (`app/course/page.tsx`): OUT/IN (우정코스/사랑코스, holes 1–9 vs 10–18) is a single route with local `useState`, toggled by `<CourseTabs>`, because it's a view filter over one dataset rather than separate content.

### Photo pattern: `image` optional field + `<Placeholder>` fallback

Data items that can have a real photo declare an optional `image?: string` field (see `Hole`, `ROOMS`, `FACILITY_TEASERS`, `CLUBHOUSE_ITEMS`, `GOLFTEL_ITEMS` in `lib/data.ts`). Rendering code checks `item.image` and renders a real `next/image` when present, otherwise falls back to `<Placeholder label="..." />` (a striped placeholder box used throughout the design). When real photos are dropped into `public/images/`, wire them in by setting the `image` field — don't restructure the conditional rendering, it's the same pattern in every list (`FacilityItemGrid`, course page hole cards, home page signature holes/facility teasers, golftel room cards).

`Hole` also has an optional `tees?: HoleTee[]` (5-tee color-coded yardages: 블랙/블루/화이트/실버/레드, built via the `makeTees()` helper) that supersedes the legacy `champion/regular/ladies` 3-tee fields when present — new holes should use `tees`, not the legacy fields (kept only for holes without real scorecard data yet, and for the `OUT`/`IN` yardage-sum math in `CourseTabs`).

### Design tokens

- Colors, spacing, and the full screen-by-screen spec originate from `design-reference/README.md` (a design handoff doc — read-only reference, not part of the app). Brand palette is wired into `tailwind.config.ts` as named colors (`deep`, `deep-dark`, `deep-deep`, `gold`, `bronze`, `bg`, `bg-contrast`, etc.) — use those tokens rather than raw hex.
- Fonts: Cormorant Garamond (serif — headings, numerals) and Noto Sans KR (sans — body), loaded via `next/font/google` in `app/layout.tsx`.
- `tailwind.config.ts` overrides the default opacity scale to every integer 0–100, because the design uses arbitrary opacity values (`/68`, `/78`, `/94`, etc.) that Tailwind's default 5%-step scale silently drops (no CSS emitted, no build error). If a newly-added `/NN` opacity class doesn't render, this is why — check the override is still in place, don't hand-roll `rgba()` as a workaround.
- Square corners everywhere (`borderRadius.DEFAULT` is overridden to `0px`) — this is a deliberate design choice, not an oversight.

### Google Maps

`<GoogleMap>` embeds via the no-API-key `https://www.google.com/maps?q=<place>&output=embed` iframe pattern, querying by the business's Google-listed place name (not the raw street address) so the map surfaces the actual business listing/rating card. Used on both the homepage ACCESS section and `/access`.
