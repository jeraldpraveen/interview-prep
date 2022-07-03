console.log([10, 20, 30, 40, 50].indexOf(30));
console.log([{ name: "Pam" }, { name: "Kent" }].indexOf({ name: "Kent" })); // Call by reference - not same obj
console.log("hello world".indexOf("o"));
console.log([[1], [2], [3], [4]].indexOf([20])); // Call by reference - not same array

const myArray = [5];
const anotherArray = myArray;
console.log([[1], [2], [3], [4], myArray].indexOf(anotherArray));
