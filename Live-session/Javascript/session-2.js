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
// console.log(10 - obj);//NaN //obj.valueOf--> object(same object),toString-->[object Object](string)
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
// console.log(100 - obj2); //91
// console.log(100 + obj2); //109
// console.log("100" + obj2); //1009

// let obj3 = {
//   x: 7,
//   toString() {
//     return "90";
//   },
// };
// console.log(100 - obj3); //10
// console.log(10 + obj3); //1090
// console.log("10" + obj3); //1090

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
// console.log(100 - obj4); //91
// console.log(10 + obj4);//109
// console.log("10" + obj4);//109

// let obj4 = {
//   x: 7,
//   toString() {
//     return {};
//   },
//   valueOf() {
//     return {};
//   },
//   //valueOf is given pref
// };
// console.log(100 - obj4);//Typeerror
// console.log(10 + obj4);//type error
// console.log("10" + obj4); //type error

// let obj4 = {
//   x: 7,
//   //   toString() {
//   //     return {};
//   //   },
//   valueOf() {
//     return {};
//   },
//   //valueOf is given pref
// };

// console.log(100 - obj4);//NaN

// obj = {};
// console.log(obj);
// console.log("18" + obj); //"18"+"[object Object]"-->18[output Output]
// console.log(18 + obj); //18+"[object Object]"-->18[output Output]

// let a = "5" * "5";
// let a=true+true;
// let a = "true" + true;
// console.log(a);
// console.log(typeof a);

// let b =
//   "10" +
//   {
//     x: 10,
//     toString() {
//       return "hola";
//     },
//     valueOf() {
//       return 5;
//     },
//   };
// console.log(b);//105
