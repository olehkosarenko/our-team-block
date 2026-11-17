<?php
/**
 * Plugin Name:       Our Team Block
 * Plugin URI:        https://github.com/olehkosarenko/our-team-block
 * Description:       Our Team Block is a custom Gutenberg block created for adding team members to a page.
 * Requires at least: 6.6
 * Requires PHP:      7.4
 * Version:           1.0.0
 * Author:            Oleh Kosarenko
 * Author URI:        https://github.com/olehkosarenko
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Update URI:        https://github.com/olehkosarenko/our-team-block
 * Text Domain:       our-team-block
 *
 * @package WpApp
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action( 'init', 'wp_app_our_team_block_init' );

/**
 * Register the Our Team block and its child blocks from their block.json files in the build directory
 *
 * When the block has not been built yet, show administrators how to build it instead.
 *
 * @return void
 */
function wp_app_our_team_block_init() {
	if ( ! is_readable( __DIR__ . '/build/block.json' ) ) {
		add_action( 'admin_notices', 'wp_app_our_team_block_build_notice' );

		return;
	}

	register_block_type( __DIR__ . '/build' );

	foreach ( [ 'column', 'text', 'team-list', 'team-member' ] as $child ) {
		register_block_type( __DIR__ . '/build/' . $child );
	}
}

add_filter( 'render_block_wp-app/our-team-block-team-member', 'wp_app_our_team_block_photo_sizes' );

/**
 * Tell the browser how wide a team member photo is shown
 *
 * WordPress adds srcset and sizes to photos from the Media Library. Without a
 * sizes attribute it assumes the photo can be as wide as the screen, so the
 * browser loads a far larger file than the card needs. A card is at most 210px
 * wide. WordPress keeps an existing sizes attribute and only adds srcset; for
 * lazy loaded images it puts "auto" in front, so the browser can use the real
 * width. Only photos with a wp-image-<id> class get srcset from WordPress, so
 * other photos are left alone. The saved block markup does not change.
 *
 * @param string $block_content Rendered team member block.
 *
 * @return string
 */
function wp_app_our_team_block_photo_sizes( $block_content ) {
	if ( ! is_string( $block_content ) || false === strpos( $block_content, '<img' ) ) {
		return $block_content;
	}

	$tags = new WP_HTML_Tag_Processor( $block_content );
	if ( ! $tags->next_tag( [ 'tag_name' => 'img' ] ) || null !== $tags->get_attribute( 'sizes' ) ) {
		return $block_content;
	}

	$class = $tags->get_attribute( 'class' );
	if ( ! is_string( $class ) || ! preg_match( '/(^|\s)wp-image-\d+(\s|$)/', $class ) ) {
		return $block_content;
	}

	$tags->set_attribute( 'sizes', '210px' );

	return $tags->get_updated_html();
}

/**
 * Print an admin notice that the block has to be built before it can be used
 *
 * @return void
 */
function wp_app_our_team_block_build_notice() {
	if ( ! current_user_can( 'activate_plugins' ) ) {
		return;
	}

	printf(
		'<div class="notice notice-warning"><p>%1$s <code>%2$s</code></p></div>',
		esc_html__( 'The Our Team block is not available because it is not built. Run this command in the plugin folder:', 'our-team-block' ),
		esc_html( 'npm ci && npm run build' )
	);
}
