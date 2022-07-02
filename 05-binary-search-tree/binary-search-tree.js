function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function (value) {
  if (value <= this.value) {
    if (!this.left) this.left = new BST(value);
    else this.left.insert(value);
  } else {
    if (!this.right) this.right = new BST(value);
    else this.right.insert(value);
  }
};

BST.prototype.contains = function (value) {
  if (value === this.value) return true;
  if (value < this.value) {
    if (!this.left) return false;
    else return this.left.contains(value);
  } else if (value > this.value) {
    if (!this.right) return false;
    else return this.right.contains(value);
  }
};

BST.prototype.depthFirstTraversal = function (iteratorFunc) {
  if (this.left) this.left.depthFirstTraversal(iteratorFunc);
  iteratorFunc(this.value);
  if (this.right) this.right.depthFirstTraversal(iteratorFunc);
};

BST.prototype.depthFirstTraversalInOrder = function (iteratorFunc, order) {
  if (this.left) this.left.depthFirstTraversalInOrder(iteratorFunc, order);
  if (order === "in-order") iteratorFunc(this.value);
  if (this.right) this.right.depthFirstTraversalInOrder(iteratorFunc, order);
};

BST.prototype.depthFirstTraversalPreOrder = function (iteratorFunc, order) {
  if (order === "pre-order") iteratorFunc(this.value);
  if (this.left) this.left.depthFirstTraversalPreOrder(iteratorFunc, order);
  if (this.right) this.right.depthFirstTraversalPreOrder(iteratorFunc, order);
};

BST.prototype.depthFirstTraversalPostOrder = function (iteratorFunc, order) {
  if (this.left) this.left.depthFirstTraversalPostOrder(iteratorFunc, order);
  if (this.right) this.right.depthFirstTraversalPostOrder(iteratorFunc, order);
  if (order === "post-order") iteratorFunc(this.value);
};
var resultArray = [];
function log(value) {
  resultArray.push(value);
}

function print(node) {
  console.log(node.value);
}

BST.prototype.breadthFirstTraversal = function (iteratorFunc) {
  var queue = [this];
  while (queue.length !== 0) {
    var treeNode = queue.shift();
    iteratorFunc(treeNode);
    if (treeNode.left) queue.push(treeNode.left);
    if (treeNode.right) queue.push(treeNode.right);
  }
};

var bst = new BST(50);
bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);

console.log(bst.contains(105));
log("DEPTH-FIRST-TRAVERSAL");
bst.depthFirstTraversal(log);
log("IN-ORDER");
bst.depthFirstTraversalInOrder(log, "in-order");
log("PRE-ORDER");
bst.depthFirstTraversalPreOrder(log, "pre-order");
log("POST-ORDER");
bst.depthFirstTraversalPostOrder(log, "post-order");
console.log(resultArray);
console.log("BREATH-FIRST-TRAVERSAL");
bst.breadthFirstTraversal(print);

function understand() {
  var arr = [];
  arr.push(20);
  arr.push(30);
  var f = arr.shift();
  arr.unshift(40);

  console.log(arr, f);
}
understand();

// INDEPENDENT EXERCISE - getMinimum
BST.prototype.getMinVal = function () {
  var queue = [this];
  var minVal = this.value;
  while (queue.length) {
    var treeNode = queue.shift();
    if (treeNode.value < minVal) {
      minVal = treeNode.value;
    }
    if (treeNode.left) queue.push(treeNode.left);
  }
  return minVal;
};
// ANOTHER SYNTAX - getMinimum
BST.prototype.getMinValue = function () {
  if (this.left) return this.left.getMinVal();
  else return this.value;
};
// INDEPENDENT EXERCISE - getMaximum
BST.prototype.getMaxVal = function () {
  var queue = [this];
  var minVal = this.value;
  while (queue.length) {
    var treeNode = queue.shift();
    if (treeNode.value > minVal) {
      minVal = treeNode.value;
    }
    if (treeNode.right) queue.push(treeNode.right);
  }
  return minVal;
};
// ANOTHER SYNTAX - getMaximum
BST.prototype.getMaxValue = function () {
  if (this.right) return this.right.getMaxValue();
  else return this.value;
};

console.log(bst.getMinVal());
console.log(bst.getMinValue());
console.log(bst.getMaxVal());
console.log(bst.getMaxValue());
