import HTMLWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

//Progress loader in % and seconds
const startTime = Date.now()
const handler = (percentage:number, message:string, ...args: any[]) => {
    // e.g. Output each progress message directly to the console:
    let time = (Date.now() - startTime) / 1000
    console.info((percentage * 100).toFixed(2) + "%", time + "s", message,  ...args);
};


export function buildPlugins({paths} : BuildOptions):webpack.WebpackPluginInstance[] {

    const htmlWebpackPlugin = new HTMLWebpackPlugin({
            template: paths.html
        })

    const progressWebpackPlugin = new webpack.ProgressPlugin(handler)

    const miniCssExtractPlugin = new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css'
    })

    return [
        htmlWebpackPlugin,
        progressWebpackPlugin,
        miniCssExtractPlugin
    ]
}