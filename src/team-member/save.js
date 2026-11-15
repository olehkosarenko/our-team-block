import { useBlockProps, RichText } from '@wordpress/block-editor';
import PropTypes from 'prop-types';

export default function Save( { attributes } ) {
	const { url, name, position, imageId, imageUrl, imageAlt } = attributes;

	if ( ! url && ! name && ! position && ! imageUrl ) {
		return null;
	}

	const Wrapper = url ? 'a' : 'div';

	return (
		<div
			{ ...useBlockProps.save( {
				className: 'our-team__item',
			} ) }
		>
			<Wrapper
				href={ url || undefined }
				className={ url ? 'our-team__url' : 'our-team__card' }
			>
				{ imageUrl && (
					<span className="our-team__image">
						<img
							className={
								imageId ? `wp-image-${ imageId }` : undefined
							}
							src={ imageUrl }
							alt={ imageAlt }
						/>
					</span>
				) }
				{ ( name || position ) && (
					<span className="our-team__person">
						{ name && (
							<RichText.Content
								tagName="span"
								className="our-team__name"
								value={ name }
							/>
						) }
						{ position && (
							<RichText.Content
								tagName="span"
								className="our-team__position"
								value={ position }
							/>
						) }
					</span>
				) }
			</Wrapper>
		</div>
	);
}

Save.propTypes = {
	attributes: PropTypes.shape( {
		url: PropTypes.string,
		name: PropTypes.string,
		position: PropTypes.string,
		imageId: PropTypes.number,
		imageUrl: PropTypes.string,
		imageAlt: PropTypes.string,
	} ),
};
