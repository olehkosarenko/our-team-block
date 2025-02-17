import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from './edit';
import Save from './save';

registerBlockType('wp-app/our-team-block-text', {
	title: __('Text', 'our-team-block'),
	description: __('Our Team Text: Title and Description', 'our-team-block'),
	icon: 'text',
	parent: ['wp-app/our-team-block-column'],
	supports: {
		html: false,
		reusable: false,
	},
	attributes: {
		title: {
			type: 'string',
			source: 'html',
			selector: 'h2',
		},
		description: {
			type: 'string',
			source: 'html',
			selector: 'p',
		},
	},
	edit: Edit,
	save: Save,
});
