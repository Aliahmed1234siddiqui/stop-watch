var sec = 0;
var min = 0;
var hour = 0;
var startbtn = document.getElementById("startbtn"); 
var stopbtn = document.getElementById("stopbtn"); 
var resetbtn = document.getElementById("resetbtn"); 


var secval = document.getElementById("sec");
var hourval = document.getElementById("hour");
var minval = document.getElementById("min");
var interval;

function renter(){
    secval.innerHTML = sec;
    minval.innerHTML = min;
    hourval.innerHTML = hour;
}

function start(){
    sec++;
if(sec == 60){
    min++;
    sec = 0;
    if(min == 60){
 hour++;
 min = 0; 
    }

}
renter();

}
function timer(){
    
    resetbtn.disabled = false;
    startbtn.disabled = true;
    stopbtn.disabled = false; 

    interval = setInterval(function(){
     start();
    },1000)
}
function stop(){
 stopbtn.disabled = true;
    startbtn.disabled = false;

clearInterval(interval);
}
function reset(){

    resetbtn.disabled = true;
    startbtn.disabled = false;
    stopbtn.disabled = false;


    sec = 0;
    min = 0;
    hour = 0;
    stop();
    renter();
}