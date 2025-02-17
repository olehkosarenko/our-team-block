import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from './edit';
import Save from './save';

registerBlockType('wp-app/our-team-block-team-member', {
	title: __('Team Member', 'our-team-block'),
	description: __(
		'Our Team Member: Image, Name and Position',
		'our-team-block'
	),
	icon: 'admin-users',
	parent: ['wp-app/our-team-block-team-list'],
	supports: {
		html: false,
		reusable: false,
	},
	attributes: {
		url: {
			type: 'string',
			source: 'attribute',
			attribute: 'href',
			selector: '.our-team__url',
		},
		name: {
			type: 'string',
			source: 'html',
			selector: '.our-team__name',
		},
		position: {
			type: 'string',
			source: 'html',
			selector: '.our-team__position',
		},
		imageId: {
			type: 'number',
		},
		imageUrl: {
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'src',
		},
		imageAlt: {
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'alt',
			default: '',
		},
	},
	edit: Edit,
	save: Save,
});
