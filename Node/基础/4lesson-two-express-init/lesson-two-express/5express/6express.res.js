// experss 响应报文

// experss 响应报文
// express 
var express = require('express')
var app = express()
app.listen(3000, function () {
    console.log('3000::: node run');
})

app.use(function (req, res, next) {
    // 给所有的接口都设置响应头
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "PUT,GET,POST,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "X-Requestd-With");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next()

})

app.get('/json', function (req, res) {
    console.log(res.get('Access-Control-Allow-Methods'));//获取对应头部信息
    // res.json()
    // 作用：响应json格式数据
    // 参数; json对象
    res.json({
        cod: 1
    })
})
app.get('/download', function (req, res) {
    // 当用户访问接口的时候；下载文件
    res.download('./express.md')
})


app.get('/redirect', function (req, res) {
    // 重定项目
    res.redirect('http://www.baidu.com')
})

// res 响应报文
// 写头 res.set res.header
// 写行 res.status res.cookies
// 写体 res.send res.json...
// 凡是响应报文的内容都可以通过res设置
// 以上大多是ajax请求