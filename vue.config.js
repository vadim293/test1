const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: '0.0.0.0',  // Обязательно для Render.com
    port: process.env.PORT || 10000,  // Использует порт из переменной окружения или 10000
    allowedHosts: 'all',
    // Отключает проверку хоста (иначе может блокировать подключение)
    disableHostCheck: true,
    // Настройки WebSocket для HMR (чтобы автообновление работало)
    client: {
      webSocketURL: {
        hostname: '0.0.0.0',
        port: process.env.PORT || 10000,
      },
    },
  },
})
