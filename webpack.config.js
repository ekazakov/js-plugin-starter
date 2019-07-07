const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const AsyncChunkNames = require('webpack-async-chunk-names-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const config = require('config');

/*-------------------------------------------------*/

module.exports = {
    mode: process.env.NODE_ENV ? process.env.NODE_ENV : 'development',

    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        chunkFilename: '[name].js',
        publicPath: '/'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            }
        ]
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                default: false,
                vendors: false,
                vendor: {
                    // sync + async chunks
                    chunks: 'all',
                    test: /node_modules/,
                    priority: 20
                },
                common: {
                    name: 'common',
                    minChunks: 2,
                    chunks: 'async',
                    priority: 10,
                    reuseExistingChunk: true,
                    enforce: true
                }
            }
        }
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'index.html')
        }),
        new AsyncChunkNames(),
        new BundleAnalyzerPlugin()
    ],

    // development server configuration
    // devServer: {
    //     historyApiFallback: true
    //
    //     // open: config.get('open')
    // },

    // generate source map
    devtool: 'production' === process.env.NODE_ENV ? 'source-map' : 'source-map'
};
