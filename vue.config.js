module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Truy tìm khoa báu'
        return args
      })
  },
  pwa: {

    iconPaths: {
      favicon32: 'img/logo.png',
      favicon16: 'img/logo.png',
      appleTouchIcon: 'img/logo.png',
      maskIcon: 'img/logo.png',
      msTileImage: 'img/logo.png'

    }

  }
}
