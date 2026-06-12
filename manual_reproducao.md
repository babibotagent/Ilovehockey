# Manual de Reprodução — ILoveHockey (Montreal Canadiens Fan Site)

## 1. Project Overview

### What It Does

ILoveHockey is a Montreal Canadiens fan website built as a fork/adaptation of PaixãoBR (a Brazilian national football team site). It showcases the Canadiens' current roster, complete Stanley Cup championship history (all 24 titles from 1916 to 1993), franchise legends, and NHL game schedule. The site is bilingual (English and French) to reflect Montreal's linguistic identity.

The project is a static-first Next.js application with no backend or database. All data lives in TypeScript files. It was designed to be deployed on AWS Amplify or any static hosting, though deployment has not yet been configured for this project.

### Who It's For

Montreal Canadiens fans, primarily in the Montreal/Quebec area and across Canada. The English/French bilingual support serves the city's two main language communities.

### Tech Stack

| Layer | Technology | Notes |
|-------|-----------|-------|
| Framework | Next.js 16.2.7 (App Router) | React 19, TypeScript |
| Styling | Tailwind CSS 4 | With `tw-animate-css` |
| Animation | Framer Motion 12 | Page transitions, scroll animations |
| UI Components | shadcn/ui | Button, Badge, Card, Input, Tabs, Sheet |
| Icons | Lucide React | Throughout the app |
| i18n | Custom React Context | `LanguageContext.tsx` — EN/FR only |
| Visitor Counter | counterapi.dev | Namespace: `ilovehockey-babiservices` |
| Repository | GitHub | `github.com/babibotagent/Ilovehockey` |

### Color Palette (Official Canadiens)

| Color | Hex | Usage |
|-------|-----|-------|
| Red | `#C8102E` | Primary accent, brand highlight, active states, buttons |
| Blue | `#003DA5` | Navbar bg, footer bg, secondary accent, gradients |
| Dark bg | `#0a0e1a` | Page background |
| Card bg | `#111827` | Cards, dropdowns, popover backgrounds |
| White | `#FFFFFF` | Text, foreground |

### Main System Flow

```
[User Browser]
      │
      ▼
[Next.js App (Static/SSR)]
      │
      ├── Static Data (players.ts, worldcups.ts, legends.ts, matches.ts)
      ├── LanguageContext (EN/FR)
      └── counterapi.dev (visitor counter)
```

### Final Project State

| Component | Status |
|-----------|--------|
| Home page with hero, stats, featured players | ✅ Done |
| Roster page (`/elenco`) — 15 Canadiens players | ✅ Done |
| History page (`/historia`) — 24 Stanley Cups + 15 legends | ✅ Done |
| Schedule page (`/partidas`) — 18 NHL games | ✅ Done |
| Player profile pages (`/jogador/[slug]`) | ✅ Done |
| About/Idealizadores page (`/idealizadores`) | ✅ Done |
| i18n — EN/FR | ✅ Done |
| Navbar with bilingual support | ✅ Done |
| Footer with Centre Bell info + visitor counter | ✅ Done |
| Color palette (#C8102E red, #003DA5 blue) | ✅ Done |
| Build passes (TypeScript + Next.js) | ✅ Done |
| Stanley Cup page (`/stanleycup`) | 🔲 Not started (nav link exists, no page) |
| Deployment (AWS Amplify or other) | 🔲 Not started |
| DNS configuration | 🔲 Not started |
| Player photos | 🔲 Not started (paths defined, no images uploaded) |
| OG image generation | 🗑️ Removed (had Brazilian content) |
| Background watermark image | 🗑️ Removed |

---

## 2. Prerequisites & Environment

### Required Tools

| Tool | Minimum Version | Purpose |
|------|----------------|---------|
| Node.js | 18+ | Runtime |
| npm | 9+ | Package manager |
| Git | 2.x | Version control |

### External Accounts and Access

| Service | Required For | Notes |
|---------|-------------|-------|
| GitHub | Repository | `github.com/babibotagent/Ilovehockey` |
| counterapi.dev | Visitor counter | Namespace: `ilovehockey-babiservices`, no auth needed |

### Environment Variables

```bash
# No environment variables required — all data is static, no API keys needed
```

### Project Directory Structure

```
Ilovehockey/
├── public/
│   └── images/
│       ├── players/           # Player photos ({slug}.jpg) — NOT YET UPLOADED
│       └── legends/           # Legend photos ({slug}.jpg) — NOT YET UPLOADED
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Root layout — "ILoveHockey" metadata, Inter font, bg #0a0e1a
│   │   ├── page.tsx              # Home — hero "I Love Hockey", dynasty years, stats, featured players
│   │   ├── globals.css           # Tailwind + CSS vars: #C8102E red, #003DA5 blue, #0a0e1a bg
│   │   ├── favicon.ico
│   │   ├── elenco/page.tsx       # Roster — filterable by hockey positions
│   │   ├── partidas/page.tsx     # Schedule — NHL 2025-26 games
│   │   ├── historia/page.tsx     # History — 24 Stanley Cups timeline + legends grid
│   │   ├── idealizadores/page.tsx # About page (4 team members)
│   │   └── jogador/[slug]/page.tsx # Player profile — stats, career, achievements
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx        # Blue navbar (#003DA5), "ILove"(red)+"Hockey"(white), EN/FR toggle
│   │   │   ├── Footer.tsx        # Blue footer, Centre Bell address, visitor counter
│   │   │   └── ClientLayout.tsx  # Wraps children in LanguageProvider
│   │   ├── shared/
│   │   │   ├── PlayerCard.tsx    # Player card with Canadiens red/blue colors
│   │   │   ├── MatchCard.tsx     # Match card — highlights "Montreal Canadiens" games
│   │   │   └── StatBlock.tsx     # Animated stat counter with red accent
│   │   └── ui/                   # shadcn/ui components (button, badge, card, etc.)
│   ├── contexts/
│   │   └── LanguageContext.tsx   # EN/FR translations, default lang: "en"
│   ├── data/
│   │   ├── players.ts           # 15 Canadiens: Suzuki, Caufield, Slafkovsky, etc.
│   │   ├── worldcups.ts         # 24 Stanley Cup editions (1916-1993), export: stanleyCups
│   │   ├── legends.ts           # 15 legends: Richard, Béliveau, Lafleur, Roy, etc.
│   │   ├── matches.ts           # 18 NHL games (12 finished, 6 upcoming)
│   │   ├── types.ts             # TypeScript interfaces: Player, Legend, Match, etc.
│   │   ├── basquete.ts          # Leftover from original project (unused)
│   │   └── volei.ts             # Leftover from original project (unused)
│   └── lib/
│       └── utils.ts             # cn() utility (clsx + tailwind-merge)
├── amplify.yml                   # AWS Amplify build config (from original project)
├── package.json                  # name still "selecao-brasileira" — should be renamed
├── tsconfig.json
├── next.config.ts
└── manual_reproducao.md
```

---

## 3. Step-by-Step Technical Manual

### 3.1 Project Creation (Fork from PaixãoBR)

**Objective:** Create a new repository based on the existing PaixãoBR codebase.

```bash
# GitHub doesn't allow forking your own repo, so we cloned and re-pointed
gh repo create babibotagent/Ilovehockey --public --description "NHL Hockey Fan App for North America"
git clone https://github.com/babibotagent/selecao-brasileira.git Ilovehockey
cd Ilovehockey
git remote set-url origin https://github.com/babibotagent/Ilovehockey.git
git push -u origin master
```

```
❌ Error: failed to fork: babibotagent/selecao-brasileira cannot be forked. A single user account cannot own both a parent and fork.
🔍 Cause: GitHub doesn't allow forking a repo under the same account
✅ Fix: Created a new repo and cloned + re-pointed the remote instead
```

### 3.2 Color Scheme Update

**Objective:** Replace Brazilian green/yellow with Montreal Canadiens red/blue.

**Files modified:** `src/app/globals.css` + all 11 `.tsx` files containing color hex codes

Colors replaced globally:
- `#FFDF00` (yellow) → `#AF1E2D` → `#C8102E` (Canadiens red, final)
- `#006B2D` / `#009C3B` (green) → `#192168` → `#003DA5` (Canadiens blue, final)
- `#071a0e` (dark green bg) → `#0a0e1a` (dark blue bg)

**Technical decision:** Colors were updated in two passes. First pass used darker shades (#AF1E2D, #192168). User provided a reference image of actual Canadiens branding, so we updated to official palette (#C8102E, #003DA5) in a second commit.

The replacement was done with PowerShell across all files:
```powershell
Get-ChildItem src -Recurse -Include *.tsx,*.ts | ForEach-Object {
  $content = Get-Content $_.FullName -Raw
  if ($content -match '#AF1E2D|#192168') {
    $newContent = $content -replace '#AF1E2D','#C8102E' -replace '#192168','#003DA5'
    Set-Content $_.FullName $newContent -NoNewline
  }
}
```

```
❌ Error: PowerShell Get-ChildItem couldn't process path with brackets: src/app/jogador/[slug]/page.tsx
🔍 Cause: Square brackets in path are interpreted as wildcard characters by PowerShell
✅ Fix: Manually edited that file using the Edit tool with replace_all
```

### 3.3 Language System (i18n)

**Objective:** Reduce from 4 languages (PT/EN/FR/ES) to 2 (EN/FR).

**File modified:** `src/contexts/LanguageContext.tsx`

- `Lang` type changed from `"pt" | "en" | "fr" | "es"` to `"en" | "fr"`
- Default language changed from `"pt"` to `"en"`
- All translation keys rewritten for hockey/Canadiens context
- `langFlags` both set to Canadian flag emoji `🇨🇦`
- 80+ translation keys covering: nav, hero, stats, roster, player, history, schedule, footer, cup stages

### 3.4 Data Layer — Roster

**Objective:** Replace Brazilian football squad with Montreal Canadiens roster.

**Files modified:** `src/data/players.ts`, `src/data/types.ts`

- `Position` type changed from `"Goleiro" | "Zagueiro" | ...` to `"Center" | "Left Wing" | "Right Wing" | "Defenseman" | "Goaltender"`
- 15 players added: Nick Suzuki (C), Cole Caufield (RW), Juraj Slafkovsky (LW), Kaiden Guhle (D), Samuel Montembeault (G), Patrik Laine (LW), Kirby Dach (C), Mike Matheson (D), Alex Newhook (C), Josh Anderson (RW), Joel Armia (RW), Jake Evans (C), Christian Dvorak (C), David Savard (D), Lane Hutson (D)
- Each player has: jersey number, age, height, career history, stats (games/goals/assists), highlights

### 3.5 Data Layer — Stanley Cup History

**Objective:** Replace World Cup editions with all 24 Canadiens Stanley Cup championships.

**File modified:** `src/data/worldcups.ts`

- Interface renamed from `WorldCupEdition` to `StanleyCupEdition`
- Export renamed from `worldCupEditions` to `stanleyCups`
- Fields: year, opponent, result (series score), coach, mvp, description, keyPlayers[], keyFacts[]
- All 24 championships documented: 1916, 1924, 1930, 1931, 1944, 1946, 1953, 1956-1960, 1965, 1966, 1968, 1969, 1971, 1973, 1976-1979, 1986, 1993

### 3.6 Data Layer — Legends

**Objective:** Replace Brazilian football legends with Canadiens legends.

**Files modified:** `src/data/legends.ts`, `src/data/types.ts`

- `Legend` interface updated: added `assists` and `stanleyCups` to stats, added optional `nickname`
- 15 legends: Maurice Richard, Jean Béliveau, Guy Lafleur, Patrick Roy, Jacques Plante, Henri Richard, Larry Robinson, Ken Dryden, Yvan Cournoyer, Doug Harvey, Howie Morenz, Dickie Moore, Serge Savard, Bob Gainey, Saku Koivu
- Each has: name, shortName (nickname), position, era, stats (games/goals/assists/stanleyCups), description, achievements

### 3.7 Data Layer — Match Schedule

**Objective:** Replace football matches with NHL 2025-26 season games.

**Files modified:** `src/data/matches.ts`, `src/data/types.ts`

- `Competition` type updated to include `"NHL Regular Season" | "NHL Playoffs" | "NHL Preseason"`
- 18 games: 12 completed (Oct 2025 – Jan 2026) + 6 upcoming (Feb – Apr 2026)
- Mix of home games at Centre Bell and away games
- Opponents: Toronto, Boston, Ottawa, Tampa Bay, Rangers, Detroit, Florida, etc.

### 3.8 Layout, Navbar & Footer

**Objective:** Rebrand all chrome to ILoveHockey.

**Files modified:** `src/app/layout.tsx`, `src/components/layout/Navbar.tsx`, `src/components/layout/Footer.tsx`

- **Layout:** Title "ILoveHockey - Montreal Canadiens Fan Page", lang="en", bg `#0a0e1a`
- **Navbar:** Blue bg `#003DA5/90`, brand "ILove"(red)+"Hockey"(white), Trophy icon, nav: Home/Roster/History/Schedule/Stanley Cup, EN/FR language toggle only, removed "Outras Seleções" dropdown and "Fut. Feminino" link
- **Footer:** Blue bg `#003DA5`, 4 columns (brand, navigation, Centre Bell address, About), visitor counter namespace `ilovehockey-babiservices`, copyright "ILoveHockey. Fan project. Unofficial."

**Note:** Footer nav links use `/roster`, `/history`, `/schedule` but actual routes are `/elenco`, `/historia`, `/partidas` — these links will 404. Needs fixing.

### 3.9 Page Updates

**Objective:** Adapt all page content and colors.

**Files modified:** All pages in `src/app/`

- **Home (`page.tsx`):** Dynasty years [1956-1960], featured players [suzuki, caufield, slafkovsky, laine, hutson, montembeault], stats (24 Cups, 36 Conference, 59 Playoffs, 65 Hall of Famers), removed bg-selecoes.jpg
- **Roster (`elenco/page.tsx`):** Position filters changed to hockey positions (All, Goaltender, Defenseman, Center, Left Wing, Right Wing)
- **History (`historia/page.tsx`):** Completely rewritten for StanleyCupEdition interface — shows card per championship with expandable key players & facts, legends grid below
- **Player (`jogador/[slug]/page.tsx`):** Colors updated, bg removed
- **About (`idealizadores/page.tsx`):** Title "About", subtitle "The minds behind the project", same 4 team members
- **Schedule (`partidas/page.tsx`):** Colors updated

### 3.10 Cleanup — Removed Files

**Objective:** Remove all Brazilian football and Copa 2026 specific code.

**Files deleted:**
- `src/app/copa2026/page.tsx` — Copa 2026 schedule page
- `src/app/opengraph-image.tsx` — OG image with Brazilian content
- `src/app/selecoes/` — Entire directory (volleyball, basketball, generic sport pages)
- `src/data/copa2026.ts` — Copa 2026 match data
- `src/data/selecoes.ts` — Olympic sports data
- `src/lib/worldcup-api.ts` — worldcup26.ir API client
- `.github/workflows/update-scores.yml` — Copa score updater workflow
- `scripts/update-scores.mjs` — Copa score updater script

```
❌ Error: Property 'champion' does not exist on type 'StanleyCupEdition'
🔍 Cause: historia/page.tsx still referenced old WorldCupEdition fields (champion, hostFlag, host, brazilMatches, etc.)
✅ Fix: Completely rewrote historia/page.tsx to match the new StanleyCupEdition interface

❌ Error: Module '"@/data/worldcups"' has no exported member 'WorldCupEdition'
🔍 Cause: Import not updated after interface rename
✅ Fix: Changed import to StanleyCupEdition

❌ Error: Property 'nickname' does not exist on type 'Legend'
🔍 Cause: Used legend.nickname but interface had shortName instead
✅ Fix: Changed to legend.shortName in the template
```

---

## 4. Infrastructure & Deployment

### Current State

Deployment has **not been configured** for ILoveHockey. The project builds successfully with `npm run build` and runs locally with `npm run dev`.

### Local Development

```bash
git clone https://github.com/babibotagent/Ilovehockey.git
cd Ilovehockey
npm ci
npm run dev
# → http://localhost:3000
```

### Build

```bash
npm run build
# Output: .next/ directory
# All routes are static except /jogador/[slug] (dynamic)
```

### Build Output (confirmed working)

```
Route (app)
┌ ○ /
├ ○ /_not-found
├ ○ /elenco
├ ○ /historia
├ ○ /idealizadores
├ ƒ /jogador/[slug]
└ ○ /partidas

○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand
```

### Amplify Config (from original project, not yet configured)

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
      - .next/cache/**/*
```

### Maintenance Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Kill stuck dev server (Windows)
netstat -ano | findstr :3000
taskkill /PID <pid> /F

# Kill stuck dev server (Ubuntu)
lsof -ti:3000 | xargs kill -9
```

---

## 5. Quick Reproduction Checklist

```markdown
- [ ] Install Node.js 18+ and npm
- [ ] Clone repo: `git clone https://github.com/babibotagent/Ilovehockey.git`
- [ ] Install dependencies: `npm ci`
- [ ] Rename package.json name from "selecao-brasileira" to "ilovehockey" (see section 6)
- [ ] Delete leftover unused files: `src/data/basquete.ts`, `src/data/volei.ts` (see section 6)
- [ ] Add player photos to `public/images/players/` matching slugs in players.ts
- [ ] Add legend photos to `public/images/legends/` matching slugs in legends.ts
- [ ] Run dev server: `npm run dev` — verify at `http://localhost:3000`
- [ ] Test both EN and FR languages via language selector
- [ ] Verify all pages: Home, Roster, History, Schedule, Player profiles
- [ ] Fix Footer nav links to match actual routes (/elenco not /roster, etc.)
- [ ] Create Stanley Cup page at `src/app/stanleycup/page.tsx` (nav link exists, page missing)
- [ ] Create About page at `src/app/about/page.tsx` or fix footer link to `/idealizadores`
- [ ] Configure deployment (AWS Amplify, Vercel, or other)
- [ ] Configure custom domain and DNS
- [ ] Push to remote and verify deployment
```

---

## 6. Final Notes

### Known Limitations and Unimplemented Features

- **Stanley Cup page (`/stanleycup`)** — Navbar has a link but no page exists yet
- **About page (`/about`)** — Footer links to `/about` but page is at `/idealizadores`
- **Footer nav links mismatch** — Footer uses `/roster`, `/history`, `/schedule` but routes are `/elenco`, `/historia`, `/partidas`
- **package.json name** — Still says "selecao-brasileira", should be "ilovehockey"
- **Leftover data files** — `src/data/basquete.ts` and `src/data/volei.ts` exist but are unused
- **No player/legend photos** — Image paths defined but no actual images uploaded
- **No OG image** — Was removed (had Brazilian content), not recreated for hockey
- **No deployment** — Not configured yet (user requested Ubuntu, no deployment)
- **Match data is static** — No live NHL API integration
- **Competition type has old values** — `types.ts` still has "Eliminatórias", "Copa América", etc.

### Risk Areas

| Risk | Severity | Mitigation |
|------|----------|------------|
| Footer links 404 | High | Fix nav hrefs to match actual routes (/elenco, /historia, /partidas) |
| /stanleycup page 404 | Medium | Create the page or remove from navbar |
| /about page 404 | Medium | Rename idealizadores to about, or fix footer link |
| No player photos | Medium | Upload .jpg files to public/images/players/ matching player slugs |
| Stale match data | Low | Update matches.ts periodically with real NHL results |
| Leftover Brazilian data types | Low | Clean up Competition type union in types.ts |

### Recommended Next Steps

1. **Fix routing mismatches** — Footer links, Stanley Cup page, About page
2. **Upload player and legend photos** — Use official Canadiens/NHL media
3. **Create `/stanleycup` page** — Could be a playoff bracket or historical Stanley Cup timeline
4. **Clean up leftover files** — Delete basquete.ts, volei.ts, fix package.json name, clean Competition type
5. **Create OG image** — For social media sharing
6. **Configure deployment** on Ubuntu (user's preference)
7. **Add NHL API integration** — For live game scores (similar to Copa 2026 approach from PaixãoBR)
8. **Add logo/branding image** — Canadiens-themed background or logo in hero section

### Lessons Learned

**What worked well:**
- Forking from an existing project saved enormous time — same architecture, just different data
- Parallel subagents for updating multiple files simultaneously
- Global color replacement via PowerShell scripted across all files
- Two-pass color update (rough → exact) based on user's visual reference image
- Build verification after each major change caught type errors early

**What to avoid next time:**
- PowerShell `Get-ChildItem` can't handle paths with brackets (`[slug]`) — use the Edit tool directly for those files
- When renaming TypeScript interfaces, grep ALL references before committing — `WorldCupEdition` → `StanleyCupEdition` had references scattered across multiple files
- Footer nav links should match actual route paths — they were created with English names (`/roster`) but routes use Portuguese names (`/elenco`) from the original project
- Clean up ALL leftover files from the source project in one pass, not incrementally
