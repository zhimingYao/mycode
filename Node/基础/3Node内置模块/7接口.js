// 1.导入模块
const http = require('http');
// 2.创建服务
var app = http.Server(function (req, res) {
    var url = req.url;
    
})
// 3.创建端口号
app.listen(3000, function () {
    console.log('3000 服务器启动了');
})

