// back tick
// let obj = { x: 10, y: 20 };
// let num = 10;
// console.log(`my object is ${obj}`); //[object Object] coercion
// console.log("my object is " + obj); //[object Object] coercion

// coercion example
// console.log(1 < 2 < 3); //true
// console.log(3 > 2 > 1); //false

// console.log(Boolean(""));
// console.log(String(123));

// let x = NaN;
// console.log(x == NaN); //false (NaN==NaN false)
// console.log(isNaN(x)); //true
// console.log(isNaN("Surjeet")); //true it does coercion

// console.log(Number.isNaN("surjeet")); //false does not do coercion
// console.log(Number.isNaN(x)); //true

//use below if or Number.isNaN(x) for avoiding coercion
// if (typeof x === "number" && x !== x) {
//   console.log(true);
// } //true

// let x = {};
// console.log(x !== x); //false, it also check type
// console.log(x == x); //true
// console.log({} == {}); //false
// console.log(x == NaN);//false

// let x = -0;
// console.log(x === 0); //true
// console.log(x.toString()); //0
// console.log(typeof x.toString()); //string
// console.log(String(x)); //0
// let b = x.toString(); //b="0"
// console.log(b); //0

// console.log(Object.is(x, -0)); //true
// console.log(Object.is(x, 0)); //false

// console.log(Math.sign(-3)); //-1
// console.log(Math.sign(3)); //1
// //check Math.sign() in docs
// console.log(Math.sign(0)); //0
// console.log(Math.sign(-0)); //-0

// console.log(Math.sign(0 - 0)); //0

// console.log(x < 0); //false

//Qn can we write a custom function that can give us a sign of a  number property

//Boxing(primitive to non primitive) and autoBoxing
//similar to wraper class in java

// console.log(1.toString())//error for int
// console.log((1).toString()); //1 valid
// console.log(Number(1).toString());

// console.log("abc".toString()); //valid
// console.log(undefined.toString());//error

// let x = 1;
// console.log(x.toString()); //literal (1).toString() object type have non atmic property

//using boxing you can make everything as object in js

//manual boxing
// const a = new Boolean(true);
// if (a) console.log("it's true"); // it's true
// const b = new Boolean(false);
// if (!b) console.log("never runs"); // objects are “truthy.“
// const c = Object(false);
// if (!c) console.log("never runs"); // objects are “truthy.“

// autoboxing
//String primitive name
// const name = "KESK";
// console.log(name.toLowerCase()); //kesk
// console.log(name.substring(1)); //ESK

// const b = Boolean(false);
// if (!b.valueOf()) console.log("its false"); // its false

//unboxing
const a = Object(false);
console.log(a == false); //true
console.log(a === false); //false
console.log(a.valueOf() == false); //true
console.log(a.valueOf() === false); //true

// Unboxing can also be done implicitly (coercion):
console.log(a == false); //true
