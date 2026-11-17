# Our Team Block

[![Lint](https://github.com/olehkosarenko/our-team-block/actions/workflows/lint.yml/badge.svg)](https://github.com/olehkosarenko/our-team-block/actions/workflows/lint.yml)

**Our Team Block** is a WordPress plugin that adds an **Our Team** block to the block editor. The block shows a title, a short description and a list of team members, each with a photo, a name, a position and a link.

## Block structure

**Our Team** (`wp-app/our-team-block`) is the block you insert. It is built from nested blocks that can only be used inside it:

- **Columns** (`wp-app/our-team-block-column`) - a column of the layout
  - **Text** (`wp-app/our-team-block-text`) - a title (`h2`) and a description
  - **Team List** (`wp-app/our-team-block-team-list`) - the list of team members
    - **Team Member** (`wp-app/our-team-block-team-member`) - a photo from the Media Library or a URL, a name, a position and a link

A new block starts with two columns: the first one holds a Text block, the second one a Team List with four team members. The **Columns** setting in the block sidebar switches the layout on the site between one and two columns.

To edit a team member, select it. The photo is chosen in the **Photo** panel of the block sidebar or with **Add photo** / **Replace** in the block toolbar. The name and position are typed on the card or in the sidebar, and the link is set in the **Link** panel.

On the site, team members are shown as hexagons. From the `lg` breakpoint (992px) the photos are grayscale, and the name and position appear on hover and on keyboard focus. A member without a photo is shown as a grey card with the name and position always visible.

## Requirements

- WordPress 6.6 or later
- PHP 7.4 or later

To install from source you also need:

- Node.js 26 LTS (see `.nvmrc`) and npm, to build the block
- [Composer](https://getcomposer.org/), only for the PHP coding standards checks

## Installation

### From a release

1. Download `our-team-block.zip` from the [Releases](https://github.com/olehkosarenko/our-team-block/releases) page.
2. In WordPress, go to **Plugins > Add New > Upload Plugin**, choose the zip and install it.
3. Activate **Our Team Block** in **Plugins**.

The zip already contains the built block.

### From source

The `build/` directory is not committed, so build the block after cloning. Until it is built, the block is not registered and administrators see a notice with the command to run.

```sh
cd wp-content/plugins
git clone https://github.com/olehkosarenko/our-team-block.git
cd our-team-block
npm ci
npm run build
```

Then activate **Our Team Block** in **Plugins** and add the **Our Team** block to a post or page. It is in the **Widgets** category of the block inserter.

## Development

### Block

The block is built with [`@wordpress/scripts`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/). The source is in `src/`, the build goes to `build/`. React and the `@wordpress/*` packages come from WordPress, they are not bundled.

Run `nvm use` to switch to the Node.js version from `.nvmrc`.

```sh
nvm use
npm ci
npm run build      # production build
npm start          # rebuild on every change
npm run lint:js    # WordPress JavaScript Coding Standards
npm run lint:css   # WordPress CSS Coding Standards
npm run format     # format the code with the WordPress Prettier config
```

The styles are written in SCSS: `src/scss/style.scss` is loaded on the site and in the editor, `src/scss/editor.scss` only in the editor.

### PHP coding standards

The PHP code follows the [WordPress Coding Standards](https://developer.wordpress.org/coding-standards/wordpress-coding-standards/php/), the WordPress VIP coding standards (WordPress-VIP-Go) and is checked for PHP version compatibility. The rules are in `phpcs.xml.dist`.

```sh
composer install
composer lint       # check the code with PHPCS
composer lint:fix   # fix what can be fixed automatically with PHPCBF
```

GitHub Actions runs PHPCS, the linters and the build on every pull request and on pushes to `main`.

### Releases

Every pull request also builds the plugin zip; it is attached to the workflow run as the `our-team-block-zip` artifact.

To publish a release, merge the version bump to `main` and push a tag such as `v1.0.0` that points to a commit on `main`. The Release workflow then checks the tag, runs all the checks, builds `our-team-block.zip` and publishes it as a GitHub release, with the notes from [CHANGELOG.md](CHANGELOG.md). It stops before publishing if the tagged commit is not on `main`, the tag does not match the version in `our-team-block.php`, `readme.txt`, `package.json` and the `block.json` files, or the changelog has no section for the version.

## License

[GPL-2.0-or-later](LICENSE)
