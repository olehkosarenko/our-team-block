import {
	useBlockProps,
	RichText,
	MediaPlaceholder,
	BlockControls,
	MediaReplaceFlow,
	InspectorControls,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { isBlobURL } from '@wordpress/blob';
import {
	Spinner,
	ToolbarButton,
	PanelBody,
	TextControl,
} from '@wordpress/components';
import PropTypes from 'prop-types';

export default function Edit({ attributes, setAttributes }) {
	const { url, name, position, imageId, imageUrl, imageAlt } = attributes;
	const onSelectURL = (val) => {
		setAttributes({
			imageId: undefined,
			imageUrl: val,
			imageAlt: '',
		});
	};
	const onSelect = (val) => {
		setAttributes({
			imageId: val.id,
			imageUrl: val.url,
			imageAlt: val.alt,
		});
	};

	return (
		<>
			{imageUrl && !isBlobURL(imageUrl) && (
				<InspectorControls>
					<PanelBody title={__('Image Settings', 'our-team-block')}>
						<TextControl
							label={__('Alt', 'our-team-block')}
							value={imageAlt}
							onChange={(val) => setAttributes({ imageAlt: val })}
						/>
					</PanelBody>
				</InspectorControls>
			)}
			{imageUrl && (
				<BlockControls>
					<MediaReplaceFlow
						name={__('Replace Image', 'our-team-block')}
						onSelect={onSelect}
						onSelectURL={onSelectURL}
						accept="image/*"
						allowedTypes={['image']}
						mediaId={imageId}
						mediaURL={imageUrl}
					/>
					<ToolbarButton
						onClick={() =>
							setAttributes({
								imageId: undefined,
								imageUrl: undefined,
								imageAlt: '',
							})
						}
					>
						{__('Remove Image', 'our-team-block')}
					</ToolbarButton>
				</BlockControls>
			)}
			<div
				{...useBlockProps({
					className: 'our-team__item',
				})}
			>
				<RichText
					value={url}
					allowedFormats={[]}
					className="our-team__url our-team__input"
					onChange={(val) => setAttributes({ url: val })}
					placeholder={__('URL', 'our-team-block')}
				/>
				<span className="our-team__image">
					{imageUrl && (
						<div
							className={`image ${
								isBlobURL(imageUrl) ? 'is-loading' : 'loaded'
							}`}
						>
							<img src={imageUrl} alt={imageAlt} id={imageId} />
							{isBlobURL(imageUrl) && <Spinner />}
						</div>
					)}
					<MediaPlaceholder
						onSelect={onSelect}
						onSelectURL={onSelectURL}
						accept="image/*"
						allowedTypes={['image']}
						disableMediaButtons={imageUrl}
					/>
				</span>
				<span className="our-team__person">
					<RichText
						tagName="span"
						allowedFormats={[]}
						value={name}
						className="our-team__name our-team__input"
						onChange={(val) => setAttributes({ name: val })}
						placeholder={__('Name', 'our-team-block')}
					/>
					<RichText
						tagName="span"
						allowedFormats={[]}
						className="our-team__position our-team__input"
						value={position}
						onChange={(val) => setAttributes({ position: val })}
						placeholder={__('Position', 'our-team-block')}
					/>
				</span>
			</div>
		</>
	);
}

Edit.propTypes = {
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
