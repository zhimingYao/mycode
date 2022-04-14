// express 路由地址
// 路由实例对象作用：编写接口业务
// app 服务实例
// app.use
var express = require('express')
var app = express()
// 创建间路由实例对象
var router = express.Router();
// 用路由实例对象建立的get请求，不是服务
router.get('/home',function (req,res) {
    res.json({
        code:1
    })
})

router.get('/login', function (req, res) {
    res.json({
        code: 1
    })
})

// 建立路由与服务的联系
app.use('/api', router);

app.listen(3000, function () {
    console.log('3000::: node run');
})

