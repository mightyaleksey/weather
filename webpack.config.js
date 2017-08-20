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
          {
            loader: 'postcss-loader',
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          plugins: [
            'react-hot-loader/babel',
          ],
          presets: [
            ['es2015', {modules: false}],
            'react',
          ],
        },
      },
      {
        test: /\.(png|svg)$/,
        loader: 'file-loader',
      },
    ],
  },

  entry: {
    app: [
      'babel-polyfill',
      'unfetch/polyfill',
      'react-hot-loader/patch',
      resolve('src/index'),
    ],
  },
  output: {
    filename: '[name].js',
    path: resolve('dist'),
    publicPath: '/dist/',
  },

  devServer: {
    proxy: [
      {
        context: '/v1/**',
        secure: false,
        target: 'https://api.weather.yandex.ru/',
      },
    ],
  },
};
