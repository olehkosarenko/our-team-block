import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function Edit() {
	return (
		<div
			{...useBlockProps({
				className: 'our-team__list',
			})}
		>
			<InnerBlocks
				allowedBlocks={['wp-app/our-team-block-team-member']}
				orientation="horizontal"
				minItems={2}
				maxItems={4}
			/>
		</div>
	);
}
