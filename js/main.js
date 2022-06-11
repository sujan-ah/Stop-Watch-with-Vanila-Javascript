let seconds = 0
let minutes = 0
let hours = 0

let interval = null
let statusbar = "true"


let display_seconds = 0
let display_minutes = 0
let display_hours = 0

function stopwatch(){
    seconds++
    if(seconds / 60 === 1){
        seconds = 0
        minutes++
    }
    if(minutes / 60 === 1){
        minutes = 0
        hours++
    }


    if(seconds < 10){
        display_seconds = "0" + seconds.toString();
    }else{
        display_seconds = seconds;
    }

    if(minutes < 10){
        display_minutes = "0" + minutes.toString();
    }else{
        display_minutes = minutes;
    }

    if(hours < 10){
        display_hours = "0" + hours.toString();
    }else{
        display_hours = hours;
    }

    document.getElementById("display").innerHTML = display_hours + " : " + display_minutes + " : " + display_seconds;
}

function startstop(){
    if(statusbar === "true"){
        interval = window.setInterval(stopwatch, 100);
        document.getElementById("startstop").innerHTML = "Stop";
        statusbar = "false"
    }else{
        window.clearInterval(interval);
        document.getElementById("startstop").innerHTML = "Start";
        statusbar = "true";
    }
}

function reset(){
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('display').innerHTML = "00 :00 : 00"
}

