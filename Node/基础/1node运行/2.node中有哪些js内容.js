var a = 123;
let b = 456;
var arr = []
arr.push('1')
console.log(arr);
var str = 'fdasfas'
console.log(str.slice(0, 3));

// 总结：学习dom bom 之前的内容 node.js都一样,
//  变量 作用域
//  js 数据类型
//  高阶函数：闭包，函数柯理化 函数管道 ..
// 原型对象 ...

// console.log(locaStorage);
// 没有window
// console.log(window);
// console.log(document);
// console.log(history);

// 与浏览器有关的内置对象都没有
// bom dom localStorage  sessionStorage indexDB cookies ..

// node 有 自己的内置对象
// 与服务有关的所有操作 都提供了内置对象。cl
// 1：与系统相关的
// 2 与文件有关的
// 3：与网络有关的
// 4：安全，错误异常处理
// 5：数据处理，存储 buffer
//  。。。。。