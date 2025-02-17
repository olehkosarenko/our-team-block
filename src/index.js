import { registerBlockType } from '@wordpress/blocks';
import './team-member';
import './team-list';
import './text';
import './column';
import Edit from './edit';
import Save from './save';
import './scss/style.scss';

registerBlockType('wp-app/our-team-block', {
	edit: Edit,
	save: Save,
});
