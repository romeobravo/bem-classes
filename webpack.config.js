var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, '.');
var LIB_DIR = path.resolve(__dirname, 'lib');

var config = {
  entry: LIB_DIR + '/bem.js',
  output: {
    path: APP_DIR,
    filename: 'bem.js',
    library: 'bem',
    libraryTarget: 'umd'
  },
  module : {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ],
  }
};

module.exports = config;
