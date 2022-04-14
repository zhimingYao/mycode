// express 路由接口处理 post请求
// 客户顿传递数据可是不同
/**
 www-form-urlencoded,

form-data,

application/json,

text/xml
 */


var express = require('express')
var app = express()
var router = express.Router();
// 获取请求体重参数 处理 urlencoded json
var bodyParser = require('body-parser');
app.use(bodyParser())
app.use(router);
router.post('/login', function (req, res) {
    // 获取 post 通过请求体传递的数据。格式 urlencode
    // 请求体中数据；依赖第三方中间件：

    // 方式一：自己写处理请求体数据，处理所有格式数据
    // 监听请求体传参的事件。
    // 难题：如何解析formData格式数据
    // req.on('data',function(data){
    //     console.log(data);
    //     console.log(String(data));
    //     res.json({
    //         code:1,
    //         data:String(data)
    //     })
    // })
    // 方式二：中间件：body-parser 已经废弃
    // 1：安装 npm i body-parser -D
    // 2：导入
    // 3: 挂载 app.use() 注意放在路由之前
    var body = req.body;
    console.log(body);
    res.json({
        code: 1,
        data: body
    })

})
app.listen(3000, function () {
    console.log('3000::: node run');
})