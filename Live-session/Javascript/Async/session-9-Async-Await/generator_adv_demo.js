function* fetchNextElement() {
  console.log("inside generator");
  const x = 10;
  yield 11;
  console.log("entering after yield");
  const y = x + (yield 30);
  console.log("value of y is ", y);
}
console.log("start");
const iter = fetchNextElement();
console.log("start generator");
console.log("first", iter.next());
console.log("second", iter.next(55));
console.log("second", iter.next(8));
