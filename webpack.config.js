const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  devServer: {
    port: 3000,
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html'
  })]
}