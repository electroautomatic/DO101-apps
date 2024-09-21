// const express = require('express');
// app = express();

// var response;

// app.get('/', function (req, res) {

//     response = 'This is version 3 of the app.' + '\n';

//     //send the response to the client
//     res.send(response);

// });

// app.listen(8080, function () {
//   console.log('Server listening on port 8080...');
// });

var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World!');
});
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0'

app.listen(server_port, server_ip_address, function () {
  console.log( "Listening on " + server_ip_address + ", port " + server_port )
});