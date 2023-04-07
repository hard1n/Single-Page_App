export default function scrollTop(scrollUpBtn) {
    const $scrollUpBtn = document.getElementById(scrollUpBtn);
    //Se puede usar window.pageYOffset o docuement.documenteElement.scrollTop
    window.addEventListener("scroll", e => {
        if (scrollY > 560) {
            $scrollUpBtn.classList.add("active");
            $scrollUpBtn.classList.remove("btn-hidden");
        }
        if (scrollY < 85) {
            $scrollUpBtn.classList.remove("active");
            $scrollUpBtn.classList.add("btn-hidden");
        }
    });

    document.addEventListener("click", e => {
        //Se puede hacer con window.scrollTo()
        if (e.target.matches(`#${scrollUpBtn}, #${scrollUpBtn} *`)){
            scroll(0, 0);
        }
    })
}

// export function scrollUp(scrollUpBtn) {
//     document.addEventListener("click", e => {
//         if (e.target.matches(`#${scrollUpBtn}, #${scrollUpBtn} *`)){
//             scroll(0, 0);
//         }
//     })
// }