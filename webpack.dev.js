const path = require('path')
const common = require('./webpack.common.js');
const merge = require('webpack-merge');
module.exports = merge(common, {
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, "build"),
        filename: 'bundle.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader?sourceMap", "resolve-url-loader", "sass-loader?sourceMap",
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: [
                                './src/commonStyles/*.scss'
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp)(\?.*)?$/,
                loader: 'url-loader'
            }
        ]
    },
    devServer: {
        historyApiFallback:true
    }
})