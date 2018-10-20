
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;


app.listen(port);
console.log('Server started! At http://localhost:' + port);

// routes will go here
app.get('/api/users', function(req, res) {
    var qu = req.param('q');

     
    const DuckDuckScrape = require("duck-duck-scrape");
    const ddg = new DuckDuckScrape();
    var search = ddg.image(qu, -1, "en-us"); 

    search.then((data) => {
     //res.end(JSON.stringify(data));
     res.send(data);

    });


  
    //res.send(qu);
  });