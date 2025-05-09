const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: '0.0.0.0',
    port: process.env.PORT || 10000,
    allowedHosts: 'all',
    client: {
      webSocketURL: {
        hostname: '0.0.0.0',
        port: process.env.PORT || 10000,
        pathname: '/'
      }
    },
    historyApiFallback: true,
    hot: true,
    compress: true
  }
})
