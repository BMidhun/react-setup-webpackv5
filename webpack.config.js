const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CSSMinifyPlugin = require("css-minimizer-webpack-plugin");
const JSMinifyPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),

  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },

  // mode: "development",

  //   devServer: {
  //     port: 3010,
  //     watchContent: true, // watch for changes
  //   },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },

      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          //"style-loader", //creates style tag in the targeted html file
          "css-loader",
          "sass-loader", // sass to css
        ],
      },
    ],
  },

  optimization: {
    minimize: true,
    minimizer: [new CSSMinifyPlugin(), new JSMinifyPlugin()],
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
    }),

    new MiniCssExtractPlugin({
      filename: "main.css",
    }),
  ],
};
