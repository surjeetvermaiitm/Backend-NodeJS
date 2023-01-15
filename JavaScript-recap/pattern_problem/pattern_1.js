// // n=3
// // ***
// // ***
// // ***

// var n = 3;
// for (let i = 0; i < n; i++) {
//   let stars = "";
//   for (let j = 0; j < n; j++) {
//     stars += "*";
//   }
//   console.log(stars);
// }

// // n=3
// // *
// // **
// // ***
// for (let i = 0; i < n; i++) {
//   let stars = "";
//   for (let j = 0; j <= i; j++) {
//     stars += "*";
//   }
//   console.log(stars);
// }

// // n=3
// //   *
// //  **
// // ***
// n = 4;
// for (let i = 0; i < n; i++) {
//   let stars = "";
//   for (let j = 0; j < n - i - 1; j++) {
//     stars += " ";
//   }
//   for (let j = 0; j <= i; j++) {
//     stars += "*";
//   }
//   console.log(stars);
// }

// // n=3
// //   *
// //  ***
// // *****
// n = 4;
// for (let i = 1; i <= n; i++) {
//   let stars = "";
//   for (let j = 1; j <= n - i; j++) {
//     stars += " ";
//   }
//   for (let j = 1; j <= 2 * i - 1; j++) {
//     stars += "*";
//   }
//   console.log(stars);
// }

// n=3
// ***
// **
// *
// n = 4;
// for (let i = 1; i <= n; i++) {
//   let stars = "";
//   for (let j = n - i + 1; j >= 1; j--) {
//     stars += "*";
//   }
//   console.log(stars);
// }

// n=3
//   *
//  ***
// *****
//  ***
//   *
// n = 4;
// for (let i = 1; i <= n; i++) {
//   let stars = "";
//   for (let j = 1; j <= n - i; j++) {
//     stars += " ";
//   }
//   for (let j = 1; j <= 2 * i - 1; j++) {
//     stars += "*";
//   }
//   console.log(stars);
// }
// for (let i = 1; i < n; i++) {
//   let stars = "";
//   for (let j = 1; j <= i; j++) {
//     stars += " ";
//   }
//   for (let j = 2 * n - 2 * i - 1; j >= 1; j--) {
//     stars += "*";
//   }
//   console.log(stars);
// }

//Buitterfly
// n=5
// *   *
// ** **
// *****
// ** **
// *   *
