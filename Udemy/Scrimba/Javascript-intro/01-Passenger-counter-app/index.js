let countEl = document.getElementById("count");
let saveEl = document.getElementById("save-el");

let count = 0;
function increment() {
  console.log("clicked");
  count += 1;
  countEl.innerText = count;
  console.log(count);
}

function save() {
  //   console.log(count);
  let countStr = count + " - ";
  //   saveEl.innerText += countStr;//space after - got skipped
  saveEl.textContent += countStr;
  countEl.innerText = 0;
  count = 0;
}
