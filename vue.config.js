// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = {
  devServer: {
    proxy: 'http://localhost:5000'
    // host: '0.0.0.0',
    // port: 8080,
    // open: true,
    // overlay: {
    //   warnings: false,
    //   errors: true
    // },
    // proxy: 'http://192.168.43.176:3000'
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:3000',
    //     ws: true,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // }
  },
  publicPath: '',
  // outputDir: 'build', // 更改构建文件输出目录
  // assetsDir: 'assets-myown', // 设置构建文件静态资源存放目录
  // indexPath: 'test.html', // 实际为更改index.html文件的名称
  // filenameHashing: false, // 静态资源使用hash以便更好地控制缓存，默认为true
  // pages: {
  //   index: {
  //     entry: 'src/main.js',
  //     template: 'public/index.html',
  //     filename: 'page.html',
  //     title: 'Index Page',
  //     chunks: ['chunk-vendors', 'chunk-common', 'index']
  //   }
  // },
  // lintOnSave: 'warning',
  // runtimeCompiler: false,
  // productionSourceMap: false,
  // crossorigin: 'use-credentials', // 如果在项目中使用，本地打开会有报错，这个有时间可以研究一下是什么原因
  // integrity: true,
  
  // css: {
  //   // requireModuleExtension: true,
  //   extract: true, // 是否将组件中的css单独抽离
  //   loaderOptions: {
  //     // postcss: {
  //     //   // plugins: {
  //     //   //   'postcss-pxtorem': {
  //     //   //     rootValue: 32,
  //     //   //     propList: ['*'],
  //     //   //     selectorBlackList: ['mint-']
  //     //   //   }
  //     //   // }
  //     //   plugins: [
  //     //     require('postcss-pxtorem')({
  //     //       rootValue: 37.5,
  //     //       propList: ['*']
  //     //     })
  //     //   ]
  //     // }
  //   }
  // },
  // 通过这种方式设置的对象将会被webpack-merge合并入最终的webpack配置
  // configureWebpack: {
  //   plugins: [
  //     new BundleAnalyzerPlugin()
  //   ]
  // },
  // chainWebpack (config) {

  // },
  // chainWebpack(config) {
  //   console.log(config.plugins, 'config+++++++++++++++++++++++++++++++++')
  //   config.plugins[BundleAnalyzerPlugin]
  //   config.optimization.splitChunks({
  //     chunks: 'async',
  //     minSize: 20000,
  //     // minRemainingSize: 0,
  //     maxSize: 0,
  //     minChunks: 1,
  //     maxAsyncRequests: 30,
  //     maxInitialRequests: 30,
  //     automaticNameDelimiter: '~',
  //     enforceSizeThreshold: 50000,
  //     cacheGroups: {
  //       defaultVendors: {
  //         test: /[\\/]node_modules[\\/]/,
  //         priority: -10,
  //         reuseExistingChunk: true
  //       },
  //       default: {
  //         minChunks: 2,
  //         priority: -20,
  //         reuseExistingChunk: true
  //       }
  //     }
  //   })
  // }
  // plugins: [
  //   new BundleAnalyzerPlugin()
  // ]
  // optimization: {
  //   splitChunks: {
  //     chunks: 'async',
  //     minSize: 20000,
  //     minRemainingSize: 0,
  //     maxSize: 0,
  //     minChunks: 1,
  //     maxAsyncRequests: 30,
  //     maxInitialRequests: 30,
  //     automaticNameDelimiter: '~',
  //     enforceSizeThreshold: 50000,
  //     cacheGroups: {
  //       defaultVendors: {
  //         test: /[\\/]node_modules[\\/]/,
  //         priority: -10,
  //         reuseExistingChunk: true
  //       },
  //       default: {
  //         minChunks: 2,
  //         priority: -20,
  //         reuseExistingChunk: true
  //       }
  //     }
  //   }
  // }
}