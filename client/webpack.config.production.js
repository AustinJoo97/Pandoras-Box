const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
    mode: 'production',
    entry: {
      vendor: ['semantic-ui-react'],
      app: './src/index.js'
    },
    output: {
      // We want to create the JavaScript bundles under a 
      // 'static' directory
      filename: 'static/[name].[hash].js',
      // Absolute path to the desired output directory. In our 
      //case a directory named 'dist'
      // '__dirname' is a Node variable that gives us the absolute
      // path to our current directory. Then with 'path.resolve' we 
      // join directories
      // Webpack 4 assumes your output path will be './dist' so you 
      // can just leave this
      // entry out.
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/'
    },
  devtool: 'inline-source-map',
  module: {
    rules: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.css$/,
          use: [
              {
                loader: 'style-loader'
              },
              {
                loader: 'css-loader',
                options: {
                      importLoaders: 1,
                      modules: true,
                      modules : {
                      localIdentName: '[name]__[local]__[hash:base64:5]',
                      },
                  
                  } 
              }
          ]
      },
        {
            test: /\.(woff(2)?|ttf|eot|svg|png|jpg|gif)(\?v=\d+\.\d+\.\d+)?$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'fonts/'
                }
              }
            ]
        }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        },
        vendor: {
          chunks: 'initial',
          test: 'vendor',
          name: 'vendor',
          enforce: true
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico',
    }),
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
    }),
  ]
};