/**
 * rotate log
 */

'use strict';

const winston = require('winston');
const mkdirp = require('mkdirp');
const Rotate = require('winston-daily-rotate-file');
const fs = require('fs');
const path = require('path');
let loggers = [];


module.exports = function(options) {
  if(!options.name){
    return;
  }
  const name = options.name;
  const logPath = options.path || 'logs';
  const pattern = options.pattern || '.yyyy-MM-dd-HH.log'
  const maxFiles = options.maxFiles || 24 * 7 // 默认打印7天的
  if(loggers[name]){
    return loggers[name];
  }
  if (!fs.existsSync(logPath)) {
    mkdirp.sync(options.path);
  }
  const filename = path.join(logPath, name);
  const opts = {
    maxFiles: maxFiles,
    datePattern: pattern,
    filename: filename,
    timestamp: function () {
        return (new Date()).toLocaleString()
    }
  };
  loggers[filename] = new winston.Logger({
    transports: [
      new (Rotate)(opts)
    ]
  });
  return loggers[filename];
};
