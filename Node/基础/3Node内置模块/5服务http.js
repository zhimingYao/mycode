// 访问服务器:http https http2 socket udp top
// 网络协议：
// 七层：7 应用层 6 表示层 5 会话层 4 传输层 3 网络层 2 数据链路层 1 物理层 

// 1.导入模块
const http = require('http');
// 2.创建服务
var app = http.Server(function (req,res) {
    
})
// 3.创建端口号
app.listen(3000,function () {
    console.log('3000 服务器启动了');
})

// IP 区分服务器(电脑)
// 端口号：一个服务上的，多个服务
// 路由地址：一个服务上不同接口