//function expression
//first keyword function--> function declaraion
function fun() {
  //function declaration
  //some impl
  //it work like normal function
}

let f = function gun() {
  //named function expression
  //readable,used in recursion,call stack trace
  //call stack trace:
  //mdn https://developer.mozilla.org/en-US/docs/Web/API/console/trace
  //some impl
};

let a = (function () {
  //anonymous function expression
  //some impl
})(
  //
  function x() {
    //named function expression
    //can u stop it
    //iife-> immediately invoked function expression
  }
)(); //function call imediately
var z = 2;
//iife
//
(function () {
  //function expression
  //i am done
});

let y = () => {};
