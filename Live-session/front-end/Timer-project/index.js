const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const timer = document.querySelector(".timer");

const items = document.querySelectorAll(".card p");

let playBtn = document.querySelector(".btn");

playBtn.addEventListener("click", function () {
  let dateAndTimeSelected = document.querySelector(".calendar").value;
  console.log(dateAndTimeSelected);
  // console.log(typeof dateAndTimeSelected);

  const selectedYear = dateAndTimeSelected.substring(0, 4);
  const selectedMonth = dateAndTimeSelected.substring(5, 7);
  const selectedDay = dateAndTimeSelected.substring(8, 10);
  const selectedHours = dateAndTimeSelected.substring(11, 13);
  const selectedMinutes = dateAndTimeSelected.substring(14);
  // const selectedSeconds = dateAndTimeSelected.substring(5,7);

  console.log(
    `${selectedYear} : ${selectedMonth} : ${selectedDay} : ${selectedHours} : ${selectedMinutes}`
  );

  const futureDate = new Date(
    selectedYear,
    selectedMonth - 1,
    selectedDay,
    selectedHours,
    selectedMinutes,
    0
  );
  console.log(futureDate);

  const futureTime = futureDate.getTime();
  console.log(futureTime);

  function getRemaindingTime() {
    const currentTime = new Date().getTime();

    const t = futureTime - currentTime;
    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60m
    // 1d = 24hr
    // values in miliseconds
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    // calculate all values
    let days = t / oneDay;
    days = Math.floor(days);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);

    // set values array
    const values = [days, hours, minutes, seconds];
    function format(item) {
      if (item < 10) {
        return (item = `0${item}`);
      }
      return item;
    }

    items.forEach(function (item, index) {
      item.innerHTML = format(values[index]);
    });

    if (t < 0) {
      clearInterval(countdown);
      // timer.innerHTML = `<h4 class="expired">Time expired!</h4>`;
      items.forEach(function (item) {
        item.textContent = "X";
      });
    }
  }
  // countdown;
  let countdown = setInterval(getRemaindingTime, 1000);
  //set initial values
  getRemaindingTime();
});
