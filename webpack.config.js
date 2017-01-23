const path = require("path");

var config = {

  entry: "./public/app.jsx",
  output: {
    path: path.resolve(__dirname,"public"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['','.js','.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }

};

module.exports = config;
