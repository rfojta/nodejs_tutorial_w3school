var http = require('http');

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello World!');
}).listen(8080); // todo put 8080 into command line parameter
	
// todo find out what is my file name
console.log(__filename + " is running");
