const common = require('./webpack.common.js');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path')
const webpack = require('webpack');

const extractSass = new ExtractTextPlugin({
    filename: "style.[chunkhash].css",
    disable: false,
    allChunks: true
});

module.exports = merge(common, {
    output: {
        path: path.resolve(__dirname, "build"),
        filename: '[name].[chunkhash].js',
        publicPath: '/',
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: 'assets',
                to: 'assets'
            }
        ]),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        extractSass,
        new UglifyJSPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.optimize.AggressiveMergingPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    fallback: "style-loader",
                    use: ["css-loader","resolve-url-loader","sass-loader",{
                        loader: 'sass-resources-loader',
                        options: {
                            resources: [
                                './src/commonStyles/*.scss'
                            ]
                        }
                    }]
                })
            },
            {
                test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp)(\?.*)?$/,
                loader: 'url-loader'
            }
        ]
    }
})