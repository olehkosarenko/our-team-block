import { useBlockProps, RichText } from '@wordpress/block-editor';
import PropTypes from 'prop-types';

export default function Save( { attributes } ) {
	const { title, description } = attributes;

	return (
		<div { ...useBlockProps.save() }>
			<RichText.Content
				tagName="h2"
				className="our-team__title"
				value={ title }
			/>
			<RichText.Content
				tagName="p"
				className="our-team__desc"
				value={ description }
			/>
		</div>
	);
}

Save.propTypes = {
	attributes: PropTypes.shape( {
		title: PropTypes.string,
		description: PropTypes.string,
	} ),
};
