const Config = require('./src/config.json')

module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = Config.name
        return args
      })
  },
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: {
      '/api': {
        target: 'http://b5fb954b.ngrok.io',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api' : '/'
        },
      }
    }
  },
  baseUrl: '.'
}
