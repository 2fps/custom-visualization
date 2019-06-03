const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const config = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
    },
    devtool: "source-map",
    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }]
        }, {
            test: /\.less$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }, {
                loader: 'less-loader'
            }]
        }, {
            test: /\.scss$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }, {
                loader: 'sass-loader'
            }]
        }, /* {
            test: /\.ts$/,
            use: 'ts-loader'
        }, */ {
            test: /\.js$/,
            exclude: /node_modules/,
            use: "babel-loader"
        }, {
            test: /\.(png|jpeg|gif|svg)$/,
            loader: "url-loader?limit=8192",
            exclude: /node_modules/,
            // include: [resolve('static'), resolve('src')],
            options: {
                // name: utils.assetsPath('img/[name].[hash:7].[ext]')
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './index.html'})
    ]
};

module.exports = config;