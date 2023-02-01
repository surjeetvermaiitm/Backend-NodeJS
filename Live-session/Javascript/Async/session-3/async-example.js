// console.log("hello world"); //console.log is runtime feature
// setTimeout(function exec() {
//   console.log("Timer done");
// }, 0);
// console.log("End");

// console.log("hello world"); //console.log is runtime feature
// setTimeout(function exec() {
//   console.log("Timer done");
// }, 0);
// for (let i = 0; i < 10000000; i++) {
//   //
// }
// console.log("End");

//how  console.log() works
//https://nodejs.org/api/console.html#consolelogdata-args
//https://github.com/nodejs/node-v0.x-archive/blob/master/lib/console.js
//https://github.com/nodejs/node-v0.x-archive/blob/master/lib/util.js

//
// console.log("hello world"); //console.log is runtime feature
// setTimeout(function exec() {
//   console.log("Timer done");
//   setTimeout(function exec() {
//     console.log("woah another one");
//   }, 0);
// }, 5000);
// for (let i = 0; i < 10000000; i++) {
//   //
// }
// console.log("End");
// //output
// hello world
// End
// Timer done
// woah another one

//setInterval
// setInterval(function () {
//   console.log("another one");
// }, 500);

// let x = setInterval(function () {
//   console.log("another one");
// }, 500);
// let y = setInterval(function () {
//   console.log("another two");
// }, 100);
// clearInterval(x);
// console.log(typeof x); //object in node but number in chrome
// console.log(x);
// y = null;//doesn't affect

// let count = 0;
// let y = setInterval(function exec() {
//   count++;
//   console.log(count);
//   if (count > 15) {
//     clearInterval(y);
//   }
// }, 2000);
