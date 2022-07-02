function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

LinkedList.prototype.addToHead = function (value) {
  let newNode = new Node(value, this.head, null);
  if (this.head) {
    this.head.prev = newNode;
  } else {
    this.tail = newNode;
  }
  this.head = newNode;
};

LinkedList.prototype.addToTail = function (value) {
  let newNode = new Node(value, null, this.tail);
  if (this.tail) {
    this.tail.next = newNode;
  } else {
    this.head = newNode;
  }
  this.tail = newNode;
};

LinkedList.prototype.removeHead = function () {
  if (!this.head) {
    return null;
  } else {
    this.head = this.head.next;
    if (this.head) this.head.prev = null;
    else this.tail = null;
    return;
  }
};

LinkedList.prototype.removeTail = function () {
  if (!this.tail) {
    return null;
  } else {
    this.tail = this.tail.prev;
    if (this.tail) this.tail.next = null;
    else this.head = null;
  }
};

LinkedList.prototype.searchValue = function (value) {
  let searchExist = false;
  let currentNode = this.head;
  while (currentNode !== null) {
    if (currentNode.value === value) {
      searchExist = true;
      currentNode = null;
    } else {
      currentNode = currentNode.next;
    }
  }
  return searchExist;
};

LinkedList.prototype.searchIndex = function (value) {
  let indexArray = [];
  let index = 0;
  let currentNode = this.head;
  while (currentNode !== null) {
    if (currentNode.value === value) {
      indexArray.push(index);
    }
    currentNode = currentNode.next;
    index = index + 1;
  }
  return indexArray;
};

const linkedList = new LinkedList();
linkedList.addToHead(100);
linkedList.addToHead(50);
linkedList.addToHead(25);
linkedList.addToHead(100);
linkedList.addToTail(200);
linkedList.addToTail("head");

linkedList.addToTail(200);
console.log(linkedList);
console.log(linkedList.searchValue(50));
console.log(linkedList.searchIndex(100));
