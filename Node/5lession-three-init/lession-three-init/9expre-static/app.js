var express = require('express');
var app = express();
var path = require('path');
app.listen(3000,function () {
    console.log('3000');
})

// 设置静态资源路径
/* 为了避免node运行文件路径不同，导致找不到文件 */
/**
 * localhost:3000/   ----> pubic 目录
 * localhost:3000/app  ----> publick/app  
 * 默认 publick/app/index.path
 * localhost:3000/app/css  -----> publick/app/css
 * localhost:3000/manager/test.css  -----> public/magager/test.css 
 */
app.use(express.static(path.resolve(__dirname,'./public')));
app.use('/download', express.static(path.resolve(__dirname, './download')));

/**
 * 服务商的文件，可以被访问：需要指定静态资源目录
 * 可以指定多个目录为静态资源目录
 * 被指定的静态目录可以通过服务器查看文件
 */

/**静态资源使用
 * 1.用来整合前端代码
 */