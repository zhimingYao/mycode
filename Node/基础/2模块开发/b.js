/** b中可以读取a中变量
 * request()
 * 作用：写入模块，并运行模块中代码
 * 参数：(str)1.文件路径 2.模块名
 * 返回值：1.默认{} 2.模块中module.exports的赋值 */ 

var a_module = require('./a.js')
console.log(a_module);


var b = '123'

/**注意：
 * 1.b模块中不能更改 a 模块中变量赋值
 * 2.如果 a 中赋值是对象b中可以修改*/ 
a_module.test= 123;
console.log(a_modele);
a_module.obj.a = 456;