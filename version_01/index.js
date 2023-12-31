let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let amPm = document.getElementById("amPm");

function updateTime() {
  let date = new Date();

  hours.innerHTML =
    date.getHours() > 12
      ? date.getHours() > 10
        ? `0${date.getHours() - 12}`
        : date.getHours() - 12
      : date.getHours();

  minutes.innerHTML =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  seconds.innerHTML =
    date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();

  amPm.innerHTML = (date.getHours() > 12) ? "PM" : "AM";
}

updateTime();

window.addEventListener(
  "DOMContentLoaded",
  setInterval(() => {
    updateTime();
  }),
  1000
);
