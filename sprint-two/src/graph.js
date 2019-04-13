

// Instantiate a new graph
var Graph = function() {
    this.nodes = [];
    this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
    this.nodes.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
    return this.nodes.includes(node) ? true : false; // does node exist in graph.nodes?
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
    for (var i = 0; i < this.nodes.length; i++) { // iterate nodes list
        if (this.nodes[i] === node) { // if graph.contains(node) is true
            this.nodes.splice(i, 1); // remove node
        }
    }
    for (var j = 0; j < this.edges.length; j++) { // need to remove every edge that is connected to removed node
        var tuple = this.edges[j];
        if (tuple.includes(node)) { // iterate over edges, for every edge, if edge[i].includes(removed node)
            this.edges.splice(j, 1); // removeEdge 
        }
    }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
    for (var k = 0; k < this.edges.length; k++) { // iterate over edges array
        var tuple = this.edges[k];
        if (tuple.includes(fromNode) && tuple.includes(toNode)) { // must handle flexible positional parameters
            return true;
        }
    } 
    return false; // if array[i] === target edge ? true : false;         
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
    var tuple = [fromNode, toNode];
    this.edges.push(tuple); // push edge to graph edges array
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
    for (var l = 0; l < this.edges.length; l++) {
        var tuple = this.edges[l];
        if (tuple.includes(fromNode) && tuple.includes(toNode)) {  // must handle flexible positional parameters
            this.edges.splice(l, 1);  // delete edge tuple if edge[0] === from && edge[1] === to
        }
    }    
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
    this.nodes.forEach(function(element) { // graph.nodes.each(function(element)) {
        cb(element); // cb(element)
    });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


// var myGraph = new Graph()

// myGraph.contains()

/*
graph = {
    nodes: [a, b, c, d]
    edges: [[a, b], [a, c], [b, d]];
    addNode: {f},
    contains: {f},
    removeNode: {f},
    hasEdge: {f},
}
*/