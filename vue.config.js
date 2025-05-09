const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
  allowedHosts: [
    'localhost',
    'example.com',
    '.example.com' // поддомены
  ]
  } 
}) 
