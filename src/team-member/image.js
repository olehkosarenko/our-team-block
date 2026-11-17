/**
 * Get the URL of the image size to save for a team member photo
 *
 * A card is at most 210px wide, so the full size upload (up to 2560px) is
 * more than needed. The large size covers high density screens. Media without
 * generated sizes, for example a file that is still uploading, keeps its URL.
 *
 * @param {Object} media Media object from the Media Library.
 *
 * @return {string|undefined} Image URL.
 */
export function getPhotoUrl( media ) {
	const sizes = media?.sizes || {};

	return sizes.large?.url || sizes.full?.url || media?.url;
}
