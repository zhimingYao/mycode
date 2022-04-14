// express 编写基础的接口

var express = require("express")

var app = express()
app.listen(3000, function () {
    console.log('3000:::node is ok');
})

/** 
* url: /home
* method: get
* params: {
*   goodId: 1
*   page: 1
* }
* responset ：{
*   code: 1
*   list: [{}]
* }
*/
/*app.get()
作用：处理get请求
参一: */

app.get('/home',function (req,res,next) {
    console.log('/home有人请求了');
    var query = req.query;
    console.log(query);
    res.json({
        code:1,
        list:[{
            query:query,
        }]
    })
})

/**
 * url:Login:
 * method:get
 * params:{
 *   username:'aaa'
 *   password:'222'
 * }
 * respoent :{
 *   code:1
 *   msg:"login success"
 * }
 */

app.get('/login', function (req, res, next) {
    console.log('/Login有人请求了');
    var query = req.query;
    console.log(query);
    res.json({
        code: 1,
        msg: "login success"
    })
})

