// import&export modules


// const oper = require("./operater");

// // console.log(add(5,3));
// console.log(oper.add(2,4));
// console.log(oper.sub(10,4));
// console.log(oper.multi(4,6));
// console.log(oper.name);

// object destructuring
const {add,multi,sub,name}= require("./operater");

console.log(add(2,4));
console.log(sub(10,4));
console.log(multi(4,6));
console.log(name);
