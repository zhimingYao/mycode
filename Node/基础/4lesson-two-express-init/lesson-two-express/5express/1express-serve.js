// express 创建服务
console.log('express-server run');
// 1.导入express
var express = require("express")

// 2.执行express，创实例对象
var app = express()

app.use(function () {
    console.log("监听:有人访问服务器就执行");
})
// 3.监听端口号
app.listen(3000,function () {
    console.log('3000:::node is ok');
})