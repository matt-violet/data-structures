class Queue {
   constructor() {
 	 this.storage = {};
     this.index = 0;
   }

  enqueue(value) {
    this.storage[this.index + 1] = value;
    for (var x in this.storage) {
      this.storage[x + 1] = this.storage[this.index]  
    }
    this.index = this.index + 1;
  }

   dequeue() {
   	var deleted;
    deleted = this.storage[1]
    this.storage[this.index - 1] = this.storage[this.index]
    this.index = this.index - 1
    if (this.index < 0) {
      this.index = 0
    }
    delete this.storage[0]
    return deleted;
  }

  size() {
    return this.index;
  }
 }


