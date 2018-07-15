const ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = {
  configureWebpack: {
    plugins: [
      new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i })
    ]
  }
}