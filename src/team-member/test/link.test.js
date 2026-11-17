import { describe, expect, it } from 'vitest';
import { normalizeLink } from '../link';

describe( 'normalizeLink', () => {
	it.each( [
		[ 'example.com', 'https://example.com' ],
		[ 'www.example.com/team', 'https://www.example.com/team' ],
		[ 'example.com:8080/team', 'https://example.com:8080/team' ],
		[ '//example.com', '//example.com' ],
		[ '  https://example.com/ann  ', 'https://example.com/ann' ],
		[ 'http://example.com', 'http://example.com' ],
		[ 'HTTPS://EXAMPLE.COM', 'HTTPS://EXAMPLE.COM' ],
		[ 'mailto:ann@example.com', 'mailto:ann@example.com' ],
		[ 'tel:+48123456789', 'tel:+48123456789' ],
		[ 'tel:123456789', 'tel:123456789' ],
		[ 'tel:112', 'tel:112' ],
		[ 'mailto:123', 'mailto:123' ],
		[ 'localhost:3000', 'https://localhost:3000' ],
		[ 'example.com:8080?team=1', 'https://example.com:8080?team=1' ],
		[ '/team/ann', '/team/ann' ],
		[ '#ann', '#ann' ],
		[ '?member=ann', '?member=ann' ],
	] )( 'saves %s as %s', ( value, url ) => {
		expect( normalizeLink( value ) ).toEqual( { url, error: false } );
	} );

	it.each( [
		'javascript:alert(1)',
		'javascript:1',
		'data:1',
		'vbscript:1',
		' JavaScript:alert(1)',
		'data:text/html;base64,PHNjcmlwdD4=',
		'vbscript:msgbox(1)',
		'ftp://example.com',
		'example .com',
	] )( 'rejects %s', ( value ) => {
		expect( normalizeLink( value ) ).toEqual( {
			url: undefined,
			error: true,
		} );
	} );

	it( 'saves no link for an empty value', () => {
		expect( normalizeLink( '   ' ) ).toEqual( {
			url: undefined,
			error: false,
		} );
	} );
} );
