const MiniCssExtrapctPlugin = require('mini-css-extract-plugin')

module.exports = env => ({
  output: {
    filename: "[chunkhash].js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtrapctPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtrapctPlugin()
  ]
});