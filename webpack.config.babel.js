import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import { name, description, version } from'./package.json';
import merge from 'webpack-merge';
import baseConfig from 'create-plesk-app/lib/webpack/config';

const output = path.resolve(__dirname, 'dist');

module.exports = (env = {}) => merge(baseConfig(env), {
    mode: env.dev ? 'development' : 'production',
    entry: './src/frontend/index.js',
    output: {
        filename: 'htdocs/bundle.js',
        path: output,
        libraryTarget: 'amd',
    },
    module: {
        rules: [
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.(png|gif|svg|jpg|woff|woff2)$/i,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]',
                    outputPath: 'htdocs/images/',
                },
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(output),

        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, './src/htdocs'),
                to: path.resolve(output, 'htdocs'),
            },
        ]),

        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, './src/plib'),
                to: path.resolve(output, 'plib'),
                ignore: [ 'vendor/plesk/pm-api-stubs/**/*', 'vendor/plesk/zf1/**/*' ],
            },
        ]),

        new HtmlWebpackPlugin({
            filename: 'meta.xml',
            template: 'src/meta.xml',
            inject: false,
            templateParameters: {
                id: name,
                name: description,
                version,
            },
        }),
    ],
    externals: {
        '@plesk/ui-library': { amd: 'plesk-ui-library' },
    },
});
