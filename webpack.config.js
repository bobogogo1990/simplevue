
'use strict';

const path = require('path');
console.log('webpack config');
module.exports = {
  mode: 'development', // enable NamePlugins
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};