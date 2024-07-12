import path from 'path'
import packageJson from './package.json'

export default {
    entry: path.join(__dirname, './src/index.ts'),
    resolve: {
        extensions: ['.ts', '.js'],
    },
    devtool: false,
    output: {
        filename: packageJson.name + '.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        library: {
            name: packageJson.name,
            type: 'umd',
        },
    },
}
