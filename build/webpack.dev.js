const webpack = require('webpack')

const base = require('./webpack.base')

base.entry = { client: './example/main.js' }
base.devtool = 'eval-source-map'
base.output.publicPath = '/lib/'
base.performance.hints = false

// Plugins Configuration
base.plugins.push(
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development')
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new HtmlWebpackPlugin({
    title: config.title,
    template: __dirname + '/index.html',
    filename: './index.html'
  })
)

// Rules Configuration
base.module.rules.push({
  test: /\.vue$/,
  loader: 'vue-loader',
  options: {
    loaders: {
      js: 'happypack/loader?id=babel'
    }
  }
})

base.module.rules.push({
  test: /\.css$/,
  use: [
    'style-loader',
    { loader: 'css-loader', options: { importLoaders: 1 } },
    'postcss-loader'
  ]
})

module.exports = base
