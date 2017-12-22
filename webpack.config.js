let path = require('path');

module.exports = {
  entry: './src/js/bundle.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/js')
  }
};
