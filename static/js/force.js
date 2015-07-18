
// Some color palette codes

var black = "#282828";
var grey = "#aaaaaa";
var red = "#c30a0c";
var yellow = "#f9cc0a";
var blue = "#000099";
var purple = "#330066";
var green = "#058b45";


// Load data - and let this be a wrapper for all other code, so actions don't start until the data is loaded.

d3.json("http://localhost:3000/organizations", function(error, nodes) {
    d3.json("http://localhost:3000/links", function(error, links) {

        // Dragging behavior


        var node_drag = d3.behavior.drag()
        .on("dragstart", dragstart)
        .on("drag", dragmove)
        .on("dragend", dragend);

        function dragstart(d, i) {
            force.stop() // stops the force auto positioning before you start dragging
        }

        function dragmove(d, i) {
            d.px += d3.event.dx;
            d.py += d3.event.dy;
            d.x += d3.event.dx;
            d.y += d3.event.dy; 
            tick(); // this is the key to make it work together with updating both px,py,x,y on d !
        }

        function dragend(d, i) {
            d.fixed = true; // of course set the node to fixed so the force doesn't include the node in its auto positioning stuff
            tick();
            force.resume();
        }


        // Initiates the force layout

        var width = 1400;
        var height = 1050;


        var svg = d3.select("body")
            .append("svg")
            .attr("width", width)
            .attr("height", height);


        var force = d3.layout.force()
            .size([width,height])
            .nodes(nodes)
            .links(links)
            .linkDistance(function(d){
        return (Math.random()*width/4+100);
            })
            .charge(-400)
            .gravity(.05)
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
            .attr('r', 50)
            .style("fill", function(d) { 
                var fillcolor;
                if (d.community.search("Black and brown") >-1) {
                    fillcolor = grey;
                }
                else if (d.community.search("African") >-1 || d.community.search("Black") >-1) {
                    fillcolor = red;
                }
                else if (d.community.search("Latino") >-1 || d.community.search("Hispanic") >-1 || d.community.search("Latina") >-1) {
                    fillcolor = green;
                }
                else if (d.community.search("of color") >-1) {
                    fillcolor = yellow;
                }
                else if (d.community.search("Asian") >-1) {
                    fillcolor = blue;
                }
                else if (d.community.search("Native") >-1) {
                    fillcolor = purple;
                }
                else {
                    fillcolor = black;
                }

                return fillcolor;})
            .style("fill-opacity", 0.8)
            .call(node_drag);

        var labels = svg.selectAll("text")
            .data(nodes)
            .enter()
            .append("text")
            .attr("fill", black)
            .attr("font-size", "24px")
            .text(function(d) { return d.name; }); 

        function tick() {
            edge.attr("x1", function(d) { return d.source.x; })
                .attr("y1", function(d) { return d.source.y; })
                .attr("x2", function(d) { return d.target.x; })
                .attr("y2", function(d) { return d.target.y; });
            node.attr("cx", function(d) { return d.x; })
                .attr("cy", function(d) { return d.y; })
            labels.attr("transform", function(d) {
                return "translate(" + d.x + "," + d.y + ")";
            });
        }

        force.on("tick", tick); // End tick func

    });
});