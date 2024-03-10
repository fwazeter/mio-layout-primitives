import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import pkg from './package.json' assert {type:'json'};

const extensions = [
    '.js', '.jsx', '.ts', '.tsx',
];

export default {
    input: './src/index.ts', // Entry point
    // Specify here external modules which you don't want to include in your bundle (for instance: 'lodash', 'moment' etc.)
    // https://rollupjs.org/guide/en/#external
    external: ['react'],
    output: {
        dir: 'dist', // Output to the dist/ directory
        format: 'esm', // Output as ES module
        sourcemap: true,
    },
    plugins: [
        resolve({ extensions }),
        babel({ extensions, babelHelpers: 'bundled', include: ['src/**/*'] }),
        postcss({
            //extract: true, // Extract to dist/index.css
            // Options for postcss
            modules: {
                generateScopedName: '[local]',
            },
            extensions: ['.css', '.scss' ],
            use: ['sass'],
            plugins: [
                // autoprefixer(), // adds vendor prefixes
                // cssnano(), // minifies the css
            ],
        })
    ],
};
