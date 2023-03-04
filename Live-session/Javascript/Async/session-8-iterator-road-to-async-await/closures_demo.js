// function DO(task) {
//   // local to DO is task
//   setTimeout(function exec() {
//     console.log(task);
//   }, 2000);
// }

// DO("dkfbjh");
// console.log("end");

//Link: https://medium.com/@Sureshkumar_Ash/es6-variable-scopes-in-loops-with-closure-9cde7a198744#:~:text=let%20allows%20you%20to%20declare,function%20regardless%20of%20block%20scope.

for (var i = 0; i < 4; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}
for (var i = 1; i <= 5; i++) {
  (function (i) {
    setTimeout(function () {
      console.log("Value of i : " + i);
    }, 100);
  })(i);
}

for (let i = 0; i < 4; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}
