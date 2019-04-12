var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = null;  // fix me

  return newTree;
};



var treeMethods = {};

treeMethods.addChild = function(value) {
  // sets value as target of a node
  // adds node as child of the tree
};

treeMethods.contains = function(target) {
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

/*

 newTree = {
   value = value,
   children = [{}, {}, {}],
 }

 treeMethods = {
   addChild = {f},
   contains = {f}
 }