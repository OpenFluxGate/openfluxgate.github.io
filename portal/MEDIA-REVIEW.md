# Owner-provided technical note and prompt guide

## Source and conversion

The owner supplied `fluxgate-paper.mp4` and requested a GIF on the introduction page. The 12-second, 1080×1350, 30 fps MP4 was inspected at multiple timestamps before conversion. No original source claims were silently edited.

Output: `fluxgate-paper.gif`, 720×900, 10 fps, 120 frames, 12 seconds, 625,345 bytes; static WebP poster 39,344 bytes. Palette optimized to 96 colors. GIF conversion used FFmpeg; frame count/duration/dimensions were independently checked with Pillow. The original MP4 is not added to this repository.

Official Remotion best-practices v4.0.545 and multimedia guidance were read. This task converts an existing user video rather than creating or rendering a new Remotion composition. No Remotion runtime, player, paid service or unexecuted Remotion render is claimed.

## Playback and accessibility

- Static poster by default; GIF requested only after explicit Play. No autoplay.
- Play/Stop toggle has aria-controls and aria-pressed; state is announced through role=status.
- Reduced-motion preference starts static; changing to reduced motion stops playback. A user may explicitly request playback.
- Text explanation describes the diagram and distinguishes Lua `KEYS[1]` from the Redis `KEYS` command.
- The original media is English; a Korean text explanation is supplied, not a claim of a verbatim transcript or synchronized captions.
- Fixed source dimensions prevent layout shifts; CSS scales within the content column. At small screen sizes the paper's fine print is not a substitute for the text description.

## Evidence boundaries

The provided graphic includes 50K TPS and p99 233μs. The adjacent visible caveat states that conditions, version and workload were not revalidated here and these are not current-release guarantees or production SLAs. The simplified Lua listing is explanatory, not a complete deployable implementation.

The prompt guide is for a coding assistant to inspect a real consumer repository. It is not a new native FluxGate natural-language configuration API. It requires version/source checks, secret hygiene, isolated tests, explicit deployment authorization, and separates compatibility from security results. Existing 0.3.7 consumers upgrade only the Redis module to 0.3.8; 0.5.0 remains unreleased.

## Validation

- 11 generated pages; 8/8 Node structural, internal-link, search, release-boundary and media/prompt checks passed.
- Managed preview via supported cloud browser: home/quick-guide desktop screenshots inspected; GIF loaded at 720×900; repeated Play/Stop and text-description expand verified; prompt Copy showed success feedback. Clipboard contents were not read independently.
- Mobile CSS and reduced-motion handling are implemented; narrow-viewport, physical-device and live OS reduced-motion preference switching were not verified in this pass. No mobile-perfect or WCAG-certification claim.
- No merge, production deployment, or Pages permission/source change is part of this branch.
