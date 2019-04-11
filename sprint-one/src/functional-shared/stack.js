var Stack = function() {
	var obj = {};
	obj.storage = {};
	obj.key = 0;
	_.extend(obj, stackMethods);
  return obj;
};


var stackMethods = {
  	push: function(value) {
    	this.storage[this.key] = value
    	this.key = this.key + 1       
  	},

    pop: function() {
    this.storage[this.key] = this.storage[this.key - 1]
    this.key = this.key -1
      if (this.key < 0) {
        this.key = 0
      }    
    return this.storage[1];
  },

  size: function() {
    return this.key;
  }

};


