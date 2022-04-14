/**导入node内置fs模块
 * fs模块：处理文件
 */

var fs = require('fs')
// console.log(fs);
/* 写文件 I-->input*/
console.log('111');
fs.writeFile('./a.txt', 'aaaaaaaaaa', function (err, data) {
    // if (err) {
    //     throw new Error(JSON.stringify(err))
    // }
    /**fs.writeFile(path,content,callback)
     * 作用：异步写文件，先清空再写入
     * 参数：1.文件路径 2.写入内容 3.异步执行的回调函数
     * 回参：1.错误：没错误null 2.undefined
     */
    if (err) throw new Error(JSON.stringify(err));
    console.log('写完了');
    console.log('222');
})
console.log('333');
/* 读文件 O-->output*/
fs.readFile('./b.txt', function (err, data) {
    console.log(data);
    console.log(String(data));
    console.log('读完了');
    /**fs.readFile(path,content,callback)
     * 作用：异clear步读文件
     * 参数：1.文件路径 2.异步执行的回调函数||其他
     * 回参：1.错误：没错误null 2.读取内容，需要String() 转换
     */
})

/**node api 通用规律
 * api(callback) api中回调函数是异步执行
 */