// express 请求报文
// express 
var express = require('express')
var app = express()
app.listen(3000, function () {
    console.log('3000::: node run');
})
app.use('/home', function (req, res) {
    var url = req.url;
    var method = req.method;//获取请求方式
    var route = req.route;//废弃
    var head = req.get('Content-Type');
    var ip = req.ip//获取ip
    // .....
    console.log('url----------->', url);
    console.log('method----------->', method)
    console.log('route----------->', route)
    console.log('head----------->', head)
    console.log('ip----------->', ip)
    // url?aa=123
    console.log('query参泝----------->', req.query)
    console.log('post-josn----------->', req.body)
    // 这里不支持params
    console.log('params----------->', req.params)



})

// params 传参  /list/1/1
// params + query   /list/1/12?aa=12&bb=456
// query  /list?id=123&age=456 bug 因为 url地址不能匹配到接口
app.use('/list/:id/:page', function (req, res) {
    var params = req.params;
    console.log(params);
    var query = req.query;
    console.log(query);
})