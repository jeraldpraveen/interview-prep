// When a function comes under another function, closure is created
function outer() {
  function inner() {
    console.log("Inner called");
  }
}
// inner(); // Throws Error ->  inner is not defined
// Inner is not in scope of '08-closure.js' file
// If you ant to call inner()
function outer1() {
  function inner1() {
    console.log("Inner called");
  }
  inner1();
}
outer1();

// Another way to call inner via Function expression
function outer2() {
  function inner2() {
    console.log("Inner called");
  }
  return inner2; // Not executing (),just returning private member(i.e.inner)
}
const closure = outer2();
closure();

// Another way to call without 'inner' name
function outer3() {
  return function () {
    console.log("Inner called");
  };
}
const closure3 = outer3();
closure3();

// Another way to call --> ARROW Syntax
const outer4 = () => {
  return () => {
    console.log("Inner called");
  };
};
const closure4 = outer4();
closure4();

// Closure pattern remembers outer variables & also access outer scope variables
// Let's see with an example application of closure
const addCounter = () => {
  let counter = 0;
  counter++;
  return counter;
};
console.log(addCounter());
console.log(addCounter());

// Closure pattern remembers outer variables & also access outer scope variables
// So we can make local variables act as Global variables using closure
// The inner function of addCounter1 has counter1 variable as global scope
// Since counter1 is global variable, everytime counter1 is incremented,the global value is maintained in Javascript Environment
// So when we use closure, you are making private members globally available
const addCounter1 = () => {
  let counter1 = 0;
  return () => {
    counter1++;
    return counter1;
  };
};
const cl = addCounter1();
console.log(cl());
console.log(cl());
console.log(cl());

// Questions
// Q.1) How can you access private variable or function outside the scope ?
// Ans: Using closure
// Ans: function outer2() {
//        function inner2() {
//          console.log("Inner called");
//        }
//        return inner2; // Not executing (),just returning private member(i.e.inner)
//      }
// const closure = outer2();
// closure();
// Q.2) Explain the advantage of closure ?
// Ans: The main advantage is that any member which is private for certain scope, can be accessed keeping
//      the variable private so that the variable is away from accidental change of value
