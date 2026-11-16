=== Our Team Block ===
Contributors: olehkosarenko
Tags: team, block, gutenberg, members, staff
Requires at least: 6.6
Tested up to: 7.1
Requires PHP: 7.4
Stable tag: 0.1.0
License: GPL-2.0-or-later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Adds an Our Team block that shows a title, a description and team members with a photo, a name, a position and a link.

== Description ==

Our Team Block adds the **Our Team** block to the block editor. A new block starts with two columns: the first one holds a title and a description, the second one a list of four team members.

* Each team member has a photo from the Media Library or a URL, a name, a position and an optional link.
* The **Columns** setting in the block sidebar switches the layout on the site between one and two columns.
* To edit a team member, select it. The photo is chosen in the **Photo** panel of the block sidebar or with **Add photo** / **Replace** in the block toolbar. The name and position are typed on the card or in the sidebar, and the link is set in the **Link** panel.
* On the site, team members are shown as hexagons. From 992px wide the photos are grayscale, and the name and position appear on hover and on keyboard focus. A member without a photo is shown as a grey card with the name and position always visible.

== Installation ==

1. Download `our-team-block.zip` from the GitHub releases page.
2. In WordPress, go to **Plugins > Add New > Upload Plugin**, choose the zip and click **Install Now**.
3. Activate **Our Team Block**.
4. Add the **Our Team** block to a post or page. It is in the **Widgets** category of the block inserter.

To install from source, clone the repository into `wp-content/plugins` and run `npm ci && npm run build` in the plugin folder.

== Frequently Asked Questions ==

= Why does the admin show a notice that the block is not built? =

The plugin was installed from source without building it. Run `npm ci && npm run build` in the plugin folder, or install the zip from the releases page, which already contains the built block.

= Can a team member have no link or no photo? =

Yes. Without a link the card is not clickable, and without a photo it is shown as a grey card with the name and position.

== Changelog ==

= 1.0.0 =
* Breaking: the saved markup of team members and of the title and description changed, and there are no block deprecations. Team members with a Media Library photo, without a link or without a photo, and titles or descriptions left empty, saved with 0.1.0, show "This block contains unexpected or invalid content"; use "Attempt recovery" in the editor.
* Breaking: WordPress 6.6 and PHP 7.4 are now the minimum supported versions.
* Photo, name, position and link of a team member can be edited in the block sidebar and toolbar.
* Team members without a link or a photo are saved and shown correctly.
* Keyboard focus ring, focus and hover reveal of the name, and support for reduced motion.
* The child blocks are described in block.json files and registered in PHP.

The full list of changes is in [CHANGELOG.md](https://github.com/olehkosarenko/our-team-block/blob/main/CHANGELOG.md).

= 0.1.0 =
* Initial release.

== Upgrade Notice ==

= 1.0.0 =
The saved markup of the block changed without block deprecations. Open pages that use the block in the editor and use "Attempt recovery" on blocks that show an invalid content warning.
