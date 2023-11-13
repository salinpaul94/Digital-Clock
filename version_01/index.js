let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

function updateTime() {
  let date = new Date();

  hours.innerHTML =
    date.getHours() > 12
      ? date.getHours() > 10
        ? `0${date.getHours() - 12}`
        : date.getHours() - 12
      : date.getHours();
  minutes.innerHTML = date.getMinutes();
  seconds.innerHTML = date.getSeconds();
}

updateTime();

window.addEventListener(
  "DOMContentLoaded",
  setInterval(() => {
    updateTime();
  }),
  1000
);
