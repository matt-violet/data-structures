var BinarySearchTree = function(value) { // prototypal instantiation pattern => Object.create(Tree, proto)
  // var tree = Object.create(BinarySearchTree.prototype);

  this.value = value;
  this.leftChild = null;
  this.rightChild = null;

  // return tree;
};

BinarySearchTree.prototype.left = function(value) {
  // traverse binary tree to the left (towards a smaller value)
  // call function on this.leftChild
};

BinarySearchTree.prototype.right = function(value) {
  // traverse tree to the right (towards a larger value)
  // call function on this.rightChild
};

BinarySearchTree.prototype.insert = function(value) { 
  // add a new tree at the proper location
  // utilizes .left and .right to find the proper location
};

BinarySearchTree.prototype.contains = function(value) {
  // conducts a binary search using .left and .right
  // 
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {

};

/*
 * Complexity: What is the time complexity of the above functions?
 */

/*
efficient way to search recursively
left side is less than & right side is greater than
each tree has at most 2 children **
binary search trees are always sorted

ensure we only recurse down a single path (branch)

var tree = Object.create(BinarySearchTree.prototype);

tree = {
  left: {f},
  right: {f},
  insert: {f},
  contains: {f},
  depthFirstLog: {f}
}


*/
