import webpack from 'webpack';
import Config from 'webpack-config';
const path = require('path');

export default new Config().extend('webpack-configs/webpack.base.config.js').merge({
    devtool: 'eval-source-map',

    output: {
        publicPath: '/',
        pathinfo: true
    },

    devServer: {
        port: 9000,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        publicPath: 'http://localhost:9000/' /* It is recommended that devServer.publicPath is the same as output.publicPath */
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    { loader: "babel-loader" }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 } },
                    { loader: "postcss-loader", options: { sourceMap: true } },
                    { loader: 'less-loader', options: { sourceMap: true } }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader', options: { sourceMap: true, minimize: true, importLoaders: 1 } },
                    { loader: "postcss-loader", options: { sourceMap: true } }
                ]
            }
        ]
    },

    plugins: []
});