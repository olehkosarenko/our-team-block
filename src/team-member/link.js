// Schemes a team member link may use. Anything else, for example javascript:
// or data:, is not saved.
const ALLOWED_SCHEMES = [ 'http:', 'https:', 'mailto:', 'tel:' ];

// Schemes that run code. They are rejected before anything else, so that for
// example javascript:1 is not mistaken for a host with a port.
const DENIED_SCHEMES = [ 'javascript:', 'data:', 'vbscript:' ];

// A host with a port and no scheme, such as localhost:3000 or example.com:8080/team.
const HOST_WITH_PORT = /^[^\s:/?#]+:\d{1,5}([/?#]|$)/;

/**
 * Normalize a team member link typed in the sidebar
 *
 * An address without a scheme, such as example.com, would be saved as a link
 * relative to the current page, so https:// is added in front of it. Links to
 * a path, an anchor or a query on the same site, and links starting with //,
 * are kept as they are.
 *
 * @param {string} value Link as typed.
 *
 * @return {{url: (string|undefined), error: boolean}} The link to save, and
 *         whether the typed link was rejected.
 */
export function normalizeLink( value ) {
	const link = ( value || '' ).trim();

	if ( '' === link ) {
		return { url: undefined, error: false };
	}

	if ( /^[/?#]/.test( link ) ) {
		return { url: link, error: false };
	}

	const match = link.match( /^([a-z][a-z0-9+.-]*:)/i );
	const scheme = match ? match[ 1 ].toLowerCase() : '';

	if ( DENIED_SCHEMES.includes( scheme ) ) {
		return { url: undefined, error: true };
	}

	if ( ALLOWED_SCHEMES.includes( scheme ) ) {
		return { url: link, error: false };
	}

	if ( HOST_WITH_PORT.test( link ) ) {
		return { url: `https://${ link }`, error: false };
	}

	if ( scheme || /\s/.test( link ) ) {
		return { url: undefined, error: true };
	}

	return { url: `https://${ link }`, error: false };
}
