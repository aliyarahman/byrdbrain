//Load Express to make web server and app stuff easy

var express = require('express');
var app = express();
var path = require('path');

// Point to folder that will hold static assets
app.use(express.static('static'));


// Configure routes
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/force.html'));
});

app.get('/force', function(req, res) {
    res.sendFile(path.join(__dirname + '/force.html'));
});

app.get('/flat', function(req, res) {
    res.sendFile(path.join(__dirname + '/flat.html'));
});



// Tell the app to listen for requests on port 8080

app.listen(8080);
