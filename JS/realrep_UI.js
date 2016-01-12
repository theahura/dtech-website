/**
	nodes.push({
			layer: 1, 
			label: sortedKeys[index], 
			value: dataObj[sortedKeys[index]], 
			color: 'red',
			size: Math.max(20, dataObj[sortedKeys[index]])
		});

	edges: {source: reverseNodes[sortedKeys[index]], target: reverseNodes[currentLoadingNodeLabel]}
**/

var nodes = [
	{layer: 0, center: true, label: '', value: '', color: 'black', size: 0, scrollTo: 'realrep'},
	{layer: 1, label: 'Explore', value: 'RealRep is about exploration', color: '#9999FF', size: 50, scrollTo: 'realrep'},
	{layer: 1, label: 'Connect', value: 'Connect with the world around you', color: '#9999FF', size: 55, scrollTo: 'realrep'},
	{layer: 1, label: 'Visualize', value: 'See data like never before', color: '#9999FF', size: 45, scrollTo: 'realrep'},
	{layer: 2, label: '', value: 'Learn about friends', color: '#CCCCFF', size: 31, scrollTo: 'friendsProfile'},
	{layer: 2, label: '', value: 'Define yourself', color: '#CCCCFF', size: 27, scrollTo: 'selfProfile'},
	{layer: 2, label: '', value: 'See what the world thinks', color: '#CCCCFF', size: 44, scrollTo: 'correlations'},
	{layer: 2, label: '', value: 'Discover your reputation', color: '#CCCCFF', size: 40, scrollTo: 'selfProfile'},
	{layer: 2, label: '', value: 'and define your friends', color: '#CCCCFF', size: 38, scrollTo: 'judgr'},
	{layer: 2, label: '', value: 'Intuitive data displays redefine social media', color: '#CCCCFF', size: 65, scrollTo: 'selfProfile'},
	{layer: 2, label: '', value: 'Find new connections to those you know', color: '#CCCCFF', size: 60, scrollTo: 'friendsProfile'},
	{layer: 2, label: '', value: 'Learn about things you love', color: '#CCCCFF', size: 44, scrollTo: 'correlations'},
	{layer: 2, label: '', value: 'and add your opinions to their profile', color: '#CCCCFF', size: 55, scrollTo: 'judgr'},
];

var edges = [
	{source: 1, target: 0},
	{source: 2, target: 0},
	{source: 3, target: 0},
	{source: 4, target: 1},
	{source: 5, target: 1},
	{source: 6, target: 1},
	{source: 7, target: 3},
	{source: 7, target: 1},
	{source: 8, target: 7},
	{source: 9, target: 3},
	{source: 10, target: 2},
	{source: 11, target: 2},
	{source: 12, target: 4},
];

var graph = {
	nodes: nodes,
	links: edges
}

function loadPage() {
	createGraph('.map-container', graph);	
}
