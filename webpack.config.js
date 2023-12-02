const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');

const port = 3001;

module.exports = {
    entry: ["./src/index.js"],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
            test: /\.(png|jpe?g|gif|svg|ttf|woff|woff2|otf)$/,
            use: [
                    {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[contenthash].[ext]',
                        outputPath: 'static/img',
                        esModule: false 
                    }
                    }
                ]
            }
        ],
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"],
        fallback: {
            "crypto": require.resolve("crypto-browserify"),
            "os": require.resolve("os-browserify/browser")
          }
    },
    output: {
        filename: "[name].js",
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
        new Dotenv()
    ],
    devServer: {
        host: "localhost",
        port: port,
        historyApiFallback: true,
        open: true,
        hot: true,
    },
};