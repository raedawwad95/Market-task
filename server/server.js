var express = require('express');
var bodyParser = require('body-parser');

var app = express();


app.get('/', (req, res) => res.send('Hello World!'))

module.exports= app;