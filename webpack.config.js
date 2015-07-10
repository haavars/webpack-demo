var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'app/entry.js'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    module: {
        loaders: [
          /*Weird error in css loader due to sourcemap in sass, workaround is to add ?sourceMap*/
          { test: /\.sass$/, loader: "style!css!sass?sourceMap" }
        ]
    }
};
