var express = require('express');
var app = express();

// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/index.html');
//   // res.json({data: 'Super Person!'});
// })

app.get('/data', function(req, res){
  res.json({name: "Saturn", size: 90876})
})

app.listen(3000, function(){
  console.log('App running on port' + this.address().port);
})
