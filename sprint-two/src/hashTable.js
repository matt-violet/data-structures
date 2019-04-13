

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // declare tuple = [k, v]
  // if there is no bucket at index
    // declare a buck
    // push tuple to bucket at index
  // else 
    // iterate over bucket
      // if bucket does not contain key
        // push into bucket
      // else
        // reassign key with new value
  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


/*

var hash = new HashTable;

var checkLimit = {f};
var storage = [];

_.storage.set()

hash = {
  _limit: 8,
  _storage: {
    get: {f}, // from LimitedArray class
    set: {f},
    each: {f}
  }

  insert: {f}, // from HashTable class
  retrieve: {f},
  remove: {f}
}

storage = array
  with given length
  with ideal ratio of no more than tuple count equal to 75% of array length
bucket = array
  have flexible length but ideal length of 1
  *resizes to maintain probabable likelihood of ideal length
tuple = array
  all tuples have same length of 2

*/


