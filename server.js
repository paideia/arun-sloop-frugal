var http=require("http");

var server=http.createServer(function(req,res){
	res.writeHead(200,{'content-Type':'text/html'});
	res.end('<h1>Strong Loop!!</h1>');
});
var port=Number(process.env.STRONGLOOP_PORT || 3000);
server.listen(port);
