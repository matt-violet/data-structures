

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k, v]; // declare tuple = [k, v]
  if (!this._storage.get(index)) { // if there is no bucket at index
    var newBucket = [tuple]; // declare a buck  // push tuple to bucket at index
    this._storage.set(index, newBucket);
  } else {
    var bucket = this._storage.get(index);
    for (var i = 0; i < bucket.length; i++) { // iterate over bucket
      if (bucket[i][0] === k) {
        bucket[i][1] = v; // reassign key with new value
      }
    } // else if bucket does not contain key
    bucket.push(tuple); // push into bucket
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index); // locate (.get) bucket stored at index
  for (var i = 0; i < bucket.length; i++) { // iterate over bucket 
    var tuple = bucket[i];
    if (tuple[0] === k) { // find tuple with input key at tuple[0]
      return tuple[1];
    } 
  } 
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index); // locate bucket stored at index
  for (var j = 0; j < bucket.length; j++) { // iterate over bucket
    var tuple = bucket[j];
    if (tuple[0] === k) { // find index of tuple with input key at tuple[0]
      bucket.splice(j, 1); // bucket.splice(j, 1);
    }
  }
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


