// 노드 기본 모듈

var http = require("http");

http.createServer(function (req, res) {
	var body = "hello Server";
	// res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    // res.end("안녕하세요");
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
	res.end("<h1>안녕하세요</h1>");
}).listen(3000);    // port 번호
console.log('server is Started!');