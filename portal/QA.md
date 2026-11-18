# Portal QA · 2026-11-18

The initial QA below preceded merge/publication. PR #1 was merged as `f1caa7f41f7110ec913f3a86aa9a9532a0856ec1` on 2026-11-18; its Node-based Pages workflow succeeded. The follow-up documentation branch is not merged or deployed. 0.5.0 remains an unreleased development track; 0.3.8 is the Redis module maintenance release only.

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

## Follow-up: published upgrade recipe and security context

- Source-checked the Redis 0.3.8 Maven/Gradle declarations against the official v0.3.8 release notes. These are for existing 0.3.7 consumers, not a complete new-app quickstart.
- Added dependency-tree inspection commands and explicit resolution/locking caveats. The declarations and commands were reviewed, not executed in a representative consumer application in this pass.
- Added the Boot 3 recommendation, conditional Boot 2 legacy path, product-specific remediation examples, and the optional HeroDevs no-remoting alternative with provenance/compatibility/commercial caveats. Linked official vendor sources; no dependency or security-gate change.
- Local `npm run build` generated 10 pages; `npm test` passed 6/6, including the new upgrade/security content regression.
- Updated browser copy-button selection for multiple code blocks. Browser regression was attempted but the installed Chromium aborted at startup with `socket() failed: Operation not permitted`; no current-pass browser assertions or screenshots completed. The earlier Chromium results above do not cover the newly added content.
- Live home HTTP 200 and FluxGate title/H1 verified after PR #1 merge; this is HTML delivery evidence, not a fresh visual audit. A separate legacy Jekyll workflow failed parsing preserved Dyte MDX as Liquid, while the intended Node Pages deployment succeeded. No Pages configuration was changed here.
- Real-device, Safari/Firefox, screen-reader, consumer-runtime and comprehensive external-link verification remain outside this pass. The 0.5.0 track is still not declared released or security-cleared.
