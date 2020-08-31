const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization:{
    moduleIds:'hashed',
    runtimeChunk:'single',
    splitChunks: {
      cacheGroups:{
        vendor:{
          test:/[\\/]node_modules[\\/]/,
          name:'vendors',
          chunks:'all'
        }
      },
    },
  },
  devtool: 'inline-source-map',
  module:{
    rules:[
      {
        test:/\.css$/,
        use:[
          'style-loader',
          'css-loader',
        ],
      },
      {
        test:/\.(png|svg|jpg|gif)$/,
        use:[
          'file-loader',
        ]
      },
      {
        test:/\.xml$/,
        use:[
          'xml-loader',
        ]
      },
    ],
  },
  plugins:[
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets:false
    }),
    new HtmlWebpackPlugin({
      title:'Output Mangament'
    }),
  ]
};