import webpack from 'webpack';
const path = require('path');
const fs = require('fs');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    context: path.resolve(__dirname, "./../src"),

    entry: {
        index: ["babel-polyfill", "whatwg-fetch", "./index.js"]
    },

    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, './../release'),
        publicPath: './' /* it means relative to an html page. The same parent directory. Simple rule: The URL of your output.path from the view of the HTML page.*/
    },

    module: {
        rules: [
            /* fonts */
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: '[name].[ext]?[hash]',
                            outputPath: './fonts/'
                        }
                    }
                ]
            },
            /* images */
            {
                test: /\.(png|jpg|svg)$/,
                include: [
                    path.resolve(__dirname, "./../images")
                ],
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: '[name].[ext]?[hash]',
                            outputPath: './img/',
                        }
                    }
                ]
            }
        ]
    },

    resolve: {
        modules: ['node_modules']
    },

    plugins: [
        function() {
            this.plugin('watch-run', function(watching, callback) {
                console.log('* Begin compile at ' + new Date());
                callback();
            })
        },
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],

    externals: {
        jquery: 'jQuery'
    }
};