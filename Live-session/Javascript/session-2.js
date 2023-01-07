// coercion

// let obj = {};
// console.log(obj.toString());
// console.log(typeof obj.toString()); //string

// let obj = {
//dsefault [object Object], we can override toString and valueOf
//   toString() {
//     return "Lets learn JS";
//   },
// };
// console.log(obj.toString());
// console.log(typeof obj.toString());

// let obj = {
//   x: 10,
//   //valueOf default is object
//   valueOf() {
//     return 10;
//   },
// };
// console.log(obj.valueOf());
// console.log(typeof obj.valueOf());

// let obj = {};
// console.log(10 - obj); //obj.valueOf--> object(same object),toString-->[object Object](string)
// console.log(typeof (10 - obj));
// console.log(obj - obj);

// let obj1 = { x: 9, y: 8 };
// console.log(100 - obj1);

// let obj2 = {
//   x: 7,
//   valueOf() {
//     return 9;
//   },
// };
// console.log(100 - obj2);

// let obj3 = {
//   x: 7,
//   toString() {
//     return "90";
//   },
// };
// console.log(100 - obj3);

// let obj4 = {
//   x: 7,
//   toString() {
//     return {};
//   },
//   valueOf() {
//     return "9";
//   },
//   //valueOf is given pref
// };
// console.log(100 - obj4);

obj = {};
console.log(obj);
console.log("18" + obj); //"18"+"[object Object]"-->18[output Output]
console.log(18 + obj); //18+"[object Object]"-->18[output Output]
