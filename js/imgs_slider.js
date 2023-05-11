const d = document;
export default function imgSlider(){
    const $prevBtn = d.getElementById('prev-btn');
    const $nextBtn = d.getElementById('next-btn');
    const $slides = d.querySelectorAll('.slide');
    
    let index;
    let $imgActive;

    const prev = () => {
        for (const entry of $slides.entries()) {
            if(entry[1].className.includes('active')){
                index = entry[0];
                $imgActive = entry[1];
                break
            }
        }

        if(index === 0) {
            $imgActive.classList.remove('active');
            $slides.item($slides.length - 1).classList.add('active');
        }
        else {
            $imgActive.classList.remove('active');
            $slides.item(index - 1).classList.add('active');
        }
        
    }
    
    const next = () => {
        for (const entry of $slides.entries()) {
            if(entry[1].className.includes('active')){
                index = entry[0];
                $imgActive = entry[1];
                break
            }
        }

        if(index === $slides.length - 1) {
            $imgActive.classList.remove('active');
            $slides.item(0).classList.add('active');
        }
        else {
            $imgActive.classList.remove('active');
            $slides.item(index + 1).classList.add('active');
        }

    }
    d.addEventListener('click', e => {
        if(e.target === $prevBtn) prev();
        if(e.target === $nextBtn) next();
    })
}