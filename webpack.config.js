const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {        
        test: /\.scss$/,
        use: [            
          "style-loader",          
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: 'img'
            }
          }
        ]
      }      
    ]
  },
  plugins: [     
    new CleanWebpackPlugin(),
    new CopyPlugin([
      { from: 'src/img', to: 'img' }
    ]),
    new MiniCssExtractPlugin({      
      filename: "style.[contenthash].css"
    }),
    new HtmlWebpackPlugin({     
      inject: true, 
      hash: true,
      template: './src/index.html',
      filename: 'index.html'
    })
  ]
};