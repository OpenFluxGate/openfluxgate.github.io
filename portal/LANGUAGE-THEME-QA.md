# English, theme and animation update

## Scope
Korean URLs stay unchanged. English home, nine guides, prompt, search, 404 and navigation are generated under `/en/`. Language links preserve the current guide. External citations remain their original sources and may be in their original language. Old template documents outside the generated portal are not translated or published.

All nine document/section/list counts match the Korean source; published version boundaries and residual Boot 2 security risks are preserved. The video figures remain unverified and are not an SLA.

## Theme
System / Light / Dark selection persists locally. System follows OS color preference; invalid or inaccessible storage falls back safely. A synchronous head script applies the saved theme before styles load. Theme changes in other tabs are handled. No external preference service is used.

## Animation behavior supersedes MEDIA-REVIEW.md's original opt-in behavior
At the owner's latest request, GIF playback starts automatically unless reduced motion is enabled. Reduced-motion users start with the poster and may explicitly play. All users can stop playback; enabling reduced motion while playing stops it. Text explanation and performance caveat remain. No JavaScript means the static poster remains.

## Verified
- Build: 22 HTML pages. Node tests: 11/11.
- All generated local links/assets/anchors resolve; language parity, English search URLs, no untranslated Korean prose (except the intentional 한국어 language control) checked.
- Mocked runtime tests: system theme change, explicit persistence, storage change; automatic playback, reduced-motion startup and dynamic stop, manual stop. These are unit tests, not OS/browser emulation.
- Actual Chromium: English and Korean home autoplay and Stop-to-poster; theme switching, reload persistence, same-guide language switch; English SCAN search with four English result links.
- Desktop screenshot and 333 CSS-pixel layouts in both languages inspected; no whole-page horizontal overflow (333 viewport, 323 document width). Narrow view achieved with resized desktop window and 150% zoom, not real-device emulation.

## Limits
No Safari/Firefox, real touch device, screen reader or actual OS reduced-motion switch validation. DevTools emulation is unavailable under browser policy. No WCAG certification or perfect-mobile claim. The supplied paper illustration remains white and its small internal text requires the adjacent text explanation on narrow screens.

No merge, production deploy or Pages setting changes performed for this PR.
