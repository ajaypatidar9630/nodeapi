var express = require('express');
var app = express();
var fs = require("fs");
const { Server } = require('http');

app.get('/partner/customer', function (req, res) {
   fs.readFile( __dirname + "/" + "customers.json", 'utf8', function (err, data) {
     
      res.send( data );
   });
})



const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
   console.log('server listen');
}

)
