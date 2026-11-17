import { describe, expect, it } from 'vitest';
import { getPhotoUrl } from '../image';

describe( 'getPhotoUrl', () => {
	it( 'uses the large size', () => {
		expect(
			getPhotoUrl( {
				url: 'https://example.com/ann.jpg',
				sizes: {
					large: { url: 'https://example.com/ann-1024x1024.jpg' },
					full: { url: 'https://example.com/ann.jpg' },
				},
			} )
		).toBe( 'https://example.com/ann-1024x1024.jpg' );
	} );

	it( 'falls back to the full size when there is no large size', () => {
		expect(
			getPhotoUrl( {
				url: 'https://example.com/small.jpg',
				sizes: { full: { url: 'https://example.com/small-full.jpg' } },
			} )
		).toBe( 'https://example.com/small-full.jpg' );
	} );

	it( 'keeps the URL of media without sizes', () => {
		expect( getPhotoUrl( { url: 'blob:https://example.com/1' } ) ).toBe(
			'blob:https://example.com/1'
		);
	} );

	it( 'returns undefined without media', () => {
		expect( getPhotoUrl( undefined ) ).toBeUndefined();
	} );
} );
