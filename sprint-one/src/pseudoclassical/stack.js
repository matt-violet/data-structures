// Capitalize your function name to indicate to others that it is intended to be run with the keyword new
// Use the keyword new when instantiating your class
// Use the keyword this in your constructor

var Stack = function() {
	this.storage = {};
	this.key = 0;
};


Stack.prototype.push = function(value) {
    this.storage[this.key] = value
    this.key = this.key + 1       
 };

Stack.prototype.pop = function() {
    this.storage[this.key] = this.storage[this.key - 1]
    this.key = this.key -1
      if (this.key < 0) {
        this.key = 0
      }    
    return this.storage[1];
  };

Stack.prototype.size = function() {
    return this.key;
  };



