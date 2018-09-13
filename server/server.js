var express = require('express');
var bodyParser = require('body-parser');
var db = require ('./db');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => res.send('Hello World!'))

module.exports= app;