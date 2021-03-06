var express =  require('express'), http = require('http'), hostname = 'localhost', port = 3000;

var app = express();

app.use(function(req, res, next){
	console.log('Request url is: ' + req.url + ' and request method is: ' + req.method);
	
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end('<html><body><h1>Hello World!</h1></body></html>');
});

var server = http.createServer(app);

server.listen(port, hostname, function(){
	console.log('Server running at http://' + hostname + ':' + port + '/');
});