const user1 = {
  name: "Jordan",
  age: 28,
};

const user2 = {
  name: "Jordan",
  age: 28,
};

console.log(user1 == user2);
console.log(user1 === user2);
console.log(JSON.stringify(user1) === JSON.stringify(user2));
