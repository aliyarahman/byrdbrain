
// Candidates listed in order of: Clinton, O'Malley, Sanders
// For white_poc_split: 0 is white, 1 is POC
// For further breakdown: 0 = black, 1 = latino, 2 = api, 3 = native, 4 = arab

var white = "#ffffff";
var black = "#282828";
var grey = "#aaaaaa";
var red = "#c30a0c";
var yellow = "#f9cc0a";
var blue = "#000099";
var purple = "#330066";
var green = "#058b45";
var w = 960;
var h = 500;

// create canvas
var svg = d3.select('body').append("svg:svg")
.attr("class", "chart")
.attr("width", w)
.attr("height", h )
.append("svg:g")
.attr("transform", "translate(10,470)");

x = d3.scale.ordinal().rangeRoundBands([0, 600], 0.20)
y = d3.scale.linear().range([0, h-50])
z = d3.scale.ordinal().range([white, yellow, green, blue, grey, purple])

// 4 columns: campaign,white,black,latino,asian,native,arab
var matrix = [
    [ 1, 68, 13, 8, 8, 0, 3],
    [ 2, 91, 7, 0, 2, 0, 0],
    [ 3, 90, 3, 7, 0, 0, 0]
];

var remapped =["white","black","latino", "asian", "native", "arab"].map(function(dat,i){
    return matrix.map(function(d,ii){
        return {x: ii, y: d[i+1] };
    })
});
var stacked = d3.layout.stack()(remapped)

x.domain(stacked[0].map(function(d) { return d.x; }));
y.domain([0, d3.max(stacked[stacked.length - 1], function(d) { return d.y0 + d.y; })]);


// Add a group for each column.
var valgroup = svg.selectAll("g.valgroup")
.data(stacked)
.enter().append("svg:g")
.attr("class", "valgroup")
.style("fill", function(d, i) { return z(i); })
.style("stroke", function(d, i) { return d3.rgb(z(i)).darker(); });

// Add a rect for each date.
var rect = valgroup.selectAll("rect")
.data(function(d){return d;})
.enter().append("svg:rect")
.attr("x", function(d) { return x(d.x); })
.attr("y", function(d) { return -y(d.y0) - y(d.y); })
.attr("height", function(d) { return y(d.y); })
.attr("width", x.rangeBand());