# Blessed Hope SDA church website

Design tokens
- Colors:
  - `primary` `#273375` (brand blue)
  - `navy` `#040C36` (dark section/footer)
  - `accent-blue` `#2B41BB` (accent blue)
  - `accent-yellow` `#FFC039` (accent yellow)
  - `overlay` `#02061C` (used at ~60% over hero)

Usage examples
- Header: `bg-primary`
- Dark sections: `bg-navy`
- Hero overlay: `bg-overlay/60`
- CTA: `bg-accent-yellow text-navy`

Fonts
- `font-sans` → Roboto (loaded in `index.html`).

Notes
- Extend/add tokens in `tailwind.config.js` under `theme.extend.colors`.
