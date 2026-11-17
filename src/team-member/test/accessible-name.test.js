import { describe, expect, it } from 'vitest';
import { hasAccessibleName } from '../accessible-name';

describe( 'hasAccessibleName', () => {
	it.each( [
		[ 'a name', { name: 'Ann Lee' } ],
		[ 'a position', { position: 'CEO' } ],
		[ 'a formatted name', { name: '<strong>Ann</strong>' } ],
		[ 'a photo with alt text', { imageUrl: 'ann.jpg', imageAlt: 'Ann' } ],
	] )( 'is true with %s', ( label, attributes ) => {
		expect( hasAccessibleName( attributes ) ).toBe( true );
	} );

	it.each( [
		[ 'nothing', {} ],
		[ 'only spaces', { name: '  ', position: ' ' } ],
		[ 'empty markup', { name: '<br>' } ],
		[ 'a photo without alt text', { imageUrl: 'ann.jpg', imageAlt: '' } ],
		[ 'alt text without a photo', { imageAlt: 'Ann' } ],
	] )( 'is false with %s', ( label, attributes ) => {
		expect( hasAccessibleName( attributes ) ).toBe( false );
	} );
} );
