var Stack = function() {
  var someInstance = {
    //push: f(),
    //pop: f(),
    //size: f()
  };

  // Use an object with numeric keys to store values
  var storage = {
  };

  // Implement the methods below
  var key = 0;

  someInstance.push = function(value) {
    storage[key] = value
    key = key + 1       
  };

  someInstance.pop = function() {
    storage[key] = storage[key - 1]
    key = key -1
      if (key < 0) {
        key = 0
      }    
    return storage[1];
  };

  someInstance.size = function() {
    return key;
  };

  return someInstance;
};
