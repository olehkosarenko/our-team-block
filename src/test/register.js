/**
 * Registers the blocks with their real block.json and save(), without the editor UI.
 */
import { getBlockType, registerBlockType } from '@wordpress/blocks';

import parentMetadata from '../block.json';
import ParentSave from '../save';
import columnMetadata from '../column/block.json';
import ColumnSave from '../column/save';
import teamListMetadata from '../team-list/block.json';
import TeamListSave from '../team-list/save';
import teamMemberMetadata from '../team-member/block.json';
import TeamMemberSave from '../team-member/save';
import textMetadata from '../text/block.json';
import TextSave from '../text/save';

const blocks = [
	[ parentMetadata, ParentSave ],
	[ columnMetadata, ColumnSave ],
	[ teamListMetadata, TeamListSave ],
	[ teamMemberMetadata, TeamMemberSave ],
	[ textMetadata, TextSave ],
];

export default function registerBlocks() {
	for ( const [ metadata, save ] of blocks ) {
		if ( ! getBlockType( metadata.name ) ) {
			registerBlockType( metadata, { edit: () => null, save } );
		}
	}
}
