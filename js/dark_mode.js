const d = document;
const ls = localStorage;

export default function darkModeToggle(darkModeBtn){
    const lightMode = () => {
        d.body.classList.remove('dark-mode');
        d.getElementById(darkModeBtn).classList.remove('dark-mode--on');
        ls.setItem("theme", "light");
    };
    const darkMode = () => {
        d.body.classList.add('dark-mode');
        d.getElementById(darkModeBtn).classList.add('dark-mode--on');
        ls.setItem("theme", "dark");

    };

    d.addEventListener("click", e => {
        if (e.target.matches(`#${darkModeBtn}, #${darkModeBtn} *`)){
            if(d.body.classList.contains('dark-mode')){
                lightMode();
            }
            else { 
                darkMode();
            }
        }
    });

    d.addEventListener("DOMContentLoaded", e => {
        //El documenta carga en light por defalt
        if(ls.getItem("theme") === null) ls.setItema("theme", "light");
        //
        if(ls.getItem("theme") === "light") lightMode();
        if(ls.getItem("theme") === "dark") darkMode();
    });
}