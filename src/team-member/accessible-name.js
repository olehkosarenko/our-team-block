/**
 * Check whether a linked team member card has text that names the link
 *
 * Screen readers announce a link by its text: the name, the position, or the
 * alt text of the photo. A card without any of them is announced only as
 * "link".
 *
 * @param {Object} attributes          Team member attributes.
 * @param {string} attributes.name     Name, as HTML.
 * @param {string} attributes.position Position, as HTML.
 * @param {string} attributes.imageUrl Photo URL.
 * @param {string} attributes.imageAlt Alt text of the photo.
 *
 * @return {boolean} Whether the card has a text for the link.
 */
export function hasAccessibleName( { name, position, imageUrl, imageAlt } ) {
	const hasText = ( html ) =>
		( html || '' ).replace( /<[^>]*>/g, '' ).trim() !== '';

	return (
		hasText( name ) ||
		hasText( position ) ||
		( !! imageUrl && hasText( imageAlt ) )
	);
}
