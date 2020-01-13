const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const minifyCssExtraPlugin = require('mini-css-extract-plugin')

const MODE = process.env.NODE_ENV === 'development'

module.exports = {
  mode: MODE ? 'development' : 'production',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-[hash].bundle.js',
    chunkFilename: '[name].bundle.js',
    publicPath: '/'
  },
  devServer: {
    port: '3000',
    hot: true,
    open: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.ts(x?)$/,
        use: [
          { loader: 'babel-loader' },
          { loader: 'ts-loader' }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.module\.s(a|c)ss$/,
        loader: [
          MODE ? 'style-loader' : minifyCssExtraPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              url: false,
              importLoaders: 2,
              sourceMap: MODE
            }
          },
          { loader: 'postcss-loader' },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: MODE
            }
          }
        ]
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /\.module\.s(a|c)ss$/,
        loader: [
          MODE ? 'style-loader' : minifyCssExtraPlugin.loader,
          'css-loader',
          { loader: 'postcss-loader' },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: MODE
            }
          }
        ]
      },
      {
        test: /\.css/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { url: false }
          }
        ]
      },
      {
        test: /\.(gif|png|jpg|jpeg|svg|ttf|eot|wof|woff|woff2)$/,
        loader: 'url-loader'
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /node_modules/,
          name: 'vendor',
          enforce: true,
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
    new minifyCssExtraPlugin({
      filename: MODE ? '[name].css' : '[name].[hash].css',
      chunkFilename: MODE ? '[id].css' : '[id].[hash].css'
    })
  ],
  resolve: {
    modules: ['node_modules'],
    extensions: [ '.js', '.jsx', '.ts', '.tsx', '.scss', '.css' ]
  }
}
