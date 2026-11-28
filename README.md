# Humphrey Nyahoja — Portfolio

A static portfolio featuring personal projects, selected collaborative work,
education, and direct contact links. Built with HTML, CSS, and JavaScript;
no build step or package installation is required.

Open `index.html` in a browser, or serve this directory with a static web server.
The existing custom domain is configured in `CNAME`.

## Updating content

- Edit project cards in `index.html`. Each card has a `data-category` of
  `web`, `mobile`, or `systems`, used by the project filters.
- Keep recent personal projects first, ordered by repository activity.
- Add only working repository or demo URLs; label recorded demos as videos.
- Education credentials use native disclosure controls and work without JavaScript.
- Contact opens an email client through a `mailto:` link.
- Update `styles.css` for presentation and `index.js` for navigation and filtering.

Project content is embedded in the HTML, so it remains available without
JavaScript or a GitHub API connection. Google Fonts is optional; local system
font fallbacks are provided.

## Recent project review

Reviewed on November 23, 2026 against the public GitHub repository list and
project READMEs. Recent featured projects:

- [Dasho](https://web.humphreynyahoja.me/) — food delivery with customer and rider apps, a restaurant portal, and a shared Rust API. Added November 28, 2026 from the local `food_backend` project documentation; [repository](https://github.com/1772hojaz/food_backend).
- [Answered](https://github.com/1772hojaz/answered) — student revision resources.
- [Agentic Shop](https://github.com/1772hojaz/agentic_shop) — WhatsApp shopping and administration.
- [Hexa-mono](https://github.com/1772hojaz/Hexa-mono) — Airbnb clone project.
- [SignalShift](https://github.com/1772hojaz/signalshift) — news relevance intelligence MVP.

Dates on project cards describe repository updates, not launch dates.
Public forks and practice repositories are not presented as original featured products.

The four recent project covers in `assets/projects/` are AI-generated thematic
illustrations, not application screenshots. They are stored locally as optimized
WebP images and loaded lazily.
Dasho reuses the AI-generated meal artwork from its landing page, also stored
locally as WebP; it is illustrative rather than an application screenshot.
