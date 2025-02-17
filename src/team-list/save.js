import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function Save() {
	return (
		<div
			{...useBlockProps.save({
				className: 'our-team__list',
			})}
		>
			<InnerBlocks.Content />
		</div>
	);
}
