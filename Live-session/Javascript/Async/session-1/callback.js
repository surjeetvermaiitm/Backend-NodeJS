// function fun(x, fn) {
//   for (let i = 0; i < x; i++) {
//     console.log(i);
//   }
//   fn();
// }
// fun(5, function exec() {
//   console.log("I am executed also");
// });

// setTimeout(function exec() {
//   console.log("Running after som time");
// }, 4000);

// function fun(x, fn) {
//   for (let i = 0; i < x; i++) {
//     console.log(x);
//   }
//   fn(x * x);
// }
// fun(2, function exec(num) {
//   console.log(num);
// }); //calling fun

//Inversion of control
function doTask(fn, x) {
  //whole impelemntation is done by team A
  fn(x * x);
} //Task A

//hete TeamB tries to use it
doTask(function exec(num) {
  //due to callback ,I am passing control of how exec should be called to dotask
  //This is inversion of control
  console.log("woah num is", num);
}, 9);
