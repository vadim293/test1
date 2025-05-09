const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: "all",
    host: '0.0.0.0',  // Разрешает доступ с любого IP (нужно для Render.com)
    port: 10000,      // Использует порт, назначенный Render
    client: {
      webSocketURL: 'auto://0.0.0.0:10000/ws'  // Важно для HMR (Hot Module Replacement)
    }
  }
})
