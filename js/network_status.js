const d = document;
const n = navigator;

export default function networkStatus() {

    const isOnline = () => {
        const $div = d.createElement('div');
        const $span = d.createElement('span');
        const $conectIcon = d.createElement('div');
        if(n.onLine){
            $div.insertAdjacentHTML('afterbegin', 
            $span.textContent = "Conexíon Restablecida");

            $div.classList.add('conect-status','on');
            // setTimeout(() => {
            //     d.body.removeChild($conectIcon);
            // }, 2000);
        }
        else {
            $div.insertAdjacentHTML('afterbegin',
            $span.textContent = "Conexíon Perdida");
            
            $div.classList.add('conect-status', 'off');
            //No conection Icon
            // setTimeout(() => {
            //     $conectIcon.insertAdjacentHTML('afterbegin',
            //     `<span class="icon-router conect-icon"></span>`);
            //     $conectIcon.classList.add('icon-container')
            //     d.body.append($conectIcon);
            // }, 2000);
            // d.body.insertAdjacentHTML('afterbegin', `
            //     <div class="icon-container">
            //     <span class="icon-router conect-icon"></span>
            //     </div>
            // `)
        }

        d.body.append($div);
        setTimeout(() => d.body.removeChild($div), 5000);
    }

    window.addEventListener('online', e => isOnline());
    window.addEventListener('offline', e => isOnline());
}