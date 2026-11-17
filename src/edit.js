import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls,
} from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import PropTypes from 'prop-types';
import './scss/editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { columns } = attributes;

	const TEMPLATE = [
		[
			'wp-app/our-team-block-column',
			{},
			[ [ 'wp-app/our-team-block-text' ] ],
		],
		[
			'wp-app/our-team-block-column',
			{},
			[
				[
					'wp-app/our-team-block-team-list',
					{},
					[
						[ 'wp-app/our-team-block-team-member' ],
						[ 'wp-app/our-team-block-team-member' ],
						[ 'wp-app/our-team-block-team-member' ],
						[ 'wp-app/our-team-block-team-member' ],
					],
				],
			],
		],
	];

	const blockProps = useBlockProps( {
		className: `our-team__columns-${ columns }`,
	} );
	// The columns are rendered straight into the row, without the extra
	// elements of InnerBlocks, so the editor has the same markup and layout
	// as the site.
	const innerBlocksProps = useInnerBlocksProps(
		{ className: 'our-team__row' },
		{
			allowedBlocks: [ 'wp-app/our-team-block-column' ],
			template: TEMPLATE,
		}
	);

	return (
		<div { ...blockProps }>
			<InspectorControls>
				<PanelBody>
					<RangeControl
						label={ __( 'Columns', 'our-team-block' ) }
						min={ 1 }
						max={ 2 }
						value={ columns }
						onChange={ ( val ) =>
							setAttributes( { columns: val } )
						}
					/>
				</PanelBody>
			</InspectorControls>
			<div className="our-team__container">
				<div className="our-team">
					<div { ...innerBlocksProps } />
				</div>
			</div>
		</div>
	);
}

Edit.propTypes = {
	attributes: PropTypes.shape( {
		columns: PropTypes.number,
	} ),
	setAttributes: PropTypes.func.isRequired,
};
