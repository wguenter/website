'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
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
        new FaviconsWebpackPlugin('./source/img/logo/vinci-logo-v2.png')
    ];

    const flOptions = {
        esModule: false,
        // add short hash to avoid name collision
        name: '[name]_[md5:hash:hex:4].[ext]'
    }

    return {
        entry: './source/pug/index.pug',
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
                    test: /\.css$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: flOptions
                        },
                        { loader: 'extract-loader' },
                        { loader: 'css-loader' },
                    ]
                },
                {
                    test: /\.(png|jpe?g|svg)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: flOptions
                        }
                    ]
                },
            ],
        },
        plugins
    };
}
