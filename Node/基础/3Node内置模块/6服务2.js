// 1.导入模块
const http = require('http');
// 2.创建服务
/**http.Server()创建服务器
 * 回调函数：客户端访问服务器层
 *  req 请求对象， 获取客户端请求内容
 *  res 响应对象   通过res中api 给客户端做出响应的
 */
var app = http.Server(function (req, res) {
    // 客户端访问服务器时触发
    // 当客户端地址：ip：3000 触发，url地址是什么不知道
    console.log('有人访问了服务');

    // url区分接口
    /* 1.如何获取客户端请求内容 */
    console.log(req.url);
    console.log(req.method);
    console.log(req);
    /* 2.如何对客户端做出响应 */
    res.end('hello world')
})
// 3.创建端口号
/**端口号：1-65535
 * 1-1023， 都是被占用端口，系统端口
 * 除了特殊意义的端口其他的端口可以自定义
 */
app.listen(3000, function () {
    console.log('3000 服务器启动了');
})

// IP 区分服务器(电脑)
// 端口号：一个服务上的，多个服务
// 路由地址：一个服务上不同接口