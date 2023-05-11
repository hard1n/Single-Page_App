const d = document;

export default function searchFilter(input, selector) {
    const $cardsNode = d.querySelectorAll(selector);

    d.addEventListener('keyup', e => {
        if(e.target.matches(input)) {
            // console.log(e.target.value)
            $cardsNode.forEach(el => 
            el.textContent.toLowerCase().includes(e.target.value) 
            ? el.classList.remove('hide')
            : el.classList.add('hide'));
        }
    })
}