const http = require('http');
const dt = require ('./firstModule.js');


http.createServer(function(req, res){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.write("The date and current time is: "+dt.mydate());
	res.end();
}).listen(8080);