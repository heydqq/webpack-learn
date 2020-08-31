const path = require('path');

module.exports =  [
  'source-map'
].map(devtool => ({
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack-numbers.js'
  },
  externals:{
    lodash:{
      commonjs:'lodash',
      commonjs2:'lodash',
      amd:'lodash',
      root:'_'
    }
  },
  devtool,
  optimization: {
    runtimeChunk: true
  }
}));