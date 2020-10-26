const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // mode: 'development',

    context: path.resolve(__dirname, 'src/client'),

    // entry: {
    //     app: './index.js',
    // },

    entry: './index.js',

    output: {
        publicPath: '/static',
        path: path.resolve(__dirname, 'dist', 'static'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            // {
            //     test: /\.(png|jpg|gif)$/i,
            //     use: [
            //         {
            //             loader: 'url-loader',
            //             options: {
            //                 limit: 8192,
            //             },
            //         },
            //     ],
            // },
            // {
            //     test: /\.css$/,
            //     exclude: /node_modules/,
            //     loader: 'style-loader!css-loader',
            //     loader: ['style-loader', 'css-loader'],
            // },
            // {
            //     test: /\.styl$/,
            //     use: [
            //         {
            //             loader: 'style-loader',
            //         },
            //         {
            //             loader: 'css-loader',
            //         },
            //         {
            //             loader: 'stylus-loader',
            //         },
            //     ]
            // },
        ],
    },

    plugins: [
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['dist']
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'server', 'template.html'),
            filename: '../server/template.html',
        })
    ],

    devtool: 'inline-source-map',
};
