import path from 'path'

export default {
    entry: path.join(__dirname, './src/index.ts'),
    resolve: {
        extensions: ['.ts', '.js'],
    },
    devtool: false,
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        library: {
            name: '[name]',
            type: 'umd',
        },
    },
}
