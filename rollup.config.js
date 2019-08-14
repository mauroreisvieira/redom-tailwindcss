import serve from 'rollup-plugin-serve'
module.exports = {
    input: 'src/main.js',
    output: {
        file: 'dist/main.js',
        format: 'esm'
    },
    plugins: [
        serve()
    ]
};
