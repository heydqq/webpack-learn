const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/print.js',
  },
  output: {
    filename: '[name].bundle.js',
    // chunkFilename:'[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
 optimization:{
  splitChunks:{
    chunks:'all'
  }
 },
  devtool: 'inline-source-map',
  devServer:{
    contentBase:'./dist',
  },
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