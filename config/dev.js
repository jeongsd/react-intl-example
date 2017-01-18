/* eslint-disable global-require */
const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  return {
    entry: [
      // 'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:8080',
      // 'webpack/hot/only-dev-server',
      'babel-polyfill',
      './index.js',
    ],
    output: {
      filename: 'bundle.js',
      path: resolve(__dirname, '../build'),
      publicPath: '/',
    },
    context: resolve(__dirname, '../src'),

    devtool: 'inline-source-map',

    devServer: {
      hot: true,
      contentBase: resolve(__dirname, 'dist'),
      publicPath: '/',
      historyApiFallback: true,
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          use: [
            'babel-loader',
          ],
          exclude: /node_modules/,
        }, {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader?importLoader=1&modules&localIdentName=[name]-[local]',
            'postcss-loader',
          ],
          exclude: /node_modules/,
        }, {
          test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        }, {
          test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
          use: {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]',
              limit: 10000,
            },
          },
        },
      ],
    },

    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new HtmlWebpackPlugin({
        template: 'index.html',
        chunksSortMode: 'dependency',
      }),
    ],
  };
};
