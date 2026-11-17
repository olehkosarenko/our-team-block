import { transformWithOxc } from 'vite';
import { defineConfig } from 'vitest/config';

// The block sources are .js files with JSX, as @wordpress/scripts expects. Vite only reads JSX
// from .jsx files, so transform them as JSX before the other plugins see them.
const jsxInJs = {
	name: 'jsx-in-js',
	enforce: 'pre',
	transform( code, id ) {
		if ( ! /\/src\/.*\.js$/.test( id ) ) {
			return null;
		}

		return transformWithOxc( code, id.replace( /\.js$/, '.jsx' ), {
			jsx: { runtime: 'automatic' },
		} );
	},
};

export default defineConfig( {
	plugins: [ jsxInJs ],
	test: {
		environment: 'jsdom',
		include: [ 'src/**/*.test.js' ],
		server: {
			deps: {
				// The WordPress packages import JSON without import attributes, so Vite has to transform them.
				inline: [ /@wordpress\// ],
			},
		},
	},
} );
