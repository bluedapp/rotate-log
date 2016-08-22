# rotate-log 简介

封装一个可以实现"轮转日志文件"的包

# 开发语言
nodejs

# 实现原理
主要是封装了'winston'和'winston-daily-rotate-file'来实现的并配置了默认的参数。

## 使用

```javascript
const rotate = require('rotate-log');

const debug = rotate({
  name: 'debug',
  path: 'xx/xx/logs', // default logs
  pattern: '.yyyy-MM-dd-HH.log'  //default .yyyy-MM-dd-HH.log  
}).info;

// logs/debug.2015-12-15-15.log
```
