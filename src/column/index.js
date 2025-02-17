import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from './edit';
import Save from './save';

registerBlockType('wp-app/our-team-block-column', {
	title: __('Columns', 'our-team-block'),
	description: __('Our Team Column', 'our-team-block'),
	icon: 'grid-view',
	parent: ['wp-app/our-team-block'],
	supports: {
		html: false,
		reusable: false,
	},
	attributes: {
		columns: {
			type: 'number',
			default: 2,
		},
	},
	edit: Edit,
	save: Save,
});
