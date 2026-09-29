# zentra-xme
XME Business Park 2, Nilai Impian — project microsite (Zentra Project / Zentra Property Group).

- **Target host:** xme.project.zentrapropertygroup.com (DNS CNAME pending, Porkbun)
- **Source data:** developer appointed-agency sales kit, Phase 3B + availability chart dated 24 September 2026
- **Figures:** 59 units (20 semi-detached, 39 linked) · 38 available as at 24 Sept 2026 · from RM 1,648,888
- **Imagery:** own schematic drawings (SVG). No developer renders are republished — see the "On Imagery" note on the page.

## Deploy
Static site on GitHub Pages from `main`. Relative paths throughout, so it serves correctly at the
domain root and under a preview sub-path (e.g. `/xme-preview/`).

Pages: single `index.html` + `data/*.js` (project + availability data) + `assets/` (style, renderer, drawings).
