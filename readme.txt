=== Our Team Block ===
Contributors: olehkosarenko
Tags: team, block, gutenberg, members, staff
Requires at least: 6.6
Tested up to: 7.1
Requires PHP: 7.4
Stable tag: 1.1.0
License: GPL-2.0-or-later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Adds an Our Team block that shows a title, a description and team members with a photo, a name, a position and a link.

== Description ==

Our Team Block adds the **Our Team** block to the block editor. A new block starts with two columns: the first one holds a title and a description, the second one a list of four team members.

* Each team member has a photo from the Media Library or a URL, a name, a position and an optional link.
* The **Columns** setting in the block sidebar switches the layout between one and two columns, on the site and in the editor alike.
* To edit a team member, select it. The photo is chosen in the **Photo** panel of the block sidebar or with **Add photo** / **Replace** in the block toolbar. The name and position are typed on the card or in the sidebar, and the link is set in the **Link** panel. A link like example.com gets https:// in front, and only http, https, mailto and tel links are accepted.
* On the site, team members are shown as hexagons that adapt to the width of the block, with wide and full alignment. With a mouse, linked members are grayscale and show the name and position on hover and on keyboard focus; on touch screens, and for members without a link or a photo, the name and position are always visible.

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

= 1.1.0 =
* The layout follows the width of the block instead of the screen: no overflow in narrow content columns and no horizontal scrolling on small phones. With Columns set to 2, the columns sit side by side from a block width of 640px.
* Wide and full alignment for the block, and the editor now shows the same layout as the site.
* Name and position are always visible on touch screens and for team members without a link.
* Photos from the Media Library are saved in the large size, and the browser loads a size that fits the card.
* A link without a scheme gets https:// in front, and links such as javascript: are not saved.
* A preview with demo team members in the block inserter, clearer block descriptions, and a warning when a linked team member has no text for screen readers.
* Block markup tests in GitHub Actions, and an Update URI header.

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

= 1.1.0 =
Fixes the layout in narrow content columns and on small phones, and improves photos, links and the editor. The saved markup of the block does not change.

= 1.0.0 =
The saved markup of the block changed without block deprecations. Open pages that use the block in the editor and use "Attempt recovery" on blocks that show an invalid content warning.
