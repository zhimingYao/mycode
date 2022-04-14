console.log('a module run');
var obj = {
    a:123
}

var test = 'test str'
module.exports = {
    obj:obj,
    test:test
}
 /**1.module.exports 是否可以看到结果
  * 2.其他模块中是否能够更改本模块中变量
  */
//  setTimeout(()=>{
//      console.log(test);
//      console.log(obj);
//  },3000)