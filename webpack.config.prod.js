const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = [
  {
    name: 'jsx',
    entry: {
      vendor: [
        'babel-polyfill',
        'react',
        'react-dom',
        'prop-types',
        'axios',
        'lodash.debounce',
        'lodash.pickby',
        'moment'
      ],
      app: [path.resolve(__dirname, 'lib', 'renderer', 'dom')]
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'public')
    },
    module: {
      rules: [
        {
          test: /.jsx?$/,
          include: [
            path.resolve(__dirname, 'lib')
          ],
          exclude: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, 'bower_components')
          ],
          loader: 'babel-loader?cacheDirectory'
        }
      ]
    },
    resolve: {
      extensions: ['.json', '.js', '.jsx'],
      modules: [
        path.resolve(__dirname, 'lib'),
        path.resolve(__dirname, 'node_modules')
      ]
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor'
      })
    ]
  },
  {
    name: 'scss',
    entry: path.resolve(__dirname, 'lib', 'components', 'sass', 'index'),
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'public')
    },
    module: {
      rules: [
        {
          test: /.scss?$/,
          include: [
            path.resolve(__dirname, 'lib', 'components', 'sass')
          ],
          exclude: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, 'bower_components')
          ],
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin({
        filename: "[name].css",
        disable: false,
        allChunks: true
      })
    ],
    resolve: {
      extensions: ['.css', '.scss']
    }
  }
];
