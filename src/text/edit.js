import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import PropTypes from 'prop-types';

export default function Edit({ attributes, setAttributes }) {
	const { title, description } = attributes;

	return (
		<div {...useBlockProps()}>
			<RichText
				tagName="h2"
				className="our-team__title our-team__input"
				allowedFormats={[]}
				value={title}
				placeholder={__('Your Title', 'our-team-block')}
				onChange={(val) => setAttributes({ title: val })}
			/>
			<RichText
				tagName="p"
				className="our-team__desc our-team__input"
				allowedFormats={[]}
				value={description}
				placeholder={__('Your Description', 'our-team-block')}
				onChange={(val) => setAttributes({ description: val })}
			/>
		</div>
	);
}

Edit.propTypes = {
	attributes: PropTypes.shape({
		title: PropTypes.string,
		description: PropTypes.string,
	}),
	setAttributes: PropTypes.func.isRequired,
};
