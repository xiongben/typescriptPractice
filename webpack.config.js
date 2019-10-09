

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');
console.log(CleanWebpackPlugin)

module.exports = {
  mode : 'development',
  entry: {
    app: './src/index.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
        inject: false,
        hash: true,
        template: './index.html',
        filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
  ],
  output: {
    filename: '[name].js',
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