const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true, 
  devServer: {
    disableHostCheck: true, // Отключает проверку заголовка Host
    port: 8080, // Убедитесь, что порт соответствует тому, который используется на Render
  }, 
})
