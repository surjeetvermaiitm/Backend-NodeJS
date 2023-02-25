//problem-1
// function fetchData(url) {
//   return new Promise(function (resolve, reject) {
//     console.log("started download from ", url);
//     setTimeout(function processDownloading() {
//       let data = "Dummy data";
//       console.log("Download completed");
//       resolve(data);
//       console.log("Download completed 2");
//     }, 7000);
//   });
// }
// console.log("start");
// let promiseJob = fetchData("skv.com");
// promiseJob.then(function A(value) {
//   console.log("value is", value);
// });
// console.log("end");
//output
// start
// started download from  skv.com
// end
// Download completed
// Download completed 2
// value is Dummy data

// function f(){
//     return new Promise(function exec())
// }

// problem-2

// console.log("start of the file");

// setTimeout(function timer1() {
//   console.log("Timer 1 done");
// }, 0);

// for (let i = 0; i < 1000000; i++) {
//   //something
// }

// let x = Promise.resolve("surjeet's promise");
// x.then(function processPromise(value) {
//   console.log("whose promise ?", value);
// });

// setTimeout(function timer2() {
//   console.log("Timer 2 done");
// }, 0);
// console.log("End of file");

//output
// start of the file
// End of file
// whose promise ? surjeet's promise
// Timer 1 done
// Timer 2 done
//problem -3 on notes
//promise hell
//call back inversion of control
// function download(url, cb) {
//   console.log("Started downloading", url);
//   setTimeout(function exec() {
//     const content = "ABCDEF";
//     cb(content);
//     cb(content);
//   }, 5000);
// }
// download("www.xyz.com", function exec(ct) {
//   console.log("content", ct);
// });

//promises
// function download(url) {
//   console.log("Started downloading", url);
//   return new Promise(function exec(resolve, reject) {
//     setTimeout(function exec() {
//       const content = "ABCDEF";
//       resolve(content);
//       resolve(content);
//     }, 5000);
//   });
// }
// download("www.xyz.com").then(function fullfill(value) {
//   console.log("content download is ", value);
// });

//
function download(url) {
  console.log("Started downloading", url);
  return new Promise(function exec(resolve, reject) {
    setTimeout(function exec() {
      const content = "ABCDEF";
      resolve(content);
      reject(content);
    }, 5000);
  });
}
x = download("www.xyz.com");
y = x
  .then(
    function fullfill(value) {
      console.log("content download is ", value);
      return "new promise string";
    },
    function rejectHandler(value) {
      console.log("reject content", value);
      return "new reject promise";
    }
  )
  .then(function newFullfill(val) {
    console.log("other val", val);
  });
