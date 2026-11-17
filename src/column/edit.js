import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

export default function Edit() {
	// The column carries the same class as on the site, and its blocks are
	// rendered straight into it.
	const innerBlocksProps = useInnerBlocksProps(
		useBlockProps( { className: 'our-team__col' } ),
		{
			allowedBlocks: [
				'wp-app/our-team-block-text',
				'wp-app/our-team-block-team-list',
			],
		}
	);

	return <div { ...innerBlocksProps } />;
}
