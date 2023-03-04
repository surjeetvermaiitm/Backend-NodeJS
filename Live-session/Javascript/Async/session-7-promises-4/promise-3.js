let x = Promise.resolve("hello")
  .then(3)
  .then(console.log("2"))
  .then((val) => console.log(val));
// console.log(x);
