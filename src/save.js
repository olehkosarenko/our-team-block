import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import PropTypes from 'prop-types';

export default function Save({ attributes }) {
	const { columns } = attributes;

	return (
		<div
			{...useBlockProps.save({
				className: `our-team__columns-${columns}`,
			})}
		>
			<div className="our-team__container">
				<div className="our-team">
					<div className="our-team__row">
						<InnerBlocks.Content />
					</div>
				</div>
			</div>
		</div>
	);
}

Save.propTypes = {
	attributes: PropTypes.shape({
		columns: PropTypes.number,
	}),
};
