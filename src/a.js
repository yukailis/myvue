var http = require("http") //服务器模块
var url = require("url") //路径模块
var queryString = require("querystring") //路径模块
var fs = require("fs"); //磁盘操作
var path = require("path"); //磁盘操作
http.createServer(function (request, response) {
 if (request.url=="/") { //说明是当前文档的首页index
 	var pathname = "./index.html"
 		response.writeHead(200,{"content-Type":"text/html"})
 		fs.readFile(pathname,function(err,data) {
 			if (err) {
 				response.end("undefined")
 			}else{
 				response.end(data)
 			};
 		})
 }else{
 	var pathname =__dirname+url.parse(request.url).pathname
 	ext = path.extname(pathname).split(".")[1];
 	response.writeHead(200,{"content-Type":"text/"+ext})
 	fs.readFile(pathname,function(err,data) {
 		//response.end(data)
 		jsonext = request.url.split("=")[1]
     	jsonpstr = jsonext+"("+data+")"
		response.end(jsonpstr)
		//response.jsonp(data)
 	})
 };
  
}).listen(8066);

