var http = require('http');
var hostname = 'localhost';
var port = 3000;
var fs = require('fs');
var path = require('path');


var server = http.createServer(function(req, res){
	console.log('Request url is: ' + req.url + ' and request method is: ' + req.method);
	
	if(req.method == 'GET'){
		  var fileurl;
		  var filepath;
		  
		  if(req.url == '/'){
			  fileurl = '/index.html';
		  }else{
			  fileurl = req.url;
		  }
		  
		  var filePath = path.resolve('./public'+fileurl);
		  var fileExt = path.extname(filePath);
		  console.log('fileExt: ' + fileExt);
		  
		  if(fileExt == '.html'){
			  fs.exists(filePath,function(exists){
				  if(!exists){
					  res.writeHead(404, {'Content-Type': 'text/html'});
					  res.end('<h1>Error 404: ' + filePath + ' not found </h1>');
					  return;
				  }else{
					  res.writeHead(200, {'Content-Type': 'text/html'});
					  fs.createReadStream(filePath).pipe(res);
					  return;
				  }
			  });
		  }else{
			  console.log('fileExt is not .html');
			  res.writeHead(404, {'Content-Type': 'text/html'});
			  res.end('<h1>Error 404: ' + filePath + ' not a HTML file </h1>');
			  return;
		  }
	}else{
		console.log('req.method is not GET');
		res.writeHead(404, {'Content-Type': 'text/html'});
		  res.end('<h1>Error 404: ' + req.method + ' not supported </h1>');
		  return;
	}
	
});

server.listen(port,hostname,function(){
	console.log('Server running at http://' + hostname + ':' + port + '/');
});