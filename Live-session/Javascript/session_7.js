// "use strict";
//function expression

// {
//   function fun() {
//     return "123";
//   }
// }
// console.log(fun); //[Function: fun] in non strict mode and error in strict mode

// console.log(typeof fun); //function while parsing
// var fun = 1;
// function fun() {
//   return "'123'";
// }
// console.log(typeof fun);//number while execution

// let_block_scoping
// var teacher = "Sanket";
// function fun() {
//   console.log(teacher); //undefined, it check first in function scope and if its declared then undefined
//   //   console.log(content);//error TDZ temporal dead zone
//   var teacher = "Pulkit";
//   let content = "JS";
//   if (content === "JS") {
//     let hours = "120+";
//     console.log(hours); //120+
//   }
//   console.log(teacher, content); //pulkit JS
// }
// fun();
// console.log(teacher); //sanket
// console.log(content);//error

//var in block
// function fun() {
//   var i = 5;
//   console.log(x); //undefined
//   while (i < 10) {
//     var x = i;
//     i++;
//   }
//   console.log(x); //9
// }
// fun();

//use case of var
// function fun(x) {
//   let i; //var i;
//   if (x % 2 === 0) {
//     i = 0;
//   } else {
//     i = 1;
//   }
// }

// function gun(x) {
//   if (x % 2 === 0) {
//     var i = 0;
//   } else {
//     var i = 1;
//   }
//   console.log(i);
// }

//use case of let
// function fun() {
//   for (var i = 0; i < 10; i++) {
//     //use let
//     //do sometghing
//   }
//   console.log(i);
// }

// function process(x, y) {
//   if (x > y) {
//     // var temp = x;
//     let temp = x;
//     x = y;
//     y = temp;
//   }
//   return y - x;
// }

//var allows redeclaration
//let does not allow redeclaration
//const can not be reassigned other than this it work similar as let

//const mdn
// const x = 10;
// x.val = 0; //auto boxing
// console.log(x); //10 in non strict mode
//auto boxing

//function expression
//first keyword function--> function declaraion
function fun() {
  //function declaration
  //some impl
  //it work like normal function
}

let f = function gun() {
  //function expression
  //some impl
};

let a = (function () {
  //function expression
  //some impl
})(
  //
  function x() {
    //function expression
    //can u stop it
    //iife-> immediately invoked function expression
  }
)();
var z = 2;
//iife
//
(function () {
  //function expression
  //i am done
});

let y = () => {};
