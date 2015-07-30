// Load required tools
var express = require("express");
var cors = require("cors");  // This lets us use JSON more easily during development


// Initiate the app and let is pull from cross-origin sources
var app = express();
app.use(cors());

// Point to the static files folder
app.use(express.static(__dirname + '/static'));


// Define a landing route to open the force layout
app.get('/', function(req, res) {
    res.redirect('/force');
});

app.get('/force', function(req, res) {
    res.sendFile(__dirname+'/force.html');
});

app.get('/flat', function(req, res) {
    res.sendFile(__dirname+'/flat.html');
});

app.get('/campaigns', function(req, res) {
    res.sendFile(__dirname+'/campaigns.html');
});

app.get('/campaigns_start', function(req, res) {
    res.sendFile(__dirname+'/campaigns_start.html');
});


app.listen(8080);