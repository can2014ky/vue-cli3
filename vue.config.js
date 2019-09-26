const path = require('path')

const resolve = dir => path.join(__dirname, dir)

const BASE_URL = process.env.NODE_ENV === 'production' ? '/' : '/'

module.exports = {
  publicPath: BASE_URL, // vue-cli3.3以下版本使用 baseUrl, 默认是服务器根目录'/'，部署应用包时的基本 URL;
  outputDir: 'dist', // build时构建文件的目录，默认就是dist，../dist是上一级目录的dist文件夹
  assetsDir: 'static', // build时非默认(相对于 outputDir 的)放置生成的静态资源 (js、css、img、fonts) 的目录
  indexPath: 'index.html', // build时默认指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
  filenameHashing: true, // 默认就是true，在生成的静态资源文件名中包含hash以控制缓存
  lintOnSave: process.env.NODE_ENV !== 'production', // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码 (在生产构建时禁用 eslint-loader)
  productionSourceMap: false, // 调试作用，如果不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
  devServer: {
    open: true, // 配置自动启动浏览器
    host: 'localhost',
    port: 8080,
    https: false, // 是否开启https进行安全提示
    hotOnly: true, // 热更新，更改数据后，不会刷新整个页面
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  chainWebpack: config => { // 对内部的 webpack 配置（比如修改、增加Loader选项）(链式操作)
    config.resolve.alias
      .set('@', resolve('src')) // 默认就已经配置了
      .set('_c', resolve('src/components'))
      .set('_v', resolve('src/views'))
  },
  // webpack配置
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md   webpack链接API，用于生成和修改webapck配置
  // chainWebpack: () => {
  //   if (debug) {
  //     // 本地开发配置
  //   } else {
  //     // 生产开发配置
  //   }
  // },
  // configureWebpack: (config) => {// webpack配置，值位对象时会合并配置，为方法时会改写配置
  //   if (debug) { // 开发环境配置
  //     config.devtool = 'cheap-module-eval-source-map'
  //   } else { // 生产环境配置

  //   }
  //   Object.assign(config, { // 开发生产共同配置
  //     resolve: {
  //       alias: {
  //         '@': path.resolve(__dirname, './src')//设置路径别名
  //         //...
  //       }
  //     }
  //   })
  // },
  // css: { // css相关配置 配置高于chainWebpack中关于css loader的配置
  //   extract: true, // 是否使用css分离插件 ExtractTextPlugin
  //   sourceMap: false, // 开启 CSS source maps?是否在构建样式地图，false将提高构建速度
  //   loaderOptions: {}, // css预设器配置项
  //   modules: false // 启用 CSS modules for all css / pre-processor files.
  // },
  // pluginOptions: {}, // 可以用来传递任何第三方插件选项
  runtimeCompiler: false // 是否使用包含运行时编译器的 Vue 构建版本
}
