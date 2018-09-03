const withCSS = require('@zeit/next-css')

module.exports = (phase, {defaultConfig}) => withCSS({
  cssModules: true,
  publicRuntimeConfig: { 
    staticFolder: '../static'
  },
  webpack: (config) => {
    return config
  }
})