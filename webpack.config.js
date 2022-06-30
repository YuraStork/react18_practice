require("dotenv").config();
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require("path");
const DevelopmentMode = process.env.DEVELOPMENT_MODE;

module.exports = {
  mode: DevelopmentMode,
  context: path.resolve(__dirname),
  entry: "./src/index.js",
  devtool: "inline-source-map",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "build"),
    clean: true,
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    static: {
      publicPath: "/assets",
      directory: path.join(__dirname, "public/assets"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      minify: DevelopmentMode === "production",
    }),
    new MiniCssExtractPlugin({ filename: "[hash].css" }),
  ],
  module: {
    rules: [
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
      {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        loader: "file-loader",
        options: {
          name: "[hash].[ext]",
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      }
    ],
  },
};
