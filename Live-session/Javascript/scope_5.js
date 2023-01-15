//scope
// var teacher = "Sanket";
// function fun() {
//   var teacher = "Pulkit";
//   console.log(teacher);
// }
// function gun() {
//   var student = "surjeet";
//   console.log(student);
// }
// fun(); //pulkit
// gun(); //surjeet
// console.log(teacher); //sanket
// // console.log(student);//error student is not defined

//interpreted vs compiled
//doubt
// console.log("hi");
// console.log…(“hello");//syntax error while parsing
// why this doesn’t print anything?

//JS is not purely interpreted
// console.log("Hello");//it gives error without printing anything
// function fun() {
//   console.log("Hi");
// }
// console.log("Hello");
// console.log...("Hi");//error,syntax error while parsing

//JS is not also copletely compiled
// console.log("hi");// it will print hi
// console.lo("hello");//typeerror cause console.lo fn is not defined

//doubt
// console.log("hi");
// console.log…(“hello");//syntax error while parsing
//this doesn't print anything why doubt

// console.log(myName);//error
// let myName = "surjeet";
// function fun() {
//   console.log(myName);
// }
// fun();//surjeet
// console.log(myName);//surjeet

// console.log(myName); //undefined
// var myName = "surjeet";
// function fun() {
//   console.log(myName);
// }
// fun();//surjeet
// console.log(myName);//surjeet

//mdn scope
//https://developer.mozilla.org/en-US/docs/Glossary/Scope

//mdn var
//The var statement declares a function-scoped or globally-scoped variable, optionally initializing it to a value.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
// var is not blocked scope
// var x = 1;

// if (x === 1) {
//   var x = 2;

//   console.log(x);
//   // Expected output: 2
// }

// console.log(x);
// // Expected output: 2

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
//mdn let
//The let declaration declares a block-scoped local variable, optionally initializing it to a value.
//
// let x = 1;

// if (x === 1) {
//   let x = 2;

//   console.log(x);
//   // Expected output: 2
// }

// console.log(x);
// // Expected output: 1

//const mdn
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const

//example on block scope
// {
//   var x = 10;
// }
// console.log(x);//10 global scoped because of var

// if (false) {
//   var x = 10;
// }
// console.log(x);//undefined, because of var

// {
//   let x = 10;
// }
// console.log(x);//error let block scope

//example on function scope

// function fun() {
//   var x = 10;
//   console.log(x);
// }
// console.log(x);//error var functioned scope

// function gun() {
//   console.log(y);//error no hoisting for let
//   let y = 5;
// }
// gun();
// // console.log(y);//error

// function gun() {
//   console.log(y); //undefined, var function scoped, hoisting
//   var y = 5;
// }
// gun();
// console.log(y); //error, var function scoped

//parsing

// var teacher = "Sanket";
// function fun() {
//   var teacher = "Pulkit";
//   console.log(teacher);
// }
// function gun() {
//   var student = "surjeet";
//   console.log(student);
// }
// fun(); //pulkit
// gun(); //surjeet
// console.log(teacher); //sanket
// // console.log(student);//error student is not defined

// var teacher = "Sanket";
// function fun() {
//   var teacher = "Pulkit";
//   content = "JS"; //during executionautoglobal
//   console.log(teacher);
// }
// function gun() {
//   var student = "surjeet";
//   console.log(student);
// }
// // console.log(content);//error neither in gloal or funcionscope
// fun(); //pulkit
// gun(); //surjeet
// console.log(content); //JS
// console.log(teacher); //sanket
// // console.log(student);//error student is not defined

// var teacher = "Sanket";
// function fun() {
//   var teacher = "Pulkit";
//   content;//error
//   console.log(content);
//   console.log(teacher);
// }
// function gun() {
//   var student = "surjeet";
//   console.log(student);
// }
// // console.log(content);//error neither in gloal or funcionscope
// fun(); //pulkit
// gun(); //surjeet
// // console.log(content); //error
// console.log(teacher); //sanket
// // console.log(student);//error student is not defined

//console.log(temp);//error
//temp="'sur"//while exection it become aut gobal

// myname;//errorors
// console.log(myname);
