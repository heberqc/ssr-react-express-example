const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // mode: 'development',

    context: path.resolve(__dirname, 'src/client'),

    // entry: {
    //     app: './index.js',
    // },

    entry: './index.js',

    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'dist', 'static'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'server', 'template.html'),
            filename: '../server/template.html',
        })
    ],

    devtool: 'inline-source-map',
};
