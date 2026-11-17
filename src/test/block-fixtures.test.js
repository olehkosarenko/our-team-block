/**
 * Checks that the markup saved by the blocks still validates.
 *
 * Each fixture is the markup a block saves. If save() changes, posts that already use the block
 * would show "This block contains unexpected or invalid content" in the editor; these tests fail
 * first.
 */
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { afterEach, beforeAll, describe, expect, it, vi } from 'vitest';
import { parse, serialize } from '@wordpress/blocks';
import registerBlocks from './register';

const fixturesDir = join( __dirname, 'fixtures' );
const fixtures = readdirSync( fixturesDir )
	.filter( ( file ) => file.endsWith( '.html' ) )
	.sort();

function readFixture( file ) {
	return readFileSync( join( fixturesDir, file ), 'utf8' ).replace(
		/\n$/,
		''
	);
}

function allBlocks( blocks ) {
	return blocks.flatMap( ( block ) => [
		block,
		...allBlocks( block.innerBlocks ),
	] );
}

function spyOnConsole() {
	return [ 'error', 'warn', 'info' ].map( ( method ) =>
		vi.spyOn( console, method ).mockImplementation( () => {} )
	);
}

beforeAll( () => {
	registerBlocks();
} );

afterEach( () => {
	vi.restoreAllMocks();
} );

describe( 'saved markup', () => {
	it( 'has fixtures', () => {
		expect( fixtures.length ).toBeGreaterThan( 0 );
	} );

	it.each( fixtures )( '%s is valid and saves the same markup', ( file ) => {
		const consoleSpies = spyOnConsole();
		const html = readFixture( file );

		const parsed = parse( html );
		const blocks = allBlocks( parsed );

		expect( blocks.length ).toBeGreaterThan( 0 );
		for ( const block of blocks ) {
			expect( block.name ).toMatch( /^wp-app\/our-team-block/ );
			expect( block.isValid, `${ block.name } is invalid` ).toBe( true );
		}
		expect( serialize( parsed ) ).toBe( html );
		for ( const spy of consoleSpies ) {
			expect( spy ).not.toHaveBeenCalled();
		}
	} );

	it( 'marks markup that save() no longer produces as invalid', () => {
		spyOnConsole();
		const html = readFixture( 'team-member-link-and-photo.html' ).replace(
			'our-team__name',
			'our-team__full-name'
		);

		const [ block ] = parse( html );

		expect( block.isValid ).toBe( false );
	} );
} );
