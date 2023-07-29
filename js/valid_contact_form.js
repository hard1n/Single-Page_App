const d = document;
// const _EMAIL = /^[_a-z\d\.]+@[a-z\d]+(\.[a-z]{2,15})+$/i;
// const _SUBJECT = /^[A-Zñáéíóúü\s\d_.-]+$/i;
// const JON_NAME = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
// const JON_EMAIL = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
// const JON_COMMENT =  /^.{1,255}$/

export default function contactFormValidator() {
    const $form = d.querySelector('.contact-form');
    const $inputs = d.querySelectorAll('.contact-form [required]');
    
    $inputs.forEach(input => {
        const $spanError = d.createElement('span');
        $spanError.id = input.name;
        $spanError.textContent = input.title;
        $spanError.classList.add('error-message');
        // input.insertAdjacentElement('afterend', $spanError);
        input.after($spanError);
    });

    const validator = (input, filter, minLength = 2) => {
        if (!input.value) {
            input.classList.add('invalid','empty');
            input.nextElementSibling.classList.remove('active');
        }
        else {
            input.classList.add('invalid','empty');
            // Validar Longitud del texto | mínimo 2
            if (input.value.length > minLength) {
                input.classList.remove('invalid','empty');
                //Validar con Expresiones Regulares
                if (filter instanceof RegExp) {
                    if (!filter.test(input.value)) {
                        input.classList.add('invalid');
                        input.nextElementSibling.classList.add('active');
                    }
                    else {
                        input.classList.add('valid');
                        input.nextElementSibling.classList.remove('active');
                    }
                }
                // Validar por Numero de caracteres
                if (typeof filter === 'number') {
                    if (input.value.length > filter) {
                        input.classList.add('invalid');
                        input.nextElementSibling.classList.add('active');
                    }
                    else{
                        input.classList.add('valid');
                        input.nextElementSibling.classList.remove('active');
                    }
                }
            }
            else {
                input.classList.add('valid');
                input.nextElementSibling.classList.remove('active');
            }
        }
    }
    
    d.addEventListener('keyup', e => {
        if(e.target.matches('.contact-form [required]')){
            let $input = e.target;
            // let pattern = new RegExp($input.getAttribute('pattern'), 'i');
            let pattern = $input.pattern || $input.dataset.pattern;
            
            if (pattern) {
                let filter = new RegExp(pattern, 'i');
                validator($input, filter);
            }

            if (!pattern) {
                if ($input.value === ""){
                    $input.classList.add('invalid');
                    $input.nextElementSibling.classList.add('active');
                }
                else {
                    $input.classList.remove('invalid');
                    $input.classList.add('valid');
                    $input.nextElementSibling.classList.remove('active');
                }
            }
        }
    });

    d.addEventListener('submit', e => {
        e.preventDefault();

        const $loader = d.querySelector('.contact-form__loader');
        const $reponse = d.querySelector('.contact-form__response');

        $loader.classList.remove('none');

        setTimeout(() => {
            $loader.classList.add('none');
            $reponse.classList.remove('none');
            $form.reset();
            setTimeout(() => $reponse.classList.add('none'), 2000);
        }, 3000);
    })
}