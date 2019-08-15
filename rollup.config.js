import serve from 'rollup-plugin-serve'
import scss from 'rollup-plugin-scss'
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

module.exports = {
    input: 'src/main.js',
    output: {
        file: 'dist/main.js',
        format: 'esm'
    },
    plugins: [
        serve(),
        scss(),
        resolve(),
        commonjs()
    ]
};
