//coercion
// let x = 10;
//ToBoolean
//abstract equality
// console.log(null == false); //false
// console.log(NaN === NaN); //false
// console.log(null === null); //true
// console.log(undefined === undefined); //true

// let obj = {
//   x: 10,
//   valueOf() {
//     return 100;
//   },
// };

// console.log(99 == obj);//false
// console.log(100 == obj);//true
// obj1 = { x: 10 };
// obj2 = { x: 10 };
// obj3 = { x: 10 };
// obj4 = obj1;
// console.log(obj1 === obj2); //false
// console.log(obj2 === obj3); //false
// console.log(obj1 == obj1); //true
// console.log(obj1 === obj4); //true
// console.log({ x: 10 } == { x: 10 }); //false

//corner cases of coercion

//ToString--> ""+value
// console.log("" + 0); //0
// console.log(typeof ("" + 0)); //String
// console.log("" + -0); //0
// console.log(typeof ("" + -0)); //String

// console.log("" + []); //[]-->""
// console.log("" + {}); //"[object Object]"

// console.log("" + [1, 2, 3]);//1,2,3
// console.log(typeof ("" + [1, 2, 3]));//String

// console.log("" + [null, undefined]);//,
// console.log(typeof ("" + [null, undefined]));//string

// console.log("" + [1, 2, 3, null, 4]);//1,2,3,,4

//ToNumber
// console.log(0 - "10"); //10
// console.log(0 - "010"); //10
// console.log(0 - 010); //-8-->octal number
// console.log(0 - "0xb"); //-11-->hexadecimal
// console.log(0 - 0xb); //-11 hexadecimal

// console.log(0 - "o10"); //NaN
// console.log(0 - "O10"); //NaN

// console.log([] - 1); //-1
// console.log([""] - 1); //-1
// console.log(["0"] - 1); //-1
// console.log([6] - 1); //5

// console.log(0xc); //12
