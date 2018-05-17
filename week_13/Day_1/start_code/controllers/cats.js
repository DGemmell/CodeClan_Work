var express = require('express');
var catRouter = new express.Router();


var cats = ["Bengal", "British Shorthair", "Siamese"]

catRouter.get('/cats/:id', function(req, res){
  res.json({data: cats[req.params.id]});
});

catRouter.get('/cats', function(req, res) {
  res.json({cats});
});


catRouter.post('/cats', function(req, res){
  console.log(req.body);
  cats.push(req.body.cat);
  res.json({data: cats});
})

catRouter.put('/cats/:id', function(req, res){
  cats[req.params.id] = req.body.cat;
  res.json({data: cats});
})

catRouter.delete('/cats/:id', function(req, res){
  cats.splice(req.params.id, 1);
  res.json({data: cats});
})

module.exports = catRouter
