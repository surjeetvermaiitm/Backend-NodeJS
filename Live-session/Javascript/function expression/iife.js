//iife-> imediatly invoked function expression

// (function x(y) {
//   console.log("hi", y);
// })("sanket"); //hi sanket//iife

// function x() {
//   console.log("wow");
// }
// //
// // iife
// (function x(y) {
//   console.log("hi", y);
// })("surjeet"); //hi surjeet
// //
// x();//wow

function f() {
  return 1;
}
function g() {
  return 2;
}
var i = 10;

// if(i%2==0){
//     var res=f();
// }else{
//     var res=g();
// }

var res = (function eval(i) {
  if (i % 2 === 0) return f();
  else return g();
})(i);
console.log(res); //1
