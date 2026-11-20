# OpenFluxGate documentation

FluxGate documentation portal: installation, Spring integration, operations and version-specific upgrades. A documentation publication is not a FluxGate software release.

- [Documentation](https://openfluxgate.github.io/)
- [Core v0.5.0 release](https://github.com/OpenFluxGate/fluxgate/releases/tag/v0.5.0) and [Studio v0.5.0 release](https://github.com/OpenFluxGate/fluxgate-studio/releases/tag/v0.5.0)
- Installation guides in [Korean](https://openfluxgate.github.io/docs/start/) and [English](https://openfluxgate.github.io/en/docs/start/)
- Studio downloads and demos in [Korean](https://openfluxgate.github.io/docs/studio/) and [English](https://openfluxgate.github.io/en/docs/studio/)

## Technical note animation

The index includes the owner-provided Redis Lua explainer as an optimized GIF with a static poster. Animation starts automatically unless reduced motion is enabled and can always be stopped. Reduced-motion users may explicitly choose to play. A text explanation is provided alongside it. The embedded 50K TPS / p99 233μs values are not revalidated in this documentation change and are not current-release performance guarantees.

Use `portal/assets/fluxgate-paper.gif` only together with that caveat and the static/reduced-motion alternative. Do not embed an auto-playing GIF in this README: GitHub cannot provide the same page-level playback controls.

## Develop

Requires Node.js 20 or later. No runtime or build npm dependencies.

```sh
npm ci
npm run build
npm test
npm start
```

Open http://127.0.0.1:4173. Edit `portal/content.mjs`, `portal/build.mjs`, and `portal/assets/`. Only explicitly generated files are published in `build/`. Legacy `docs`, `src`, `static`, `modules`, configuration and unrelated contributions remain in source for provenance but are not included in the portal build. No third-party analytics, remote font, chatbot or search service is loaded.

## Review and publication

PR checks build the portal, check internal links and content safety, and upload a downloadable preview artifact. They do not deploy. The existing main-only Pages workflow is unchanged: merging to main can publish the site and requires separate approval. A draft PR is not publication approval.

## Content policy

Source versions, published artifacts and production deployments are distinct. Core v0.5.0 is published on GitHub and Maven Central, including both Spring Boot starters. Applications using the legacy Boot 2.7 stack should review their runtime dependencies against the [release’s Spring dependency notice](https://github.com/OpenFluxGate/fluxgate/blob/v0.5.0/docs/release-0.5.0-readiness.md#spring-dependency-notice). Do not turn an example or passing unit test into a production-safety claim. Update release status with primary-source evidence.

## Attribution

This repository began from Dyte documentation. Its Apache-2.0 LICENSE, including original attribution, is preserved unchanged. Existing legacy contributions are retained, not presented as FluxGate functionality. New portal files are the OpenFluxGate documentation rebuild. See `PORTAL-MIGRATION.md`.


## Languages and appearance

- Korean URLs remain unchanged. English documentation is generated under `/en/`, including all ten guides, the home page, search, and the copyable setup prompt.
- The language link switches to the same guide in the other language. Explicit URLs are authoritative: there is no forced language redirect.
- Appearance supports System, Light, and Dark. The selection is stored locally as `fluxgate-theme`; System follows the OS. If local storage is unavailable, the current page still supports theme changes.
- The supplied paper illustration keeps its original white background in dark mode. It plays automatically unless reduced motion is enabled, with a visible Stop control and text alternative. Reduced-motion users start with the static poster and can choose to play. Its embedded performance numbers are not independently verified guarantees.
