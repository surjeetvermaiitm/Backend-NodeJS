function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
// console.log(getRandomInt(4));

// promise synchronous in nature
// function createPromise() {
//   return new Promise(function exec(resolve, reject) {
//     for (let i = 0; i < 100000000; i++) {
//       let num = getRandomInt(10);
//       if (num % 2 == 0) {
//         //if random number is even then we fullfill
//         resolve(num);
//       } else {
//         //if num is odd we reject
//         reject(num);
//       }
//     }
//   });
// }
// let x = createPromise();
// console.log(x);
// console.log("hi");

//with async timeout
// function createPromiseWithTimeOut() {
//   return new Promise(function exec(resolve, reject) {
//     setTimeout(function () {
//       let num = getRandomInt(10);
//       if (num % 2 == 0) {
//         //if random number is even then we fullfill
//         resolve(num, 10, 20);
//       } else {
//         //if num is odd we reject
//         reject(num);
//       }
//     }, 10000);
//   });
// }
// let y = createPromiseWithTimeOut();
// console.log(y);
// console.log("hi");

// function createPromiseWithTimeOut() {
//   return new Promise(function exec(resolve, reject) {
//     setTimeout(function () {
//       let num = getRandomInt(10);
//       if (num % 2 == 0) {
//         //if random number is even then we fullfill
//         console.log("fulfilling");
//         resolve(num);
//         console.log("completed resolving");
//         return num;
//       } else {
//         //if num is odd we reject
//         console.log("rejecting");
//         reject(num);
//         console.log("completed rejected");
//         return num;
//       }
//     }, 10000);
//   });
// }
// let y = createPromiseWithTimeOut();
// console.log(y);
// console.log("hi");

// function createPromiseWithTimeOut() {
//   return new Promise(function exec(resolve, reject) {
//     setTimeout(function () {
//       let num = getRandomInt(10);
//       if (num % 2 == 0) {
//         //if random number is even then we fullfill
//         console.log("fulfilling");
//         resolve(num);
//         console.log("completed resolving");
//         resolve(10);
//         console.log("resolving again");
//         return num;
//       } else {
//         //if num is odd we reject
//         console.log("rejecting");
//         reject(num);
//         console.log("completed rejected");
//         reject(11);
//         console.log("reject again");
//         return num;
//       }
//     }, 10000);
//   });
// }
// let y = createPromiseWithTimeOut();
// console.log(y);
// console.log("hi");
