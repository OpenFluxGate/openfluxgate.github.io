# Portal rebuild

Changed files: root package manifests and README now select the new dependency-free static portal. The inherited Docusaurus documents and configuration remain in Git, excluded from output. LICENSE is unchanged. No old assets, SDKs, tracking, product badges, external sign-up links, AI widgets or search credentials are copied into the build.

This isolated implementation avoids running the inherited dependency graph. It does not delete unrelated work. Docusaurus migration is not necessary for this small initial information architecture; Markdown/framework expansion can be reviewed later without changing stable URLs.

Review before publication: verify release status, complete runnable integration recipes against the chosen release, visually inspect desktop and 360/390/768px layouts, check keyboard navigation, search, menu, code-copy and browser Back. CI structural checks are not visual or WCAG certification. Main deploy remains unchanged and must not be triggered without approval.
