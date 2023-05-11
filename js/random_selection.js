const d = document;

export default function randomSelection(items, randomBtn, resetBtn) {
    const $listItems = d.querySelectorAll(items);

    d.addEventListener('click', e => {
        // Select Button
        if(e.target.matches(randomBtn)){
            const randomNum = Math.floor(Math.random() * items.length);
            // console.log($listItems);
            // console.log(randomNum);
            $listItems.forEach(el => {
                el.classList.remove('ran-select');
            });
            setTimeout(() => {
                $listItems[randomNum].classList.add('ran-select');
            }, 300);
        }
        // Reset Button
        if(e.target.matches(resetBtn)){
            $listItems.forEach(el => {
                el.classList.remove('ran-select');
            });
        }
    })
}

//*** Funcion para hacer sorteo digital ***/
// const getWinnerComments = (selector) => {
//     const $players = document.querySelectorAll(selector);
//     const random = Math.floor(Math.random() * $players.length);
//     const winner = $players[random];

//     console.log(`El Ganador es: ${winner}`)
// }