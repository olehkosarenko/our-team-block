<?php
/**
 * Plugin Name:       Our Team Block
 * Plugin URI:        https://github.com/olehkosarenko/our-team-block
 * Description:       Our Team Block is a custom Gutenberg block created for adding team members to a page.
 * Requires at least: 6.6
 * Requires PHP:      7.4
 * Version:           0.1.0
 * Author:            Oleh Kosarenko
 * Author URI:        https://github.com/olehkosarenko
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
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
