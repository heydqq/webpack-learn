const express = require('express');
const webpack = require('webpack');
const webpackDevMidware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.dqq.js');
const compiler = webpack(config);

app.use(webpackDevMidware(compiler,{
    publicPath:config.output.publicPath
}));

app.listen(3000,function(){
    console.log('examp;le app listening on prot 3000');
})