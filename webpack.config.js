// const webpack = require('webpack')
// https://jlongster.com/Backend-Apps-with-Webpack--Part-I#p28
var fs = require('fs');
var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['sharp'].indexOf(x) !== -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  context: __dirname,
  entry: {
    functions: [
      __dirname + "/js/index.js"
    ]
  },
  output: {
    path: __dirname + "/dist/",
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  // "target": "node", // not working with aws-amplify and giving error of buffer
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-react']
        }
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        loaders: ['style-loader', 'css-loader'],
      },
    ]
  },
  externals: nodeModules,
}