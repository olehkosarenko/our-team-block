/**
 * Checks that the inserter preview of the block is built from valid blocks.
 */
import { beforeAll, expect, it } from 'vitest';
import { createBlock, parse, serialize } from '@wordpress/blocks';
import metadata from '../block.json';
import registerBlocks from './register';

function fromExample( { name, attributes = {}, innerBlocks = [] } ) {
	return createBlock( name, attributes, innerBlocks.map( fromExample ) );
}

beforeAll( () => {
	registerBlocks();
} );

it( 'the inserter preview saves valid markup', () => {
	const html = serialize( [
		fromExample( { name: metadata.name, ...metadata.example } ),
	] );
	const blocks = parse( html );
	const all = ( list ) =>
		list.flatMap( ( block ) => [ block, ...all( block.innerBlocks ) ] );

	expect( all( blocks ) ).toHaveLength( 9 );
	for ( const block of all( blocks ) ) {
		expect( block.isValid, `${ block.name } is invalid` ).toBe( true );
	}
	expect( html ).toContain( 'Ann Lee' );
} );
