var Queue = function() {
  
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.index = 0;

  return someInstance;
};


var queueMethods = {};

  queueMethods.enqueue = function(value) {
    this.storage[this.index + 1] = value;
    for (var x in this.storage) {
      this.storage[x + 1] = this.storage[this.index]  
    }
    this.index = this.index + 1;
  };

   queueMethods.dequeue = function() {
   	var deleted;
    deleted = this.storage[1]
    this.storage[this.index - 1] = this.storage[this.index]
    this.index = this.index - 1
    if (this.index < 0) {
      this.index = 0
    }
    delete this.storage[0]
    return deleted;
  };

  queueMethods.size = function() {
    return this.index;
  };

