转化回调函数成[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
========================================

# 简介
> 把转化callback回调方式为Promise方式  
> 预转化nodejs内置的[fs](https://nodejs.org/api/fs.html), [dns](https://nodejs.org/api/dns.html), [zlib](https://nodejs.org/api/zlib.html), [crypto](https://nodejs.org/api/crypto.html)及 [child_process](https://nodejs.org/api/child_process.html)部分方法  
> 抄[mz](https://github.com/normalize/mz), 没有什么新意, 只是喜欢自己的写法而已  
> 除了mz之外, 另提供转换函数直接使用

# 使用方法

### 转换方法
```javascript
var callback2Promise = require('c2p'),
    fs = require('fs');
    
var readFile = callback2Promise(fs.readFile);
readFile(__FILE).then(function(txt) {
    console.log(txt);
});
```

### nodejs内置方法
```javascript
var fs = require('c2p/fs');
fs.readFile(__FILE).then(function(txt) {
    console.log(txt);
});
````

### 与[co](https://www.npmjs.com/package/co)一起使用简化异步
```javascript
var co = require('co');
var pf = require('c2p/fs');

co(function*() {
    var files = yield pf.readdir('.');
    console.log(files);

    for(var file of files) {
        var stat = yield pf.stat(file);
        if (stat.isFile()) {
            var content = yield pf.readFile(file);
            console.log("file name: %s\r\nfile content: %s\r\n\r\n", file, content);
        }
    }
}).catch(function(err) {
    console.error(err);
});
```

## License

  MIT