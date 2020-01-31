const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].js',
    chunkFilename: 'chunk.[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React App',
      template: path.resolve(__dirname, 'src/index.html'),
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    port: 3000,
    open: true,
  },
});
