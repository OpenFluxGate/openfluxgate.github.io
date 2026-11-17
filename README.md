# OpenFluxGate documentation

Rebuilt documentation portal. This replaces the inherited product presentation; it is not a FluxGate software release.

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

Source versions, published artifacts and production deployments are distinct. The 0.5.0 track remains unreleased pending validation. Spring Boot 2 support is planned and being validated, not certified safe. Do not turn an example or passing unit test into a production-safety claim. Update release status with primary-source evidence.

## Attribution

This repository began from Dyte documentation. Its Apache-2.0 LICENSE, including original attribution, is preserved unchanged. Existing legacy contributions are retained, not presented as FluxGate functionality. New portal files are the OpenFluxGate documentation rebuild. See `PORTAL-MIGRATION.md`.
