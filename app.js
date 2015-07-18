// Load required tools
var express = require("express");
var cors = require("cors");
var path = require("path");


// Initatie the app and let is pull from cross-origin sources
var app = express();
app.use(cors());

// Point to the static files folder
app.use(express.static(path.join(__dirname, 'static')));


// Define a landing route to open the force layout
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+'/force.html'));
});

app.get('/force', function(req, res) {
    res.sendFile(path.join(__dirname+'/force.html'));
});

app.get('/flat', function(req, res) {
    res.sendFile(path.join(__dirname+'/flat.html'));
});


app.listen(8080);