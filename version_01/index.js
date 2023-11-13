let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

function updateTime() {
  let date = new Date();

  hours.innerHTML = date.getHours();
  minutes.innerHTML = date.getMinutes();
}

updateTime();
