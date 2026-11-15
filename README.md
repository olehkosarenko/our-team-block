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

On the site, team members are shown as hexagons. From the `lg` breakpoint (992px) the photos are grayscale, and the name and position appear on hover.

## Requirements

- WordPress 6.6 or later
- PHP 7.4 or later

To install from source you also need:

- Node.js 26 LTS (see `.nvmrc`) and npm, to build the block
- [Composer](https://getcomposer.org/), only for the PHP coding standards checks

## Installation

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

## License

[GPL-2.0-or-later](LICENSE)
