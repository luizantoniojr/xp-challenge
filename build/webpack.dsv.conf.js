const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    entry: ['react-hot-loader/patch', './src'],
    mode: 'development',
    output: {
        path: path.resolve(__dirname, "../dist/"),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, "../public/"),
        port: 3000,
        publicPath: "http://localhost:3000/dist/",
        hotOnly: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'public/index.html'
        }),
        new webpack.DefinePlugin({
            'process.env': require('../config/dsv.env')
        })
    ]
});