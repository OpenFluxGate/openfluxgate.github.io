# Portal QA · 2026-11-18

No merge or production deployment performed. 0.5.0 remains an unreleased development track; 0.3.8 is the Redis module maintenance release only.

## Local validation

- `npm run build`: 10 pages generated.
- `npm test`: 5/5 structural, internal link, search and release-caveat checks pass.
- Local headless Chromium: 10 routes × 360/390/768/1440 px = 40 horizontal-overflow checks pass.
- Search results, empty results, fetch failure/retry, slash shortcut, close button, Escape, focus restoration, mobile menu navigation pass.
- Clipboard success feedback uses a mocked Clipboard API; system clipboard permission/write is not verified.
- Home desktop/mobile and start guide mobile screenshots visually inspected: readable typography, no page-level clipping; long code scrolls within its container.
- An Escape dismissal failure was reproduced in the installed Chromium setup; explicit Escape handling was added and regression passed.

Run `npm run build`, `npm start`, then `node portal/browser-test.mjs` in another terminal with Playwright available. `PLAYWRIGHT_MODULE` may point to an existing Playwright module and `CHROMIUM_EXECUTABLE` to an installed Chromium binary. No production runtime dependency is required. Screenshot output is local `/tmp/fluxgate-portal-doc-mobile.png`.

## Boundaries

Chromium-only local QA, using an explicitly selected cached browser binary. No claim of Safari/Firefox, real iOS/Android device, screen-reader certification, production Pages URL or exhaustive external-link validation. This is not a scored UI certification. Browser regression is optional local tooling, not yet wired into CI.

## Content review

Added shared Redis SCAN cost and duplicated Pod scans, unpublished revision-bucket tradeoffs, Redis mixed-version quota/state migration cautions, and the boundary between built-in providers and application/custom-provider KEYS usage. No unverified latency, SLA, zero-CVE or full backwards-compatibility claims.
