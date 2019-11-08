const path = require("path");
const webpack = require("webpack");
const merge = require('webpack-merge');
const production = require('./webpack.prd.conf.js');

module.exports = merge({
    plugins: [
        new webpack.DefinePlugin({
            'process.env': require('../config/hml.env')
        })]
}, production);