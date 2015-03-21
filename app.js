var express = require('express');
var app = express();
app.use(express.static(path.join(__dirname, 'public')));
var members = require('members.js');
app.get('/client_login', function(req, res) {
res.status(200);
members.main();
  });
var login = require('client_login.js');
app.get('/client_login', function(req, res) {
res.status(200);
login.main();
  });