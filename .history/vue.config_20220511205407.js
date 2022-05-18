module.exports = {
  // 关闭语法警告
  lintOnSave: false,
  css: {
     loaderOptions: {
      scss: {
            //  注意：在 sass-loader v8 中，这个选项名是 "prependData"现在这个版本的7
          prependData: "@import './src/styles/scssConfing.scss'",
          data: "@import './src/styles/scssConfing.scss'",
      }
    }
  }
};
