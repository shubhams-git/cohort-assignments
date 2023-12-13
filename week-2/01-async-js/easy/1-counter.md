## Create a counter in JavaScript

We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second

let seconds = 0, minutes = 0, hours = 0;

function IncreaseCounter(){
    seconds++;
    if(seconds>59){
        seconds=0;
        minutes++;
    }
    if (minutes>59){
        minutes=0;
        hours++
    } 
    if (hours>23){
        hours=0;
    }
}

function printTime(){
    console.log(`Current Time: ${hours}::${minutes}::${seconds}`)
}

function startClock(){
    IncreaseCounter();
    printTime();
}

setInterval(startClock, 1000);