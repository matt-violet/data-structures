var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value); // create node and add to list
    if (list.head === null && list.tail === null) { // if this new node is the first
      list.tail = newNode; // set value of list.tail = newNode
      list.head = newNode; // set value of list.head = newNode
    } else { 
      list.tail.next = newNode; // reassign list.tail to new node instance 
      list.tail = newNode;// reasign pointer of previous node to newNode
    }
  };

  list.removeHead = function() {
    var removedNode = list.head.value; // store current headNode's value
    list.head = list.head.next; // reassign list.head and return former list.head
    return removedNode; // return removed node
  };

  list.contains = function(target) {
    var currentNode = arguments[1] || list.head;
    if (currentNode.value === target) { // iterate thru list looking for target value
      return true;
    } else {
      while (currentNode.next !== null) { // if target !== value, call contains again recursively on node.next`
        return list.contains(target, currentNode.next);
      }
    }
    return false; // return boolean
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
var list = {
  head: node2
  tail: node1
  node1: {
    0: value,
    1: next
  }
  node1: {
    0: value
    1: next
  }
}

*/


/*
 * Complexity: What is the time complexity of the above functions?
 */
