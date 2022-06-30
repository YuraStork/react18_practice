require("dotenv").config();
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require("path");
const DevelopmentMode = process.env.DEVELOPMENT_MODE;
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin")

module.exports = {
  mode: DevelopmentMode,
  context: path.resolve(__dirname),
  entry: "./src/index.tsx",
  devtool: "inline-source-map",
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      "components": path.resolve(__dirname, "src", "components")
    }
  },
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

  optimization: {
    minimize: DevelopmentMode === "production",
    minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()],
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
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-typescript"],
          },
        },
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-typescript",
              ["@babel/preset-react", { runtime: "automatic" }],
            ],
          },
        },
      },
    ],
  },
};
