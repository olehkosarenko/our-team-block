import {
	useBlockProps,
	RichText,
	BlockControls,
	MediaReplaceFlow,
	MediaUpload,
	MediaUploadCheck,
	InspectorControls,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { decodeEntities } from '@wordpress/html-entities';
import { escapeEditableHTML } from '@wordpress/escape-html';
import { isBlobURL } from '@wordpress/blob';
import {
	Button,
	Spinner,
	ToolbarButton,
	PanelBody,
	TextControl,
} from '@wordpress/components';
import PropTypes from 'prop-types';
import { getPhotoUrl } from './image';

// Name and position are saved as HTML by the RichText fields on the card.
// The sidebar fields show them as plain text and store them escaped, so both
// ways of editing save the same markup.
const toText = ( html ) => decodeEntities( html || '' );
const toHtml = ( text ) => escapeEditableHTML( text );
const hasTags = ( html ) => /<[a-z][^>]*>/i.test( html || '' );

export default function Edit( { attributes, setAttributes } ) {
	const { url, name, position, imageId, imageUrl, imageAlt } = attributes;
	const onSelectURL = ( val ) => {
		setAttributes( {
			imageId: undefined,
			imageUrl: val,
			imageAlt: '',
		} );
	};
	const onSelect = ( val ) => {
		setAttributes( {
			imageId: val.id,
			imageUrl: getPhotoUrl( val ),
			imageAlt: val.alt,
		} );
	};
	const onRemove = () => {
		setAttributes( {
			imageId: undefined,
			imageUrl: undefined,
			imageAlt: '',
		} );
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Photo', 'our-team-block' ) }>
					{ imageUrl && (
						<img
							className="our-team__photo-preview"
							src={ imageUrl }
							alt=""
						/>
					) }
					<MediaUploadCheck>
						<div className="our-team__photo-actions">
							<MediaUpload
								onSelect={ onSelect }
								allowedTypes={ [ 'image' ] }
								value={ imageId }
								render={ ( { open } ) => (
									<Button
										variant="secondary"
										onClick={ open }
									>
										{ imageUrl
											? __( 'Replace', 'our-team-block' )
											: __(
													'Choose photo',
													'our-team-block'
												) }
									</Button>
								) }
							/>
							{ imageUrl && (
								<Button
									variant="secondary"
									isDestructive
									onClick={ onRemove }
								>
									{ __( 'Remove', 'our-team-block' ) }
								</Button>
							) }
						</div>
					</MediaUploadCheck>
					{ imageUrl && ! isBlobURL( imageUrl ) && (
						<TextControl
							label={ __( 'Alt text', 'our-team-block' ) }
							value={ imageAlt }
							onChange={ ( val ) =>
								setAttributes( { imageAlt: val } )
							}
						/>
					) }
				</PanelBody>
				<PanelBody
					title={ __( 'Name and position', 'our-team-block' ) }
				>
					<TextControl
						label={ __( 'Name', 'our-team-block' ) }
						value={ toText( name ) }
						disabled={ hasTags( name ) }
						help={
							hasTags( name )
								? __(
										'Contains formatting, edit it on the card.',
										'our-team-block'
									)
								: undefined
						}
						onChange={ ( val ) =>
							setAttributes( { name: toHtml( val ) } )
						}
					/>
					<TextControl
						label={ __( 'Position', 'our-team-block' ) }
						value={ toText( position ) }
						disabled={ hasTags( position ) }
						help={
							hasTags( position )
								? __(
										'Contains formatting, edit it on the card.',
										'our-team-block'
									)
								: undefined
						}
						onChange={ ( val ) =>
							setAttributes( { position: toHtml( val ) } )
						}
					/>
				</PanelBody>
				<PanelBody title={ __( 'Link', 'our-team-block' ) }>
					<TextControl
						type="url"
						label={ __( 'Link URL', 'our-team-block' ) }
						help={ __(
							'Leave empty to show the team member without a link.',
							'our-team-block'
						) }
						value={ url || '' }
						onChange={ ( val ) =>
							setAttributes( { url: val.trim() || undefined } )
						}
					/>
				</PanelBody>
			</InspectorControls>
			<BlockControls group="other">
				<MediaReplaceFlow
					name={
						imageUrl
							? __( 'Replace', 'our-team-block' )
							: __( 'Add photo', 'our-team-block' )
					}
					onSelect={ onSelect }
					onSelectURL={ onSelectURL }
					accept="image/*"
					allowedTypes={ [ 'image' ] }
					mediaId={ imageId }
					mediaURL={ imageUrl }
				/>
				{ imageUrl && (
					<ToolbarButton onClick={ onRemove }>
						{ __( 'Remove', 'our-team-block' ) }
					</ToolbarButton>
				) }
			</BlockControls>
			<div
				{ ...useBlockProps( {
					className: imageUrl
						? 'our-team__item'
						: 'our-team__item our-team__item--no-image',
				} ) }
			>
				{ imageUrl && (
					<span
						className={ `our-team__image ${
							isBlobURL( imageUrl ) ? 'is-loading' : ''
						}` }
					>
						<img
							className={
								imageId ? `wp-image-${ imageId }` : undefined
							}
							src={ imageUrl }
							alt={ imageAlt }
						/>
						{ isBlobURL( imageUrl ) && <Spinner /> }
					</span>
				) }
				<span className="our-team__person">
					<RichText
						tagName="span"
						allowedFormats={ [] }
						value={ name }
						className="our-team__name"
						onChange={ ( val ) => setAttributes( { name: val } ) }
						placeholder={ __( 'Name', 'our-team-block' ) }
					/>
					<RichText
						tagName="span"
						allowedFormats={ [] }
						className="our-team__position"
						value={ position }
						onChange={ ( val ) =>
							setAttributes( { position: val } )
						}
						placeholder={ __( 'Position', 'our-team-block' ) }
					/>
				</span>
			</div>
		</>
	);
}

Edit.propTypes = {
	attributes: PropTypes.shape( {
		url: PropTypes.string,
		name: PropTypes.string,
		position: PropTypes.string,
		imageId: PropTypes.number,
		imageUrl: PropTypes.string,
		imageAlt: PropTypes.string,
	} ),
	setAttributes: PropTypes.func.isRequired,
};
