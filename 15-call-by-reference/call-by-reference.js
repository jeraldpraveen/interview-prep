// Call By value
let string1 = "Jerald";
let string2 = string1;
string2 = "Praveen";
console.log(string1);
// Call By Reference
let list1 = [1, 2, 3, 4, 5];
let list2 = list1;
list1.push(6, 7, 8);
console.log(list2);
list1 = [10, 20, 30];
console.log(list1);
console.log(list2);
// Assigning array without referencing previous array
const list3 = [1, 2, 3, 4, 5];
const list4 = list3.concat([]);
const list5 = list3.slice();
list3.push(6, 7, 8);

console.log("List 3: ", list3);
console.log("List 4: ", list4);
console.log("List 5: ", list5);
