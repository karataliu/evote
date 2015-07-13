var evote   = require('./vote.js');
var express = require('express');
var app     = express();
var url     = require('url');

app.use(express.static('./'));

app.get('/vote', function(req,res){
  var q = url.parse(req.url, true).query;
  console.log(JSON.stringify(q));
  if(q.vote){
    evote.add(q.vote, 'anonymous');
  }

  var html = evote.genForm();
  res.send(html);
});

app.listen(process.env.PORT || 6060);

