const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/Main.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        'react',
                        'es2015'
                    ],
                    plugins:[
                        'transform-decorators-legacy',
                        'transform-object-rest-spread',
                        'transform-class-properties'
                    ]
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'PexrayTech',
            template: 'index.template.html',
        })
    ],
    resolve: {
        modules: [
            path.resolve('./src'),
            path.resolve(__dirname, 'node_modules')
        ]
    }
}
