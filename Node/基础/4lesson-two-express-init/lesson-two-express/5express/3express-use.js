/**
 * app.use([path,]callback) 中间件处理函数
 * 作用：将node中间件挂在到服务上
 * 参数：callback 必须欧的；path:可有可数
 * 
 * 1:next 是什么？
 * 2:所有use中的 req 、res 是同一个 请求对象
 */ 

var express = require('express')
var app = express()
app.listen(3000,function(){
    console.log('3000::: node run');
})
app.use(function(req,res,next){
    req.test = '测试req是否为同一个'
    console.log(req.url);
    console.log(req.test);

    console.log('user one');
    // 管道函数：表示当前use执行结束执行下一个use 函数
    // 如果next不执行；下一个use不会执行
    next()
})
app.use(function(req,res,next){
    console.log(req.url);
    console.log('user two');
    console.log(req.test); // ---> 所有use的req是同一个；同理 res也是同一个

    next()
})
app.use(function(req,res,next){
    console.log(req.url);
    console.log(req.test);

    console.log('user tree');

    next()
})

// 2 按需执行的回到函数
// 客户端url 地址可以[匹配]到 /test
app.use('/test',function(req,res,next){
    // 这里执行；需要 url地址test
    console.log('use test run');
    next()
})

// /test/a
// 可以匹配到 /test 和 /test/a 
app.use('/test/a',function(req,res,next){
    // 这里执行；需要 url地址test
    console.log('use a run');
    next()
})
// app.use() callback 中必须执行next() 
// 如果没有会阻止下面 app.use() 执行
// 管道函数：执行完一个函数执行下一个函数 
// next 是管道函数

// express 地址规律
// 如果一个回调函数是通过地址控制执行的。
// 是通过正则匹配方式。匹配到几个触发集合函数

/**
 * 总结
 * 1.use触发条件
 * 2。next 管道函数
 * 3.use中req、res同一个
 * 4.path控制 函数执行条件
 */