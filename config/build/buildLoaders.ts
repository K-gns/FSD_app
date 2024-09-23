import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export default function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {

    //Если не используем тайспскрипт - нужен babel loader
    const typescriptLoader =
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }

    const cssLoader = {
        test: /\.(c|sa|sc)ss$/i,
        use: [
            options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) =>  Boolean(resPath.includes('.module.')),
                        localIdentName: options.isDev
                            ? '[path][name]__[local]'
                            : '[hash:base64:5]'
                    }
                }
            },
            // Compiles Sass to CSS
            "sass-loader",
        ],
    }

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    const fileLoader = {
            test: /\.(png|jpe?g|gif|woff)$/i,
            use: [
                {
                    loader: 'file-loader',
                },
            ],
    }


    return [
        typescriptLoader, cssLoader, svgLoader, fileLoader
    ]
}