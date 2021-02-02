'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const pageList = require('./pages.json');
const confInfo = require('./conferenceInfo.json');

module.exports = function (env) {
    const pages = pageList.map((p) => {
        return new HtmlWebpackPlugin({
            title: p.title,
            filename: p.url + '.html',
            template: './source/pug/' + p.url + '.pug',
            templateParameters: {
                pages: pageList,
                activePage: p,
                conf: confInfo
            }
        });
    });
    const plugins = [
        ...pages,
        new CopyWebpackPlugin({
            patterns: [
                { from: 'source/css', to: '.' },
                { from: 'source/img', to: '.', }
            ]
        }),
        new FaviconsWebpackPlugin('./source/img/logo/vinci-logo-v2.png')
    ];

    return {
        entry: './source/pug/index.pug',
        module: {
            rules: [
                {
                    test: /\.pug$/,
                    use: {
                        loader: 'pug-loader'
                    },
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: 'style-loader'
                        }, {
                            loader: 'css-loader'
                        }],
                },
            ],
        },
        plugins
    };
}
