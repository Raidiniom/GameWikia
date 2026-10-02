# GameWikia-frontend
Personal App Project for Any Game Guide and Wiki

## Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

## Folder structure

```
frontend/
├── app/                      ← ROUTES ONLY. Every file here is a screen/URL.
│   ├── _layout.tsx           ← Root navigator (Stack) + status bar
│   ├── index.tsx             ← "/" → redirects to /login
│   ├── (auth)/               ← (group) folders organize files but don't appear in the URL
│   │   ├── login.tsx         ← /login
│   │   ├── register.tsx      ← /register
│   │   ├── forgot-password.tsx
│   │   └── reset-password.tsx
│   └── (app)/
│       ├── home.tsx          ← /home
│       └── games/[gameId]/   ← [brackets] = dynamic segment (a URL parameter)
│           ├── index.tsx     ← /games/azurlane, /games/arknights, …
│           └── [sectionId].tsx ← /games/azurlane/factions, …
├── components/               ← Reusable pieces. NOT routes.
│   ├── ui/                   ← Generic building blocks (Button, TextField, Screen…)
│   ├── auth/                 ← Pieces used only by auth screens
│   ├── games/                ← Pieces used by game screens (GameCard, SectionRow)
│   └── sections/             ← Actual wiki content, per game, plus a registry
├── constants/
│   ├── theme.ts              ← Colors, spacing, radius, font sizes, per-game themes
│   └── games.ts              ← The list of games and their sections (data)
├── lib/                      ← Plain TypeScript helpers (no React), e.g. password rules
└── assets/                   ← Images and fonts
```

## Conventions

- **Route files** (`app/`) are `kebab-case.tsx` (they become URLs) and use `export default`.
- **Component files** (`components/`) are `PascalCase.tsx` and use **named exports**:
  `export function GameCard() {}` → `import { GameCard } from '@/components/games/GameCard'`.
- **Styles live at the bottom of the file that uses them** (`const styles = StyleSheet.create(...)`).
  Only design tokens (colors, spacing…) are shared, via `constants/theme.ts`. Don't hard-code hex colors in components.
- **Use the `@/` import alias** (`@/components/...`) instead of `../../..`.
- **Data, not copies.** To add a game, add an entry to `constants/games.ts`; the home list, game page
  and section pages are generated from it. To write content for a section, create a component in
  `components/sections/<game>/` and register it in `components/sections/index.ts`.
- **Derive, don't store.** If a value can be computed from state (e.g. password strength from the password),
  compute it during render instead of keeping a second `useState`.

# GameWikia-backend

This project was created using `bun init` in bun v1.1.43. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

1. To install dependencies:

   ```bash
   bun install
   ```

2. To run:

   ```bash
   bun run src/index.ts
   ```

## 📜 License

This project is for **educational and personal use**.

---

## 👤 Author

**Raidiniom**
GitHub: [https://github.com/Raidiniom](https://github.com/Raidiniom)

---