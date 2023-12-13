## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let seconds = 0,
  minutes = 0,
  hours = 0;

function IncreaseCounter() {
  seconds++;
  if (seconds > 59) {
    seconds = 0;
    minutes++;
  }
  if (minutes > 59) {
    minutes = 0;
    hours++;
  }
  if (hours > 23) {
    hours = 0;
  }
}

function printTime() {
  console.log(`Current Time: ${hours}:${minutes}:${seconds}`);
}

function startClock() {
  IncreaseCounter();
  printTime();
  setTimeout(startClock, 1000);
}
startClock();






































































(Hint: setTimeout)