
var http = require("http");

http.createServer(function (request, response){
//send http header
//HTTP status code : 200 : OK
// content type: text/plain
response.writeHead(200,{'Content-type': 'text/plain'});

//send response data "Hello World"
response.end('Hello World\n');
}).listen(8888);

//end log print   
console.log ('Servere running at http://127.0.0.1:8888/');
