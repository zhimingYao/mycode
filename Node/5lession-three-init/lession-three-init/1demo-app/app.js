var express = require('express');
var app = express();
app.listen(5858,function () {
    console.log('5858');
})

var apiRouter = require('./api.js');
var bodyParser = require('body-parser');
var cors = require('cors');

app.use(function (req,res,next) {
    console.log('server run');
    console.log(`客户端请求地址：${req.url}方式：${req.method}`);
    next();
})

app.use(cors())//防止跨域拦截

app.use(bodyParser());
app.use('/api',apiRouter);
