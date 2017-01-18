/* eslint-disable global-require */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { join, resolve } = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => ({
  context: resolve(__dirname, '../src'),
  entry: ['babel-polyfill', './index.js'],
  output: {
    path: join(__dirname, '../build'),
    filename: '[chunkhash].bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      }, {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: [
            'css-loader?importLoader=1&modules&localIdentName=[name]-[local]',
            'postcss-loader',
          ],
        }),
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
    new ExtractTextPlugin({
      filename: 'main.css', disable: false, allChunks: true,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true,
      },
      compress: {
        screw_ie8: true,
      },
      comments: false,
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      chunksSortMode: 'dependency',
    }),
  ],
});
