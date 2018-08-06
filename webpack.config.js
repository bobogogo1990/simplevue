
'use strict';

const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'development', // enable NamePlugins
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.vue$/, loader: "vue-loader" },
      { test: /\.css$/, use: ["vue-style-loader", "css-loader"] }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue: 'vue/dist/vue.js',
      utils: path.resolve(__dirname, 'src/utils/'),
      components: path.resolve(__dirname, 'src/components/')
    }
  }
};