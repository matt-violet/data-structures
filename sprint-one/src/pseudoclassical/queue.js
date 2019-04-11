var Queue = function() {
  this.storage = {};
  this.index = 0;
};


  Queue.prototype.enqueue = function(value) {
    this.storage[this.index + 1] = value;
    for (var x in this.storage) {
      this.storage[x + 1] = this.storage[this.index]  
    }
    this.index = this.index + 1;
  };

   Queue.prototype.dequeue = function() {
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

  Queue.prototype.size = function() {
    return this.index;
  };

