// Particle js

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load("js-home-particles", "js/particlesjs-config.json", function() {
  console.log("callback - particles.js config loaded");
});

// Countdown timer

const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

let countDown = new Date("May 30, 2018 00:00:00").getTime(),
  x = setInterval(function() {
    let now = new Date().getTime(),
      distance = countDown - now;

    (document.getElementById("days").innerText = Math.floor(distance / day)),
      (document.getElementById("hours").innerText = Math.floor(
        (distance % day) / hour
      )),
      (document.getElementById("minutes").innerText = Math.floor(
        (distance % hour) / minute
      )),
      (document.getElementById("seconds").innerText = Math.floor(
        (distance % minute) / second
      ));

    //do something later when date is reached
    //if (distance < 0) {
    //  clearInterval(x);
    //  'IT'S MY BIRTHDAY!;
    //}
  }, second);

// Mobile menu

$(".js-nav-toggler").on("click", function() {
  $(this).toggleClass("nav-toggler--opened");
  $("body").toggleClass("overflow-hidden");
  $(".nav--header").slideToggle();
});
