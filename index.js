setInterval(()=>{
    date = new Date;
    h = date.getHours();
    m = date.getMinutes();
    s = date.getSeconds();
    hourRotation = 30*h +0.5*m + s/120;
    minRotation = 6*m + 0.1*s;
    secondsRotation =6*(s+date.getMilliseconds()/1000);
    // console.log(secondsRotation)
    document.querySelector(".hour").style.transform = `rotate(${hourRotation}deg)`;
    document.querySelector(".minute").style.transform = `rotate(${minRotation}deg)`;
    document.querySelector(".second").style.transform = `rotate(${secondsRotation}deg)`;
},1)