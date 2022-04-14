// process 全局变量，记录所有的进程
// console.log(process);

// 获取环境变量
console.log(process.env);
// 自定义环境变量，区分不同的客户端
process.env.NODE_ENV = 'node_env'
console.log(process.env);
console.log(process.env.PATH);

// 获取命令行参数
console.log(process.argv);