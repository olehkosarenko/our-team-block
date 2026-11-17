import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

export default function Edit() {
	// The team members are rendered straight into the list, as on the site,
	// so the honeycomb layout applies to them in the editor too.
	const innerBlocksProps = useInnerBlocksProps(
		useBlockProps( { className: 'our-team__list' } ),
		{
			allowedBlocks: [ 'wp-app/our-team-block-team-member' ],
			orientation: 'horizontal',
		}
	);

	return <div { ...innerBlocksProps } />;
}
