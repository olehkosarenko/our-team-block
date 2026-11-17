# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Block markup tests with Vitest (`npm test`): the markup each block saves is checked against the WordPress block parser and validator in GitHub Actions.
- Wide and full alignment for the block.

### Changed

- The plugin header has an `Update URI`, so WordPress no longer looks for updates of this plugin on WordPress.org, where a plugin with the same slug could offer an unrelated update.

### Fixed

- The team list had a fixed width of 525px from 992px of screen width, so in a narrow content column, such as the one of Twenty Twenty-Five, it overflowed its column. The layout now follows the width of the block and of the team list (CSS container queries) instead of the screen, and the hexagons shrink to fit.
- When the block was narrower than 315px, the team list was wider than the block and caused horizontal scrolling on small phones, for example 320px wide.
- From 992px the name and position were hidden until hover, so they could not be seen on touch screens or for members without a link, which also showed a pointer cursor. They are now hidden only for linked members with a photo on devices with a mouse.

## [1.0.0] - 2026-11-16

### Breaking changes

- The saved markup of the Team Member and Text blocks changed, and there are no block deprecations. Blocks saved with 0.1.0 show "This block contains unexpected or invalid content" in the editor when a team member has a Media Library photo (saved with an `id` attribute), has no link or has no photo, or when a Text block has an empty title or description. Use "Attempt recovery" to update them.
- The plugin now requires WordPress 6.6 and PHP 7.4.
- The `build/` directory is no longer committed. Install the plugin from the release zip, or run `npm ci && npm run build` after cloning.

### Added

- A **Photo** panel in the block sidebar to choose, replace and remove the photo and set its alt text, and **Add photo** / **Replace** / **Remove** in the block toolbar.
- **Name** and **Position** fields in the block sidebar, next to editing them on the card.
- A **Link** panel in the block sidebar for the team member link.
- A grey placeholder card for team members without a photo, with the name and position always visible.
- A focus ring on linked team member cards and the name and position shown on keyboard focus.
- Support for reduced motion: hover and focus transitions are turned off.
- A frame around the selected team member in the editor.
- block.json files for the Column, Text, Team List and Team Member blocks, registered in PHP.
- An admin notice when the block is not built.
- PHP coding standards checks (WordPress, WordPress-VIP-Go, PHP compatibility) and frontend lint and build in GitHub Actions.
- A release workflow that builds `our-team-block.zip` for version tags.
- readme.txt and this changelog.

### Changed

- The frontend is built with `@wordpress/scripts` 37 on Node.js 26, and the WordPress packages the block imports are declared as dependencies.
- A team member is saved as a link only when it has a URL, and the photo only when it is set; the image ID is saved as a `wp-image-{id}` class.
- The title and the description of the Text block are saved only when they are set.
- The link is edited in the block sidebar instead of a text field on the card.
- The block styles apply in the same way on the site and in the editor.
- The name and position sit above the next row of cards, and long names are cut after two lines.
- Team members are laid out in the editor like on the site.
- The block, package and child block versions are aligned.
- The license file contains the GPL-2.0 text, matching the plugin header.

### Fixed

- A removed Team List could not be inserted again into a column.
- The columns class in the editor did not match the one on the site.
- A team member with only a photo and a position was lost on save.
- The name and position were hidden from screen readers on wide screens.
- The prop types of the Text block overwrote the ones of its edit component.

### Removed

- The unused `columns` attribute of the Column block.
- The team list `minItems` and `maxItems` settings, which had no effect.
- Sass and sass-loader as direct dependencies, and an unused SCSS variable.

## [0.1.0] - 2025-02-17

- Initial release.

[1.0.0]: https://github.com/olehkosarenko/our-team-block/releases/tag/v1.0.0
[0.1.0]: https://github.com/olehkosarenko/our-team-block/tree/8fcc66d
