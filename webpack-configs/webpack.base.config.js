import webpack from 'webpack';
const path = require('path');
const fs = require('fs');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: {
        index: ["babel-polyfill", 'whatwg-fetch', "./src/index.js"]
    },

    output: {
        filename: 'js/[name].js',
        path: path.join(__dirname, './../release'),
        publicPath: './'
    },

    module: {
        rules: [
            /* html */
            /*{
                test: /\.(html)$/,
                use: [
                    { loader: 'html-loader' }
                ]
            },*/
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

    plugins: [
        function() {
            this.plugin('watch-run', function(watching, callback) {
                console.log('* Begin compile at ' + new Date());
                callback();
            })
        },
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],

    externals: {
        jquery: 'jQuery'
    }
};