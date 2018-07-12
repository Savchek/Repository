const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const statConf = {
  version: false,
  modules: false,
  assets: false,
  hash: false
}
module.exports = {
  entry: ['babel-polyfill', './app.jsx'],
  output: {
    filename: './dist/bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx?)$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['env', {'modules': false}], 'stage-0', 'react']
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: ['css-loader']
          })
      },
      {
        test: /\.(img|png|svg)$/,
        use: 'url-loader'
      }
    ]
  },
  devServer: {
    stats: statConf,
    port: '8000'
  },
  plugins: [
    new ExtractTextPlugin('./dist/bundle.css')
  ],
}
