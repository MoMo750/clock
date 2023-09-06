function clock(){
    let date = new Date();
        hour = date.getHours(),
        minute = date.getMinutes(),
        second = date.getSeconds();
        flag = "AM"

    document.querySelector(".hours").innerHTML = hour;
    document.querySelector(".minutes").innerHTML = minute;
    document.querySelector(".seconds").innerHTML = second;


    // if(hour < 10)    hours = "0" + hour;
    // if(minute < 10)  minutes =  "0" + minute;
    // if(second < 10)  seconds = "0" + seconds;
    
    // if(hour == 0){
    //     hour = 12;
    // }
    // if(hour > 12){
    //     hour = hour - 12;
    //     flag = "pm"
    // }

    setTimeout(function(){
        clock()
    })
 }

 setInterval(clock);
 /////////////////////////////////////////////////

 let sec = document.querySelector(".sec");
 let min = document.querySelector(".min");
 let hr = document.querySelector(".hr");

 setInterval(function(){
    let time = new Date();
    let secs = time.getSeconds() * 6;
    let mins = time.getMinutes() * 6;
    let hrs = time.getHours() * 30;

    sec.style.transform = `rotateZ(${secs}deg)`;
    min.style.transform = `rotateZ(${mins}deg)`;
    hr.style.transform = `rotateZ(${hrs+(mins/12)}deg)`;
 })
 ////////////////////////////

let span = document.querySelector('.footer_span');
let spanDate = new Date();
let year = spanDate.getFullYear();

span.innerHTML = year;

