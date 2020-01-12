const webpack = require('webpack')
const path = require('path')
const fs = require('fs')
const TerserPlugin = require('terser-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const PeerDepsExternalsPlugin = require('peer-deps-externals-webpack-plugin')

module.exports = (env, argv) => {
  const {
    environment,
    mode,
    release
  } = argv
  const config = (
    !release
      ? getDevelopmentConfig(mode)
      : getProductionConfig(mode)
  )
  return config
}

function getDevelopmentConfig(mode = 'development') {
  const config = getBaseConfig()
  return {
    ...config,
    mode,
    devtool: 'eval-source-map',
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, './dist')
    }
  }
}

function getProductionConfig(mode = 'production') {
  const config = getBaseConfig()
  return {
    ...config,
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, './dist'),
      library: 'react-copyweasel',
      libraryTarget: 'umd'
    },
    mode,
    optimization: {
      minimizer: [
        new TerserPlugin({
          test: /\.jsx?$/,
          parallel: true,
          sourceMap: true,
          terserOptions: {
            ecma: 6,
            pure_funcs: [
              'console.debug'
            ]
          }
        })
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new PeerDepsExternalsPlugin()
    ]
  }
}

function getBaseConfig() {
  return {
    entry: './src/index',
    module: {
      rules: [
        {
          test: /\.(jsx?|tsx?)$/,
          include: [
            path.resolve(__dirname),
          ],
          exclude: /(node_modules)/,
          use: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(png|woff|woff2|eot|ttf|otf|svg)$/,
          use: 'url-loader?limit=100000',
        }
      ]
    },
    resolve: {
      mainFields: ['browser', 'module', 'main'],
      extensions: ['.wasm', '.mjs', '.js', '.ts', '.json', '.css'],
      modules: [
        path.resolve(__dirname, 'node_modules')
      ],
      alias: {
        rcw: path.resolve(__dirname, './src')
      }
    }
  }
}
