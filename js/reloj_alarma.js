const d = document;

export function clock(startBtn, stopBtn, clockDisplay) {
    let runningClock;

    d.addEventListener("click", e => {
        if (e.target.matches(`${startBtn}, ${startBtn} *`)) {
            d.querySelector(startBtn).disabled = true;
            d.querySelector(clockDisplay).textContent = new Date().toLocaleTimeString();
            runningClock = setInterval(() => {
                d.querySelector(clockDisplay).textContent = new Date().toLocaleTimeString();
            }, 1000);
            //d.querySelector(clock).innerHTML = `<h3></h3>` //inyectando el html
        }
        if (e.target.matches(`${stopBtn}, ${stopBtn} *`)) {
            d.querySelector(startBtn).disabled = false;
            clearInterval(runningClock);
            d.querySelector(clockDisplay).textContent = "";
        }
    });
}

export function alarm(startBtn, stopBtn, audioElmt) {

    d.addEventListener("click", e => {
        if (e.target.matches(`${startBtn}, ${startBtn} *`)) {
            d.querySelector(startBtn).disabled = true;
            d.querySelector(audioElmt).play();

            //SOlUCION DEL PROFE CON setTimeout
        }
        if (e.target.matches(`${stopBtn}, ${stopBtn} *`)) {
            d.querySelector(startBtn).disabled = false;
            d.querySelector(audioElmt).pause();
            d.querySelector(audioElmt).currentTime = 0; //Reinicia el sonido
        }
    }); 
}