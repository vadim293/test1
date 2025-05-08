const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // Разрешить все хосты (для разработки)
    allowedHosts: 'all',
    
    // Или можно указать конкретные хосты:
    // allowedHosts: ['localhost', 'myapp.test', '.mydomain.com'],
    
    // Дополнительные настройки для избежания проблем с HMR
    hot: true,
    client: {
      webSocketURL: 'auto://0.0.0.0:0/ws'
    }
  }
})
