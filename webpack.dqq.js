const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'dqq.js',
    path: path.resolve(__dirname, 'dist'),
  },
};