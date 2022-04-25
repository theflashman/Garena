const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: process.env.NODE_ENV !== 'production'
  ? '/'
  : '/parena/',
  outputDir: './dist', // 构建输出目录
  assetsDir: 'assets'
})

