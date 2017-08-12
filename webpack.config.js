'use strict';

const {resolve} = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },

  entry: {
    app: [
      'react-hot-loader/patch',
      resolve('src/index'),
    ],
  },
  output: {
    filename: '[name].js',
    path: resolve('dist'),
    publicPath: '/dist/',
  },
};
