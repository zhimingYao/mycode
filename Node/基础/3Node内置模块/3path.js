// path模块：处理路径
var path = require('path');
// console.log(path);

// 注意：path只负责处理路径字符串，不负责判断路径是否存在
var str = path.join(__dirname,'./cc.js','c.js')
console.log(str);
// 将相对路径变成绝对路径
console.log(path.resolve('./1.js'));
console.log(path.resolve('../a/b'));
console.log(path.resolve('./1fs.js'));
console.log(path.resolve('./a.js'));
console.log('-----------------');
/**path.join()
 * 作用：将几个参数路径，拼接为【有效的】文件路径
 */
console.log(path.join(__dirname,'a.js'));
console.log(path.join('/a','/b','c.js'));
console.log(path.join('a','c/f','d','d.js'));//将无效路径变为有效路径