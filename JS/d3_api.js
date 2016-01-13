3/**
	@author: Amol Kapoor
	@date: 11-9-15
	@version: 0.1

	Description: Displays user data using d3
*/



/**
	Helper for ordering nodes on hover
*/
d3.selection.prototype.moveToFront = function() {
  return this.each(function(){
    this.parentNode.appendChild(this);
  });
};

/**
	Creates a d3 force layout graph

	@param: DOMelement; html element; where the map is going to go
	@param: graph; {}
		nodes: list of nodes
		edges: list of edges

*/
function createGraph(DOMelement, graph) {

	//Sets the initial graph parameters to the width and height of the screen
	var width = Math.floor($(DOMelement).width()),
	    height = Math.floor($(DOMelement).height());

	//Sets the root node and its location relative to parent
	
	var root = graph.nodes[0];
	root.x = width / 2;
 	root.y = height / 2;
  	root.fixed = true;

  	//Creates an SVG element...
	var svg = d3.select(DOMelement)
   		.append("svg")
			.attr("viewBox", "0 0 " + width + " " + height)
            .attr("preserveAspectRatio", "xMidYMid meet");

    //and apppends a grouping obj that will hold the rest of the map
	var networkContainer = svg.append("g").attr("class", "networkContainer");
  	
  	//initializes the force graph
	var force = d3.layout.force()
	    .charge(function(d) {
	    	if(d.layer === 0) {
	    		return -10000;
	    	} else if (d.layer === 1) {
	    		return -10000;
	    	}

	    	return -500;
	    })
	    .linkDistance(function(d) {
	    	if(d.layer === 1) {
	    		return 300;
	    	}

	    	return 200;
	    })
	    .size([width, height])
		.nodes(graph.nodes)
		.links(graph.links)
		.start();

	//Generates the links and nodes in the force graph
	var link = networkContainer.selectAll(".link")
		.data(graph.links)
	.enter().append("line")
		.attr("class", "link")
		.style("stroke-width", function(d) { return 3; })
		.style("stroke", '#ACACB2');

	//nodes also have special params set for mouse over functionality
	var node = networkContainer.selectAll(".node")
		.data(graph.nodes)
	.enter().append("g")
		.attr("class", "node button")
		.call(force.drag)
		.on("mouseover", function(d) {

			d3.select(this).moveToFront();

		    fade(d, .1);

			if(d.center)
				return;

			d3.select(this).select(".node-circle").transition().attr("r", function(d) { return d.size*3});
		    d3.select(this).select(".node-text").transition().text(function(d) { 
		    	return d.value;
		    });

		})
		.on("mouseout", function(d) {

			fade(d, 1);

			if(d.center)
				return;

			d3.select(this).select(".node-circle").transition().attr("r", function(d) { return d.size});
		    d3.select(this).select(".node-text").transition().text(function(d) { 
				return d.label;
			});

		});

	node.append('circle')
		.attr("r", function(d) { return d.size; })
		.attr("class", "node-circle")
		.style("fill", function(d) { return d3.rgb(d.color); })
		.style("stroke", 'black')


	node.append("text")
	    .attr("text-anchor", "middle")
	    .attr("dy", 5)
		.attr("class", "node-text")
		.text(function(d) {	
			return d.label;		
		});

	node.append("svg:image")
	   .attr('x',-100)
	   .attr('y',-100)
	   .attr('width', 200)
	   .attr('height', 200)
	   .attr("xlink:href",function(d) {
	   	if(d.center)
	   		return "img/logo1.png"
	   });

	//Defines how the graph moves
	force.on("tick", function() {
		link.attr("x1", function(d) { return d.source.x; })
		    .attr("y1", function(d) { return d.source.y; })
		    .attr("x2", function(d) { return d.target.x; })
		    .attr("y2", function(d) { return d.target.y; });

		node
			.attr("transform", function(d) { 
				//if(d.center)
					//return "translate(" + width/2 + "," + height/2 + ")";
				return "translate(" + d.x + "," + d.y + ")"; 
			});
	});	

	var zoomScale = .8;
	var zoomWidth = (width - zoomScale*width)/2;
	var zoomHeight = (height - zoomScale*height)/2;

	//makes the graph movable
	svg.call(zoom, networkContainer);

	networkContainer.attr("transform","translate(" + zoomWidth +',' + zoomHeight + ")scale("+zoomScale+','+zoomScale+")");

	//Sets up graph linking objects for fading, and calls respectively
	var linkedByIndex = {};
    
    graph.links.forEach(function(d) {
        linkedByIndex[d.source.index + "," + d.target.index] = 1;
    });

    node.on("click", click);

    function click(d) {

    	if(d.center) {
    		window.location.href = "http://realrep.diagraphictech.com";
			return;
    	}

    	svg.on("mousewheel.zoom", null).on('wheel.zoom', null);
    	$('html,body').animate({ scrollTop:   $('#' + d.scrollTo).offset().top},300);
    	$('.suggestion').fadeToggle();
    }

    /**
		Returns whether two nodes are connected

		@param: a; d3 node; the first node 
		@param: b; d3 node; the second node
    **/
    function isConnected(a, b) {
        return linkedByIndex[a.index + "," + b.index] || linkedByIndex[b.index + "," + a.index] || a.index == b.index;
    }

    /**
		Sets stroke-opacity of all nodes and links attached to d to opacity 
    **/
	function fade(d, opacity) {
        node.style("stroke-opacity", function(o) {
            thisOpacity = isConnected(d, o) ? 1 : opacity;
            this.setAttribute('fill-opacity', thisOpacity);
            return thisOpacity;
        });

        link.style("stroke-opacity", function(o) {
            return o.source === d || o.target === d ? 1 : opacity;
        });
    }



	/**
		Handles zooming stuff. Specifically trigerrs zoom behavior. 

		@param: selection; d3 element (svg); passed in by select call
		@param: networkContainer; d3 element (g); element that contains the map in question 
	**/
	function zoom(selection, networkContainer) {
		var innerzoom = d3.behavior.zoom()
			.scale(zoomScale)
			.translate([zoomWidth,zoomHeight])
	    	.scaleExtent([.1, 10])
	    	.on("zoom", function() {
	    		zoomed(networkContainer);
	    	});

		selection.call(innerzoom)
	}

	/**
		Explains how an element should behave on zoom behavior

		@param: container; d3 element (g); element that contains the map in question
	**/
	function zoomed(container) {
	  	container.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
	}

	$('.enable-zoom').click(function() {
		svg.call(zoom, networkContainer);
		 $('.suggestion').fadeToggle();
	});

} 

