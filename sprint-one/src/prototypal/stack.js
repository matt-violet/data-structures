var Stack = function() {
 var obj = Object.create(stackMethods);
	obj.storage = {};
	obj.key = 0;

  return obj;
};


var stackMethods = {};

stackMethods.push = function(value) {
    this.storage[this.key] = value
    this.key = this.key + 1       
 };

stackMethods.pop = function() {
    this.storage[this.key] = this.storage[this.key - 1]
    this.key = this.key -1
      if (this.key < 0) {
        this.key = 0
      }    
    return this.storage[1];
  };

stackMethods.size = function() {
    return this.key;
  };


