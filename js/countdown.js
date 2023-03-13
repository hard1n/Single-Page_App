const d = document;
let runningCountdown;

export function countDown(inputDate, displayCount, countdownBtn) {
    //Quitar los guiones a los valores del input
    let stringDate = d.querySelector(inputDate).value.split("-");
    //Convertir los valores a un array de números
    let arrayDate = stringDate.map(el => parseInt(el));

    // let arrayDate = "March 1, 2023 20:05:25"

    //Fecha en milisegundos
    // let dateInMS = d.querySelector(inputDate).valueAsNumber;

    // let daysInMS =  new Date(arrayDate[0], arrayDate[1] -1, arrayDate[2]).getTime() - new Date().getTime();
    // let daysInMS =  dateInMS - new Date().getTime();

    // console.log(new Date(arrayDate).getTime(), new Date().getTime(), new Date(2023,2, 1).getTime())

    // let hours = 23 - new Date().getHours();
    // let minutes = 59 - new Date().getMinutes();
    // let seconds = 59 - new Date().getSeconds();

    runningCountdown = setInterval(() => {
        let daysInMS =  new Date(arrayDate).getTime() - new Date().getTime(),
        days = Math.floor(daysInMS / (1000 * 60 * 60 * 24)),

        hours = Math.floor(daysInMS % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
        minutes = Math.floor(daysInMS % (1000 * 60 * 60) / (1000 * 60)),
        seconds = Math.floor(daysInMS % (1000 * 60) / (1000));

        // d.querySelector(displayCount).append(`<h3>${days} Días</h3>`)

        // displayCount.insertAdjacentElement("afterbegin", `<h3>${days} Días</h3>`);
        // displayCount.insertAdjacentElement("afterbegin", `<h3>${hours} Horas</h3>`);
        // displayCount.insertAdjacentElement("afterbegin", `<h3>${minutes} Minutos</h3>`);
        // displayCount.insertAdjacentElement("afterbegin", `<h3>${seconds} Segundos</h3>`);
        
        d.querySelector(displayCount).children[0].textContent = `Para ${d.querySelector(inputDate).value} faltan`
        d.querySelector(displayCount).children[1].textContent = `${days} Días`
        d.querySelector(displayCount).children[2].textContent = `${hours} Horas`
        d.querySelector(displayCount).children[3].textContent = `${minutes} Minutos`
        d.querySelector(displayCount).children[4].textContent = `${seconds} Segundos`

        // d.querySelector(displayDate).textContent = `
        // ${days} Días 
        // ${hours} Horas 
        // ${minutes} Minutos 
        // ${seconds} Segundos`

        //Mensaje de finalizacion del conteo
        if (daysInMS < 0) {
            clearInterval(runningCountdown);
            // return alert("¡¡ Finalizó el contero regresivo !!")
            d.querySelector(displayCount).children[0].textContent = `¡¡ Finalizó el contero regresivo !!`
            d.querySelector(displayCount).children[1].textContent = "";
            d.querySelector(displayCount).children[2].textContent = "";
            d.querySelector(displayCount).children[3].textContent = "";
            d.querySelector(displayCount).children[4].textContent = "";
        }

    }, 1000);
    
    //Habilita el btn
    d.querySelector(countdownBtn).disabled = false;
    //Desabilita el inputDate
    d.querySelector(inputDate).disabled = true;
}

export function changeDate(inputDate, countdownBtn) {
    d.addEventListener('click', e => {
        if (e.target.matches(countdownBtn)) {
            //Desabilita el btn
            d.querySelector(countdownBtn).disabled = true;
            //Habilita el inputDate
            d.querySelector(inputDate).disabled = false;

            clearInterval(runningCountdown);
        }
    })
}