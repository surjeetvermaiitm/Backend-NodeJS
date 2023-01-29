// lexical scoping
//strict mode mdn
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

// "use strict";

// var teacher = "Sanket";
// function fun() {
//   var teacher = "Pulkit";
//   content = "JS"; //during execution autoglobal (it become autoglobal during exexution)
//   console.log(teacher);
// }
// function gun() {
//   var student = "surjeet";
//   console.log(student);
// }
// // console.log(content);//error neither in gloal or funcionscope
// fun(); //pulkit
// gun(); //surjeet
// console.log(content); // error in strict mode , JS in nonstrict mode
// console.log(teacher); //sanket
// // console.log(student);//error student is not defined

// let arr = [1, 2, 3, 4];

// console.log((10).toString()); //10 boxing

//nested scope
// function fun() {
//   var x = 10;
//   function gun() {
//     var y = 20;
//     console.log(x); //10
//     console.log(y); //20 look for one scope up
//   }
//   gun();
//   console.log(x); //10
//   console.log(y); //error
// }
// fun();

//Lexical and dynamic scopeing
//Lexical scope
//Javascript support lexical scope
//Shell script,bash script support dynamic scoping or runtime scoping
// var teacher = "Sanket";
// function ask(question) {
//   console.log(teacher, question);
// }
// function fun() {
//   var teacher = "pulkit";
//   ask("why?");
// }
// fun(); //Sanket why?

//
// var fun = "123";
// function fun() {
//   return "fun2";
// }
// console.log(fun); //123
// // console.log(fun()); //error fun is not a function

// var fun;
// function fun() {
//   return "fun2";
// }
// console.log(fun); //[Function: fun]
// console.log(fun()); //fun2

// var fun = "123";
// var fun = function fun() {
//   return "fun2";
// };
// console.log(fun); //[Function: fun]
// console.log(fun()); //fun2

// var fun = "123";
// var fun = function () {
//   return "fun2";
// };
// console.log(fun); //[Function: fun]
// console.log(fun()); //fun2
