const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
module.exports = {
  entry: "./js/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "./dist"),
    },
    port: 8000,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(gif|jpg|jpeg|png)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /index.html$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "index.html",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new TerserWebpackPlugin()
    ],
};
