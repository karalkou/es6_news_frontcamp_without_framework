const merge = require('webpack-merge');
const base = require('./webpack-configs/webpack.base.config');
const production = require('./webpack-configs/webpack.production.config');
const development = require('./webpack-configs/webpack.development.config');

module.exports = function(env) {
    console.log('env: ', env);
    if (env === 'production') {
        return merge([
            base(),
            production()
        ]);
    }
    if (env === 'development') {
        return merge([
            base(),
            development()
        ]);
    }
};