import serve from 'rollup-plugin-serve'
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss'

module.exports = {
    input: 'src/app.js',
    output: {
        file: 'dist/main.js',
        format: 'esm'
    },
    plugins: [
        postcss({
            extract: true
        }),
        serve(),
        resolve(),
        commonjs()
    ]
};
