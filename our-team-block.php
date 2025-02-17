<?php
/**
 * Plugin Name:       Our Team Block
 * Description:       Our Team Block is a custom Gutenberg block created for adding team members to a page.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Oleh Kosarenko
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
function wp_app_our_team_block_init() {
	register_block_type( __DIR__ . '/build' );
}
