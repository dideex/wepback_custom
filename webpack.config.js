const Webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env)
const webpackMerge = require('webpack-merge')
const presetConfig = require('./build-utils/loadPresets')

module.exports = ({mode = 'production', presets = []}) => {
  console.log('env', mode)
  return webpackMerge(
    {
      mode: mode,
      output: {
        filename: 'bundle.js',
      },
      module: {
        rules: [
          {
            test: /\.jpe?g$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 5000,
                },
              },
            ],
          },
        ],
      },
      plugins: [new HtmlWebpackPlugin(), new Webpack.ProgressPlugin()],
    },
    modeConfig(mode),
    presetConfig({mode, presets})
  )
}
