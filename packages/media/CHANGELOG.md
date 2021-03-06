# v2.0.0

The media package contains some helper components to help create responsive
media like images and videos and optionally enforcing an aspect ratio.

## New Behavior and Features

- Enforcing an aspect ratio now works by providing a `height` and `width`
  instead of using the `forceAspect` and `aspectRatio` props.
- Added new positioning options for the `MediaOverlay` component

## Breaking Changes

- the `Media` component was renamed to `MediaContainer` to hopefully describe
  the purpose of the component better
- the `forceAspect`, `aspectRatio`, and `component` props are no longer
  available

### New SCSS Variables, Functions, and Mixins

- `$rmd-media-default-aspect-ratio: percentage(16 / 9) !default` - the default
  aspect ratio to use for media in the `MediaContainer`
- `$rmd-media-overlay-padding: 1rem !default` - the padding to apply to the
  `MediaOverlay` component
- `$rmd-media-overlay-horizontal-width: 30% !default` - the width for the
  overlay when the position is set to `left`, `center`, or `right`
- `$rmd-media-overlay-positions: (top right bottom left middle center absolute-center) !default` -
  the available positions for the media overlay
- `@mixin rmd-media-aspect-ratio-contianer` - a new mixin that can be used to
  update any element to force a specific aspect ratio for media items
- `@mixin rmd-media-forced-aspect-ratio-item` - a new mixin that should be used
  alongside the `rmd-media-aspect-ratio-container` mixin to force a specific
  aspect ratio for a media item

### Renamed SCSS Variables, Functions, and Mixins

- `$md-media-overlay-color` was renamed to `$rmd-media-overlay-background-color`
- `$md-media-aspect-ratios` was renamed to `$rmd-media-default-aspect-ratios`
  and changed the default value from a list of strings to a Map
- `$md-media-embedded-selectors` was renamed to `$rmd-media-selectors` and
  changed the default value to `(img '>svg' iframe video embed object)`
- `@mixin react-md-media-aspect-ratio` was renamed to
  `@mixin rmd-media-aspect-ratio` and changed the behavior to no longer generate
  a class name. It should now be used within a selector

### Removed SCSS Variables and Mixins

- removed `$md-media-include-overlay` since overlays are always included
- removed `$md-media-include-embedded` since this functionality was removed and
  unneeded
- removed the `%md-media-embedded` placeholder
- removed `@mixin react-md-media-embedded`
