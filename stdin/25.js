process.stdin.resume();
var fs = require('fs');
var response = fs.readSync(process.stdin.fd, 100, 0, "utf8");
process.stdin.pause();
