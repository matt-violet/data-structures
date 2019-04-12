var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; // [] contining child trees
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newInstance = Tree(value); // newInstance = a tree with .value = value
  this.children.push(newInstance); // adds instance as a child of the tree from which it was created
};

treeMethods.contains = function(target) {
  var currentNode = this;
  if (currentNode.value === target) { //- base case
    return true;
  }
  if (currentNode.children.length) { // else if currentNode.children.length > 0 
    for (var i = 0; i < this.children.length; i++) { // searches entire tree data structure
      var childNode = this.children[i];
      if (childNode.contains(target)) { // return call recursively on each child
        return true;
      }
    }
  }
  return false;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

/*
// target === 'Daniel';

tree5.contains(target);

 tree5 = {
   value: value,
   children: [{danielTree}], // === 1
   addChild: function, // this = tree
   contains: function
 }

tree5.addChild('Daniel');

tree5[i].contains(target);

 danielTree = {
   value = 'Daniel',
   children = [],
   addChild: function,
   contains: function
 }

 treeMethods = {
   addChild = {f},
   contains = {f}
 }

*/