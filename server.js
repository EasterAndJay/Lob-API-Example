var express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
var app = express();

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

if (process.env.NODE_ENV == JSON.stringify('production')) {
  app.use(express.static(__dirname));
  app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname,'index.html'));
  });
  app.listen(port, function() {
    console.log('Express server listening on port ' + port);
  });
} else {
  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: {
        colors: true
    }
  }).listen(port, 'localhost', function (err) {
    if (err) {
      console.log(err);
    }
    console.log('Listening at localhost:' + port);
  });
};
