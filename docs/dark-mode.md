# PER-66: system dark mode

The site follows `prefers-color-scheme: dark` through Tailwind v4's default
`dark:` variant and media-scoped theme variables. There is no theme switch or
stored preference. Existing light utilities, typography and spacing remain.

## Palette and text contrast

Ratios use WCAG relative luminance in sRGB, rounded to two decimal places.
Opaque colors are measured against both the page and card surfaces.

| Role | Color | On page `#171412` | On surface `#221e1b` |
| --- | --- | ---: | ---: |
| Page background | `#171412` | — | — |
| Cards, header, footer | `#221e1b` | — | — |
| Body text and headings | `#ece6df` | 14.80:1 | 13.35:1 |
| Supporting text and navigation | `#b8afa6` | 8.49:1 | 7.66:1 |
| Red text, links, focus rings and accent lines | `#ff7070` | 6.81:1 | 6.15:1 |
| Borders | `#3a3430` | Decorative | Decorative |
| Red button and band fill | `#cc0000` | White text: 5.89:1 | White text: 5.89:1 |

Selection stays white on `#cc0000` in both schemes (5.89:1).
The timeline's translucent vertical line uses 70% of the light red, and its
hover highlight uses 15% of the original red. Timeline hover does not change
text colors. Form focus borders override Framer Motion's inline light color
only in dark mode.

## TechStack icons

All ratios below use the card surface `#221e1b`. Static image assets are not
recolored or hue-filtered. Monochrome React icon components use their current color;
Vercel uses a light circle and a dark triangle.

| Icon | Dark color | Contrast against card |
| --- | --- | ---: |
| Vercel | Circle `#ece6df`, triangle `#221e1b` | 13.35:1 (circle/card and triangle/circle) |
| Firebase | Original `#FF9100` / `#FFC400` / `#DD2C00` | 7.33 / 10.36 / 3.49:1 |
| Next.js | `#ece6df` | 13.35:1 |
| React | Original `#61DAFB` | 10.18:1 |
| TypeScript | Original `#3178C6` | 3.65:1 |
| JavaScript | Original `#F7DF1E` | 12.23:1 |
| Python | Original `#3776AB` | 3.42:1 |
| Django | `#44B78B` | 6.61:1 |
| HTML | Original `#E34F26` | 4.26:1 |
| CSS | Original `#1572B6` | 3.24:1 |
| Bootstrap | `#a78bda` | 5.79:1 |
| Tailwind CSS | Original `#06B6D4` | 6.81:1 |
| Rust | `#ece6df` | 13.35:1 |
| Java | Original `#007396` | 3.07:1 |
| C | Circle `#6779d4`, letter white | 4.15:1 (circle/card), 3.99:1 (letter/circle) |
| Unity | `#ece6df` | 13.35:1 |

Original Django (1.12:1), Bootstrap (2.89:1), and the C circle (2.14:1)
need brighter shades. Java already meets 3:1 and retains its original color.

Photos, publisher-provided book covers, application icons and the Firebase
logomark retain their pixels. The Gallery illustration alone uses
`dark:brightness-90`. Synthetic CSS book cards have dark surfaces and readable
metadata; real cover images remain unchanged. Both 3D canvases are transparent
so their parent determines the background without changing model materials.

## Validation and reviewer checks

The required command passes:

```powershell
& 'C:/Program Files/ai-orchestrator-tools/node-v24.11.1/node.exe' node_modules/typescript/bin/tsc --noEmit -p .
```

ESLint on `app` has the same one error and one warning before and after this
change: `react-hooks/set-state-in-effect` in Header and an unused `error` in
Footer. The existing checks were not changed. A separate reviewer checked the
diff and the correction to form focus borders.

The webpack production build succeeds. Headless Chromium verifies light and
dark Home, About, Gallery and Books at 1440px, and the dark mobile menu at 390px.
Computed colors confirm the palette, unchanged selection and no remaining pale
card surfaces. Additional checks cover the loading screen, dark/light form
focus borders, and unchanged timeline text on hover. Screenshots and machine
results are in `.orchestrator/visual/` for the coordinator; these local artifacts
are not intended for the PR.

Preview builds use local fallback fonts through Next's Google Fonts mock hook
to avoid downloads. Exact Google Fonts rendering remains a manual check.
Development preview runs initially timed out and later emitted intermittent
`Invalid or unexpected token` errors without a stack; the production preview
completed without page errors. This was not attributed to a source change.
There is no local book-detail route: existing book links lead to external Aozora
pages, whose appearance is outside this site's control.

To check the deployed font rendering and system behavior manually, run
`npm run dev`, open `http://localhost:3000`, and use browser DevTools Rendering
to emulate `prefers-color-scheme: dark`. Visit `/`, `/about`, `/gallery`, `/books`,
reload to see the loading screen, expand About's profile, hover timeline rows,
focus each contact input without submitting, then use a 390px viewport to open
the menu and change language. Repeat with the light preference and compare
against main. Expect dark surfaces, legible text, light monochrome logos,
unchanged photos/real book covers, no white canvas rectangle, and unchanged
light sizing/spacing. Pale cards, disappearing logos, dark red focus borders,
or changed timeline text colors indicate a failure.

The single PR must include this palette and icon table and cover all pages as
requested. If the final PR exceeds 400 changed lines after integration, explain
that PER-66 explicitly requires completing all pages together.
