
'use strict';

const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');

const env = process.env.NODE_ENV;

module.exports = {
  mode: env, // enable NamePlugins
  entry: ['babel-polyfill', './src/main.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[hash].js',
    hashDigestLength: 5, // 指定hash和chunkhash的长度
    chunkFilename: '[name].bundle.js',
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.vue$/, loader: "vue-loader" },
      {
        test: /\.css$/, use: [
          env === 'production' ? MiniCssExtractPlugin.loader : 'vue-style-loader',
          "css-loader"
        ]
      },
      {
        test: /\.less$/, use: [
          {
            loader: env === 'production' ? MiniCssExtractPlugin.loader : 'vue-style-loader',
            options: {

            },
          },
          "css-loader",
          "postcss-loader",
          "less-loader"
        ]
      }
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: 'Hi Vue',
      filename: 'index.html',
      template: path.resolve(__dirname, 'index.html'),
      inject: 'body',
    }),
    new webpack.HashedModuleIdsPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[hash].chunk.css',
      hashDigestLength: 5,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue: 'vue/dist/vue.js',
      utils: path.resolve(__dirname, 'src/utils/'),
      components: path.resolve(__dirname, 'src/components/')
    }
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        venders: {
          test: /[\\/]node_modules[\\/]/,
          name: 'module_vendors',
          chunks: 'all'
        },
      },
    },

  },
};