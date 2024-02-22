"use strict";

document.addEventListener("DOMContentLoaded", (event) => {

  const endDateTime = "2024-05-23";

  function addZeroSymb(num){
    if(num >= 0 && num < 10){
        return `0${num}`;
    } else{
        return num;
    }
  }

  function getTimeRemain(endDateTime) {
    const t = Date.parse(endDateTime) - Date.parse(new Date()),
      days = Math.floor(t / (1000 * 60 * 60 * 24)),
      hours = Math.floor((t / (1000 * 60 * 60)) % 24),
      minutes = Math.floor((t / 1000 / 60) % 60),
      seconds = Math.floor((t / 1000) % 60);

    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }
  function setClock(selector, endDateTime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds"),
      timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const t = getTimeRemain(endDateTime);

      days.innerHTML = addZeroSymb(t.days);
      hours.innerHTML = addZeroSymb(t.hours);
      minutes.innerHTML = addZeroSymb(t.minutes);
      seconds.innerHTML = addZeroSymb(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
        days.innerHTML = 0;
        hours.innerHTML = 0;
        minutes.innerHTML = 0;
        seconds.innerHTML = 0;
      }
    }
  }
  setClock(".timer", endDateTime);
});
