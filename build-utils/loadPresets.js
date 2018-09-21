const webpackMerge = require('webpack-merge')

const applyPresets = env => {
  const {presets} = env
  /** @type {String[]} */
  const mergePresets = [].concat(...[presets])
  const mergeConfigs = mergePresets.map(name =>
    require(`./presets/webpack.${name}`)(env)
  )

  return webpackMerge({}, ...mergeConfigs)
}

module.exports = applyPresets
