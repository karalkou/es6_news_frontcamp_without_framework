const webpack = require('webpack');

let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function () {
    return {
        devtool: 'source-map',

        module: {
            rules: [
                /* js */
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: [
                        { loader: "babel-loader" },
                        /*{ loader: 'eslint-loader' }*/
                    ]
                },
                /* less */
                {
                    test: /\.less$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            { loader: 'css-loader', options: { sourceMap: true, minimize: true, importLoaders: 1 } },
                            { loader: "postcss-loader", options: { sourceMap: true } },
                            { loader: 'less-loader', options: { sourceMap: true } }
                        ]
                    })
                },
                /* css */
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            { loader: 'css-loader', options: { sourceMap: false, minimize: true, importLoaders: 1 } },
                            { loader: "postcss-loader", options: { sourceMap: true } }
                        ]
                    })
                }
            ]
        },

        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                sourceMap: true,
                compress: {
                    warnings: true
                }
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'common',
                filename: 'js/common.js',
                minChunks: 2
            }),
            new ExtractTextPlugin({
                filename: "css/[name].css"
            }),
            /*new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            })*/
        ]
    }
};