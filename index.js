
var express = require('express');
var app = express();
var port = process.env.PORT || 8090;


app.listen(port);
console.log('Server started! At http://localhost:' + port);


app.get('/api/users', function(req, resq) {
    var qu = req.param('q');

     
		var Scraper = require ('images-scraper')
		, bing = new Scraper.Bing();
	
	bing.list({
		keyword: qu,
		num: 150,
		detail: true
	})
	.then(function (res) {
		//console.log('first 10 results from bing', res);
		resq.send(res);
	}).catch(function(err) {
		console.log('err',err);
	})
	
	
	

  
    
	});
	






	