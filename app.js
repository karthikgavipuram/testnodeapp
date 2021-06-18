var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hi This page is to test Nodejs project deployment using Jenkins pipeline Thanks");
});

app.listen(4001);
