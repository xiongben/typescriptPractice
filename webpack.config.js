

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
console.log(CleanWebpackPlugin)

module.exports = {
  mode : 'development',
  entry: './src/index.js',
  plugins: [
    // new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: '开发环境'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  devtool: 'inline-source-map',
  module: {
      rules: [
        {
          test: /\.css$/,
          use: [
              'style-loader',
              'css-loader'
          ]
        },
        { test: /\.tsx?$/, use: "awesome-typescript-loader" },
        { enforce: "pre", test: /\.js$/, use: "source-map-loader" }
      ]
  }
};