var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hi");
 res.send("This page is to test");
 res.send("Nodejs project deployment");
 res.send("using Jenkins pipeline");
 res.send("Thanks");

});

app.listen(4001);
