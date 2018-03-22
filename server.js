const express = require ('express');

const serveStatic = require('serve-static');

const path = require('path');

const categoriesData = require('./data/categories.js')

const citiesData = require('./data/cities.js')

const itemsData = require('./data/items.js')

const app = express();

app.use('/', serveStatic(path.join(__dirname, '/public')));

//api
app.get('/api/cities', function(req,res){
  res.json(citiesData);
});

app.get('/api/:city/:categories', function(req,res){
  res.json(categoriesData);
});

app.get('/api/:city/:categories/:listing/:item', function(req,res){
  res.json(itemsData);
});



app.get('*', function(req,res){
  res.sendFile(__dirname + '/public/index.html');
});

const port = process.env.PORT || 5000;

app.listen(port);

console.log('server started on port ' + port);
