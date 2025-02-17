import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from './edit';
import Save from './save';

registerBlockType('wp-app/our-team-block-team-list', {
	title: __('Team List', 'our-team-block'),
	description: __(
		'Our Team List: Adds a team member to the team list.',
		'our-team-block'
	),
	icon: 'admin-users',
	parent: ['wp-app/our-team-block-column'],
	supports: {
		html: false,
		reusable: false,
	},
	edit: Edit,
	save: Save,
});
