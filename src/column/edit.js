import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function Edit() {
	return (
		<div {...useBlockProps()}>
			<InnerBlocks allowedBlocks={['wp-app/our-team-block-text']} />
		</div>
	);
}
