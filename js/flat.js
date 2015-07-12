
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

var spaceCircles = [
    {
        "x_pos":20,
        "y_pos":150,
        "radius":20,
        "color": teal,
        "poc_led" : "yes",
        "membership" : "yes"
    },
    {
         "x_pos":60,
        "y_pos":150,
        "radius":20,
        "color": orange,
        "poc_led" : "yes",
        "membership" : "yes"
    },
    {
         "x_pos":100,
        "y_pos":150,
        "radius":20,
        "color": red,
        "poc_led" : "yes",
        "membership" : "yes"
    },
    {
        "x_pos":140,
        "y_pos":150,
        "radius":20,
        "color": teal,
        "poc_led" : "yes",
        "membership" : "yes"
    },
    {
        "x_pos":20,
        "y_pos":400,
        "radius":20,
        "color": orange,
        "poc_led" : "yes",
        "membership" : "yes"
    },
    {
         "x_pos":60,
        "y_pos":400,
        "radius":20,
        "color": red,
        "poc_led" : "yes",
        "membership" : "no"
    },
    {
         "x_pos":100,
        "y_pos":400,
        "radius":20,
        "color": red,
        "poc_led" : "yes",
        "membership" : "yes"
    },
    {
         "x_pos":140,
        "y_pos":400,
        "radius":20,
        "color": teal,
        "poc_led" : "no",
        "membership" : "yes"
    },
  
    {
        "x_pos":20,
        "y_pos":650,
        "radius":20,
        "color": teal,
        "poc_led" : "yes",
        "membership" : "yes"
    },
    {
         "x_pos":60,
        "y_pos":650,
        "radius":20,
        "color": red,
        "poc_led" : "no",
        "membership" : "yes"
    },
    {
        "x_pos":100,
        "y_pos":650,
        "radius":20,
        "color": orange,
        "poc_led" : "yes",
        "membership" : "yes"
    },
    {
        "x_pos":140,
        "y_pos":650,
        "radius":20,
        "color": orange,
        "poc_led" : "yes",
        "membership" : "yes"
    }
];



// Creates the SVG container that will hold only the data visualization (not legends or titles)

var svgContainer = d3.select("body")
    .append("svg")
    .attr("width", "100%")
    .attr("height", "3000");


// Add some pattern definitions as an option to use for the circle's fill

var defs = svgContainer.append("defs");
var dashWidth = 4;
var g = defs.append("pattern")
    .attr('id', 'redhash')
    .attr('patternUnits', 'userSpaceOnUse')
    .attr('width', dashWidth)
    .attr('height', dashWidth)
    .attr('x', 0).attr('y', 0)
    .append("g")
        .style("stroke", red)
        .style("stroke-linecap", "square")
        .style("stroke-opacity", 0.8)
        .style("stroke-width", dashWidth*.5)
        .style("fill", red);

g.append("path").attr("d", "M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2");



// Add the circles to the page (no style yet)

var circles = svgContainer.selectAll("circle")
    .data(spaceCircles)
    .enter()
    .append("circle");


// Style and position the circles

var circleAttributes = circles
    .attr("cx", function (d) { return 8*d.x_pos; })
    .attr("cy", function (d) { return d.y_pos; })
    .attr("r", 100)
    .style("fill-opacity", 0.8)
    .style("fill", function(d) { 
        var fillcolor;
        if (d.membership == "no") {
            fillcolor= "url(#redhash)";
        }
        else {
            fillcolor = d.color;
        }
        return fillcolor;
    })
    .style("stroke-width", 5)
    .style("stroke", function (d) { return d.color; })
    .style("stroke-dasharray", function (d) { 
        var strokestyle;
        if (d.poc_led == "no") {
            console.log("not");
            strokestyle = "10,10";
        }
        else if (d.poc_led == "yes") {
            strokestyle = "1,0"
        }
        return strokestyle;
    });
