const express = require("express");
const consign = require("consign");
const bodyParser = require("body-parser");

var app = express();

app.set('view engine', 'ejs');
app.set('views', 'app/views');

//midleware
app.use(express.static('app/public'));
app.use(bodyParser.urlencoded({extended: true}));

//efetua auto load 
consign()
  .include("app/routes")
  .then("app/models")
  .then("app/controllers")
  .into(app)

module.exports = app;