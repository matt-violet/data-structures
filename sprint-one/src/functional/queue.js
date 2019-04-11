var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var index = 0;
  var deleted;

  someInstance.enqueue = function(value) {
    storage[index + 1] = value
    for (var x in storage) {
      storage[x + 1] = storage[index]  
    }
        index = index + 1
  };

  someInstance.dequeue = function() {
    deleted = storage[1]
    storage[index - 1] = storage[index]
    index = index - 1
    if (index < 0) {
      index = 0
    }
    delete storage[0]
    return deleted;
  };

  someInstance.size = function() {
    return index;
  };

  return someInstance;
};


/*
1: a

1: a, 
2: b

1: b 
(last: a)

1: b
2: c
(last: a)

1: c
(last: b)
*/