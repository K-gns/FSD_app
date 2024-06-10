const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const startTime = Date.now()
const handler = (percentage, message, ...args) => {
    // e.g. Output each progress message directly to the console:
    let time = (Date.now() - startTime) / 1000
    console.info((percentage * 100).toFixed(2) + "%", time + "s", message,  ...args);
};



module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, 'src', "index.ts"),
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, 'build'),
        clean: true,
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
        new webpack.ProgressPlugin(handler),
    ]
}