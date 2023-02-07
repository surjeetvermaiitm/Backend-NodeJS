import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

// // function Greeting() {
// //   return <h1>My first componenet, Thankyou</h1>;
// // }

// // function Greeting() {
// //   return React.createElement("h2", {}, "hello world");
// // }

// // function Greeting() {
// //   return (
// //     <div>
// //       <h2>hello world</h2>
// //     </div>
// //   );
// // }

// // const Greeting = () => {
// //   return React.createElement(
// //     "div",
// //     {},
// //     React.createElement("h2", {}, "hello world")
// //   );
// // };

// function Greeting() {
//   return (
//     <>
//       <div className="someValue">
//         <h3>hello people</h3>
//         <ul>
//           <li>
//             <a href="#">hello world</a>
//           </li>
//         </ul>
//       </div>
//       <h2>hello world</h2>
//       <input type="text" name="" id="" />
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<Greeting />);

// // export default Greeting;

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg"
    alt="Interesting Facts For Curious Minds"
  />
);
const Title = () => {
  return <h2>Interesting Facts For Curious Minds</h2>;
};
const Author = () => <h4>Jordan Moore </h4>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
