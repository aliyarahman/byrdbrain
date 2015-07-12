
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

var nodes = [
    {
	   "name": "PathwayProject",
        "color": "transparent",
        "poc_led" : "yes",
        "membership" : "yes"
    },
    {
    	"name": "NAACP",
        "color": orange,
        "poc_led" : "yes",
        "membership" : "yes"
    },
    {
        "name": "NALP",
        "color": red,
        "poc_led" : "yes",
        "membership" : "yes"
    },
    {
        "name": "BYP100",
        "color": teal,
        "poc_led" : "yes",
        "membership" : "yes"
    },
    {
        "name": "Higher Heights for America",
        "color": orange,
        "poc_led" : "yes",
        "membership" : "yes"
    },
    {
        "name": "PowerPAC+",
        "color": red,
        "poc_led" : "yes",
        "membership" : "no"
    },
    {
        "name": "Lupe Fund, Inc",
        "color": red,
        "poc_led" : "yes",
        "membership" : "yes"
    },
    {
        "name": "CBCF",
        "color": teal,
        "poc_led" : "no",
        "membership" : "yes"
    },
  
    {
        "name": "USHLI",
        "color": teal,
        "poc_led" : "yes",
        "membership" : "yes"
    },
    {
        "name": "Arizona Black Voter Alliance",
        "color": red,
        "poc_led" : "no",
        "membership" : "yes"
    },
    {
        "name": "APAICS",
        "color": orange,
        "poc_led" : "yes",
        "membership" : "yes"
    },
    {
        "name": "AAA-Fund",
        "color": orange,
        "poc_led" : "yes",
        "membership" : "yes"
    }
];

var links = [
    { "source": 0, "target": 1 },
    { "source": 0, "target": 2 },
    { "source": 0, "target": 3 },
    { "source": 0, "target": 4 },
    { "source": 0, "target": 5 },
    { "source": 0, "target": 6 },
    { "source": 0, "target": 7 },
    { "source": 0, "target": 8 },
    { "source": 0, "target": 9 },
    { "source": 0, "target": 10 },
    { "source": 0, "target": 11 },
];



// Initiates the force layout

var width = 960;
var height = 650;


var svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height);


var force = d3.layout.force()
    .size([width,height])
    .nodes(nodes)
    .links(links)
    .linkDistance(width/4)
    .charge(-800)
    .start();


// Draw the text labels

// Draw the links
var edge = svg.selectAll('line')
    .data(links)
    .enter()
    .append('line')
    .attr('class', 'link')
    ;

// Draw the organization nodes
var node = svg.selectAll("circle")
    .data(nodes)
    .enter()
    .append('circle')
    .attr('r', 20)
    .style("fill", function(d) { 
        return d.color;})
    .style("fill-opacity", 0.8);

var labels = svg.selectAll("text")
    .data(nodes)
    .enter()
    .append("text")
    .attr("fill", black)
    .attr("font-size", "24px")
    .text(function(d) { return d.name; }); 


force.on("tick", function() {
    edge.attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });
    node.attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; })
    labels.attr("transform", function(d) {
        return "translate(" + d.x + "," + d.y + ")";
    });
}); // End tick func