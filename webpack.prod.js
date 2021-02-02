'use strict';

const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const { HtmlWebpackSkipAssetsPlugin } =
    require('html-webpack-skip-assets-plugin');

module.exports = function (env) {
    const plugins = [
        new HtmlWebpackSkipAssetsPlugin({
            skipAssets: [/.*\.js/]
        })
    ];
    return merge(
        common(env),
        { plugins, mode: 'production' }
    );
};
