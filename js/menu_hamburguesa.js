export default function hamburgerMenu(btnMenu, navModal, menuLink) {
    const d = document;

    d.addEventListener("click", e => {
        if(e.target.matches(`${btnMenu}, ${btnMenu} *`)) {
            d.querySelector(navModal).classList.toggle("is-active");
            d.querySelector(btnMenu).classList.toggle("is-active");
        }

        if(e.target.matches(menuLink)) {
            d.querySelector(navModal).classList.remove("is-active");
            d.querySelector(btnMenu).classList.remove("is-active");
        }
    });
}
