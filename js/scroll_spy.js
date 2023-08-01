const d = document;

export default function scrollSpy() {
    const $sections = d.querySelectorAll("section[data-scroll-spy]");
    // const $links = d.querySelectorAll("section[data-scroll-spy]");

    let options = {
        // root: d.querySelector("#scrollArea"),
        rootMargin: "-50% 0px",
        threshold: 0
    };
    const cb = (entries) => {
        entries.forEach(el => {
            const id = el.target.id;
            if(el.isIntersecting){
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add('section-active');
                
                // for (const entry of $$links.entries()) {
                //     // console.log("Entró", entry[1]);
                    
                //     entry[1].classList.remove('section-active');
                //     if(entry[1].attributes.href.value.includes(el.target.id)){
                //         console.log("Entró", entry[1].attributes.href.value);
                //         entry[1].classList.add('section-active');
                //     }
                // }
            }
            else {
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove('section-active');
            }
        })
    }

    const observer = new IntersectionObserver(cb, options);
    $sections.forEach(el => observer.observe(el));
}
