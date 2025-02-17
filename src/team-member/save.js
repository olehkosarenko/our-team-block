import { useBlockProps, RichText } from '@wordpress/block-editor';
import PropTypes from 'prop-types';

export default function Save({ attributes }) {
	const { url, name, position, imageId, imageUrl, imageAlt } = attributes;
	const hasNotUrlAndName = !url && !name;
	const hasNameOrPosition = name || position;

	if (hasNotUrlAndName) {
		return null;
	}

	return (
		<div
			{...useBlockProps.save({
				className: 'our-team__item',
			})}
		>
			<a href={url} className="our-team__url">
				<span className="our-team__image">
					<img id={imageId} src={imageUrl} alt={imageAlt} />
				</span>
				{hasNameOrPosition && (
					<span className="our-team__person">
						{name && (
							<RichText.Content
								tagName="span"
								className="our-team__name"
								value={name}
							/>
						)}
						{position && (
							<RichText.Content
								tagName="span"
								className="our-team__position"
								value={position}
							/>
						)}
					</span>
				)}
			</a>
		</div>
	);
}

Save.propTypes = {
	attributes: PropTypes.shape({
		url: PropTypes.string,
		name: PropTypes.string,
		position: PropTypes.string,
		imageId: PropTypes.number,
		imageUrl: PropTypes.string,
		imageAlt: PropTypes.string,
	}),
	setAttributes: PropTypes.func.isRequired,
};
