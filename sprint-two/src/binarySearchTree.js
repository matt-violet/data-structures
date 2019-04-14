var BinarySearchTree = function(value) { // prototypal instantiation pattern => Object.create(Tree, proto)
  // var tree = Object.create(BinarySearchTree.prototype);

  this.value = value;
  this.children = {};
  this.children.leftChild = null;
  this.children.rightChild = null;

  // return tree;
};

BinarySearchTree.prototype.left = function() {
  return this.children.leftChild; // traverse binary tree to the left (towards a smaller value)
  // points to left call function on this.leftChild
};

BinarySearchTree.prototype.right = function() {
  return this.children.rightChild; // traverse tree to the right (towards a larger value)
  // points to right call function on this.rightChild
};

BinarySearchTree.prototype.insert = function(newValue) { 
   // add a new tree at the proper location
  if (newValue > this.value) { // is new value greater than or less than this.value?
    if (this.children.rightChild === null) { // if this.right child === null 
      this.children.rightChild = new BinarySearchTree(newValue);
    } else {
      this.insert(this.children.rightChild); // instantiate new BinarySearchTree(newValue) to right child
    }
  }
  if (newValue < this.value) {
    if (this.children.leftChild === null) { // if this.left child === null 
      this.children.leftChild = new BinarySearchTree(newValue); // instantiate new BinarySearchTree(newValue) to left child
    } else {
      this.insert(this.children.leftChild);
    }
  }
};

BinarySearchTree.prototype.contains = function(inputValue) {
  // conducts a binary search using .left and .right
  // check if inputValue = this.value
    // if so - return true
    // else 
      // is inputValue less than or greater than this.value?
        // navigate to proper left or right child

      // if inputValue > this.value && this.rightChild === null
        // return false
      
      // if inputValue < this.value && this.leftChile === null
        // return false
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  // recurse through entire tree structure
    // invoke callback function on every tree node
  // for (var child in this.children) {
    // if child !== null
      // recurse on child
  // }
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
