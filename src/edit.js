import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import PropTypes from 'prop-types';
import './scss/editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { columns } = attributes;

	const TEMPLATE = [
		['wp-app/our-team-block-column', {}, [['wp-app/our-team-block-text']]],
		[
			'wp-app/our-team-block-column',
			{},
			[
				[
					'wp-app/our-team-block-team-list',
					{},
					[
						['wp-app/our-team-block-team-member'],
						['wp-app/our-team-block-team-member'],
						['wp-app/our-team-block-team-member'],
						['wp-app/our-team-block-team-member'],
					],
				],
			],
		],
	];

	return (
		<div
			{...useBlockProps({
				className: `our-team__column-${columns}`,
			})}
		>
			<div className="our-team__container">
				<div className="our-team">
					<div className="our-team__row">
						<InspectorControls>
							<PanelBody>
								<RangeControl
									label={__('Columns', 'our-team-block')}
									min={1}
									max={2}
									value={columns}
									onChange={(val) =>
										setAttributes({ columns: val })
									}
								/>
							</PanelBody>
						</InspectorControls>
						<InnerBlocks
							allowedBlocks={['wp-app/our-team-block-column']}
							template={TEMPLATE}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

Edit.propTypes = {
	attributes: PropTypes.shape({
		columns: PropTypes.number,
	}),
	setAttributes: PropTypes.func.isRequired,
};
