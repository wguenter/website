'use strict';

const CopyWebpackPlugin = require('copy-webpack-plugin');

const pageList = require('./pages.json');

const pages = function (params) {
    return pageList.map((p) => {
        return {
            title: p.title,
            filename: p.url + '.html',
            template: './source/pug/' + p.url + '.pug',
            templateParameters: {
                pages: pageList,
                activePage: p
            }
        };
    });
}

const common = function (env) {
    const plugins = [
        new CopyWebpackPlugin({
            patterns: [
                { from: 'source/css', to: '.' }
            ]
        })
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

module.exports = { pages, common };
