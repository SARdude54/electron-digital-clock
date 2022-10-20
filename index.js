
function show(){
    let time = new Date();
    let seconds = time.getSeconds();
    let minutes = time.getMinutes();
    let hours = time.getHours();

    document.getElementById("clock").innerHTML = `${hours}:${minutes}:${seconds}`;
}

setInterval(show, 1000)

