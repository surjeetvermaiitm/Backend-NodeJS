//higher order function
function f(x, fn) {
  console.log(x);
  console.log(fn);
  fn();
}

f(10, function exec() {
  console.log("I am an expression passed to hof");
});

let arr = [1, 100, 20, 3, 39, 20];
// arr.sort();//default implementtion lexicographical sorting
arr.sort((a, b) => {
  return a > b ? 1 : -1;
});
console.log(arr);
