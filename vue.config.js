const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // Разрешить все хосты (для разработки)
    allowedHosts: "all",
    
    // ИЛИ явно указать разрешенные хосты:
    // allowedHosts: ['localhost', 'myapp.test', '192.168.1.100'],
    
    // Для доступа с других устройств в локальной сети
    host: '0.0.0.0',
    
    // Настройки прокси, если используете API
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // Ваш бэкенд-адрес
        changeOrigin: true,
        secure: false
      }
    }
  }
}) 
