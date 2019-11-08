const path = require("path");
const webpack = require("webpack");
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
    entry: ['react-hot-loader/patch', './src'],
    mode: 'development',
    output: {
        filename: "bundle.js"
    },
    devServer: {
        port: 3000,
        publicPath: "/",
        hotOnly: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'public/index.html',
        }),
        new webpack.DefinePlugin({
            'process.env': require('../config/dsv.env')
        })
    ]
});