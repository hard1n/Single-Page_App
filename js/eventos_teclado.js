const d = document;
let x = 0,
    y = 0;

export function moveBall(e, ball, ballContainer) {
    const $ball = d.querySelector(ball),
        $ballContainer = d.querySelector(ballContainer),
        limitsBall = $ball.getBoundingClientRect(), //Detectar la colición de un elmt con otro
        limitsBallContainer = $ballContainer.getBoundingClientRect();
        // console.log(limitsBall, limitsBallContainer);

    switch (e.keyCode) {
        //left
        case 37:
            //Primero comprueba si llegó al límite del contenedor
            if (limitsBall.left > limitsBallContainer.left) {;
                x--
                e.preventDefault();
                d.querySelector(`${ball} > #left`).classList.add("active"); //Activar flecha
            }
            break;
        //up
        case 38:
            if (limitsBall.top > limitsBallContainer.top) {
                y--;
                e.preventDefault();
                d.querySelector(`${ball} > #up`).classList.add("active"); //Activar flecha
            }
            break;
        //right
        case 39:
            if (limitsBall.right < limitsBallContainer.right) {
                x++;
                e.preventDefault();
                d.querySelector(`${ball} > #right`).classList.add("active"); //Activar flecha
            }
            break;
        //down
        case 40:
            if (limitsBall.bottom < limitsBallContainer.bottom) {
                y++;
                e.preventDefault();
                d.querySelector(`${ball} > #down`).classList.add("active"); //Activar flecha
            }
            break;
    
        default:
            break;
    }
    $ball.style.transform = `translate(${x *10}px, ${y *10}px)`;
}

// Quita los estilos de la flecha al dejar de pulsar
export function cleanArrows(ballArrows){
    d.addEventListener("keyup", e => {
        d.querySelectorAll(ballArrows).forEach(el => {
            el.classList.remove("active");
        });
    });
}

export function shortCuts(e) {
    // console.log(e);
    // console.log(e.type);
    // console.log(e.key);
    // console.log(e.keyCode);
    // console.log(`ctrl: ${e.ctrlKey}`); //Devuelve un boolean si es precionada
    // console.log(`alt: ${e.altKey}`); //Devuelve un boolean si es precionada
    // console.log(`shift: ${e.shiftKey}`); //Devuelve un boolean si es precionada

    if (e.key === "a" && e.altKey) {
        alert("Alerta con atajos del teclado!");
    }
    if (e.key === "c" && e.altKey) {
        confirm("Comfirmacion con atajos del teclado!");
    }
    if (e.key === "p" && e.altKey) {
        let message = prompt("Promt con atajos del teclado!");
        console.log(message);
    }
}