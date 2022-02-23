const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HelloWorldPlugin = require('./plugins/basic.js')
const FileListPlugin = require('./plugins/file-list-plugin.js')
const CleanPlugin = require('./plugins/clean-plugin.js')
const CountTimePlugin = require('./plugins/count-time.js')

module.exports = {
    mode:'development',
    resolveLoader: {
      modules: ['node_modules', 'loaders']
    },
  
      entry: {
          index: './src/js/index.js'
      },
  
      module: {
          rules: []
      },
  
      plugins: [
          new HtmlWebpackPlugin(),
          new FileListPlugin(),
          new CleanPlugin({exclude: 'a'})
      ]
  }