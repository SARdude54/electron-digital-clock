
const MONTH = {
    1: "January",
    2: "Feburary",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
}

function show(){
    let time = new Date();

    let year = time.getFullYear()
    let month = MONTH[time.getMonth()]
    let day = time.getDate()

    let seconds = time.getSeconds();
    let minutes = time.getMinutes();
    let hours = time.getHours();

    if (seconds < 10){
        seconds = "0" + seconds
    }
    if (minutes < 10){
        minutes = "0" + minutes
    }
    if (hours < 10){
        hours = "0" + hours
    }

    if (hours > 12){
        hours -= 12
    }
    if (day < 10){
        day = "0" + day
    }

    document.getElementById("date").innerText = `${month} ${day}, ${year}`
    document.getElementById("time").innerText = `${hours}:${minutes}:${seconds}`;
}

setInterval(show, 1000)

