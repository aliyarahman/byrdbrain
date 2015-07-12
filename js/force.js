
// Some color palette codes

var black = "#282828";
var grey = "#5D624D";
var red = "#D35B5B";
var orange = "#EB9F3A";
var teal = "#1B5851";



// Getting real data (when its time)
// ==========================================
// Hardcoded JSON load - delete this once MongoDB connection is added

// var organizations = [ ]


// Load the JSON data from MongoDB


// Checks to make sure data is being loaded
//console.log(organizations[10].name);




// Experimental data

var dataset = {
	nodes: [
    {
	"name": "thePathway",
        "color": teal,
        "poc_led" : "yes",
        "membership" : "yes"
    },
    {
	"name": "one",
        "color": orange,
        "poc_led" : "yes",
        "membership" : "yes"
    },
    {
        "name": "two",
        "color": red,
        "poc_led" : "yes",
        "membership" : "yes"
    },
    {
        "name": "three",
        "color": teal,
        "poc_led" : "yes",
        "membership" : "yes"
    },
    {
        "name": "four",
        "color": orange,
        "poc_led" : "yes",
        "membership" : "yes"
    },
    {
        "name": "five",
        "color": red,
        "poc_led" : "yes",
        "membership" : "no"
    },
    {
        "name": "six",
        "color": red,
        "poc_led" : "yes",
        "membership" : "yes"
    },
    {
        "name": "seven",
        "color": teal,
        "poc_led" : "no",
        "membership" : "yes"
    },
  
    {
        "name": "eight",
        "color": teal,
        "poc_led" : "yes",
        "membership" : "yes"
    },
    {
        "name": "nine",
        "color": red,
        "poc_led" : "no",
        "membership" : "yes"
    },
    {
        "name": "ten",
        "color": orange,
        "poc_led" : "yes",
        "membership" : "yes"
    },
    {
        "name": "eleven",
        "color": orange,
        "poc_led" : "yes",
        "membership" : "yes"
    }
  ],
    edges:
  [
    { source: 0, target: 1 },
    { source: 0, target: 2 },
    { source: 0, target: 3 },
    { source: 0, target: 4 },
    { source: 0, target: 5 },
    { source: 0, target: 6 },
    { source: 0, target: 7 },
    { source: 0, target: 8 },
    { source: 0, target: 9 },
    { source: 0, target: 10 },
    { source: 0, target: 11 },
  ]
};



// Initiates the force layout


