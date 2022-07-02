function HashTable(size) {
  this.buckets = Array(size);
  this.numBuckets = this.buckets.length;
}

function HashNode(key, value, next) {
  this.key = key;
  this.value = value;
  this.next = next || null;
}

HashTable.prototype.hash = function (key) {
  let total = 0;
  for (let i = 0; i < key.length; i++) {
    total = total + key.charCodeAt(i);
  }
  let bucket = total % this.numBuckets;
  return bucket;
};

HashTable.prototype.insert = function (key, value) {
  let bucketIndex = this.hash(key);
  if (!this.buckets[bucketIndex])
    this.buckets[bucketIndex] = new HashNode(key, value);
  else if (this.buckets[bucketIndex].key === key)
    this.buckets[bucketIndex].value = value;
  else {
    let currentNode = this.buckets[bucketIndex];
    while (currentNode.next) {
      if (currentNode.next.key === key) {
        currentNode.next.value = value;
        return;
      }
      currentNode = currentNode.next;
    }
    currentNode.next = new HashNode(key, value);
  }
};

HashTable.prototype.get = function (key) {
  let bucketIndex = this.hash(key);
  if (!this.buckets[bucketIndex]) return null;
  let currentNode = this.buckets[bucketIndex];
  while (currentNode) {
    if (currentNode.key === key) return currentNode;
    else currentNode = currentNode.next;
  }
  return null;
};

HashTable.prototype.retriveAll = function () {
  let index = this.numBuckets;
  var nodesArray = [];
  for (let i = 0; i < index; i++) {
    let currentNode = this.buckets[i];
    while (currentNode) {
      nodesArray.push(currentNode.value);
      currentNode = currentNode.next;
    }
  }
  return nodesArray;
};

let hashTable = new HashTable(30);
hashTable.insert("Dean", "dean@gmail.com");
hashTable.insert("Dane", "dane@gmail.com");
hashTable.insert("Jerald", "jerald@gmail.com");
hashTable.insert("Jerald", "jerald123@gmail.com");

console.log(hashTable);
console.log(hashTable.get("Daen"));
console.log(hashTable.get("Dean"));
console.log(hashTable.retriveAll());
