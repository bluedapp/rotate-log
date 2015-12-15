# rotate-log

Rotate log files

## Usage

```javascript
const rotate = require('rotate-log');

const debug = rotate({
  name: 'debug',
  path: 'xx/xx/logs', // default logs
  pattern: '.yyyy-MM-dd-HH.log'  //default .yyyy-MM-dd-HH.log  
}).info;

// logs/debug.2015-12-15-15.log
```
