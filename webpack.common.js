'use strict';

const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const pageList = require('./pages.json');
const confInfo = require('./conference.json');

module.exports = function (env) {
    const pages = pageList.map((page) => {
        return new HtmlWebpackPlugin({
            title: page.title,
            filename: page.url + '.html',
            template: './source/' + page.url + '.pug',
            templateParameters: {
                pages: pageList,
                active: page,
                conference: confInfo
            }
        });
    });
    const plugins = [
        ...pages,
        new FaviconsWebpackPlugin('./source/img/vinci-logo-sm.png')
    ];

    return {
        entry: './source/index.pug',
        resolve: {
            modules: ['source', 'node_modules'],
        },
        module: {
            rules: [
                {
                    test: /\.pug$/,
                    use: [
                        {
                            loader: 'pug-loader'
                        }
                    ]
                },
                {
                    test: /\.scss$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                esModule: false,
                                name: '[name].css'
                            }
                        },
                        { loader: 'extract-loader' },
                        {
                            loader: 'css-loader',
                            options: {
                                url: true,
                                importLoaders: 1
                            }
                        },
                        { loader: 'sass-loader' },
                    ],
                },
                {
                    test: /\.(png|jpe?g|svg|woff|woff2|eot|ttf)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                esModule: false,
                                name: '[name]_[md5:hash:hex:4].[ext]'
                            }
                        }
                    ]
                },
            ],
        },
        plugins
    };
}
