Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)



 let date = new Date();

let seconds = date.getSeconds(), minutes = date.getMinutes(), hours = date.getHours();

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