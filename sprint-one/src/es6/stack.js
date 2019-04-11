class Stack {
  constructor() {
  this.storage = {};
  this.key = 0;
  }

  	push(value) {
    this.storage[this.key] = value
    this.key = this.key + 1       
   }

	pop() {
    this.storage[this.key] = this.storage[this.key - 1]
    this.key = this.key -1
      if (this.key < 0) {
        this.key = 0
      }    
    return this.storage[1];
    }

	size() {
    return this.key;
    }

}