module.exports = {
  // 关闭语法警告
  lintOnSave: false,
  css: {
    loaderOptions: {
      scss: {
        prependData: "@import './src/styles/scssConfing.scss'"
      }
    }
  }
};
