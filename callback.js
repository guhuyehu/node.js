// Node.js 异步编程的直接体现就是回调
// 异步编程依托于回调来实现，但不能说使用了回调后程序就异步化了。
// 回调函数在完成任务后就会被调用，Node 使用了大量的回调函数，Node 所有 API 都支持回调函数。


var fs = require('fs');
// 阻塞代码实例
// var data = fs.readFileSync('input.txt');

// console.log(data.toString());

// 非阻塞代码实例
fs.readFile('input.txt', function(err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data.toString());
})

console.log('结束');
