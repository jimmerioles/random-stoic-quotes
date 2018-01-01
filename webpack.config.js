let path = require('path');
let UglifyJsPlugin = require('uglifyjs-webpack-plugin');

let isProd = process.env.NODE_ENV === 'production';
let filename = isProd? 'app.min.js' : 'app.js';
let plugins = [];

if(isProd) {
    plugins.push(new UglifyJsPlugin());
}

module.exports = {
  entry: './src/js/app.js',
  output: {
    filename: filename,
    path: path.resolve(__dirname, 'dist/js')
  },
  plugins: plugins
};
