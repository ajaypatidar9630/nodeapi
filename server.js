var express = require('express');
var app = express();
var fs = require("fs");

app.get('/partner/customer', function (req, res) {
   fs.readFile( __dirname + "/" + "customers.json", 'utf8', function (err, data) {
     
      res.send( data );
   });
})



var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})