const d = document;
const _NAME = /^[A-Zñáéíóúü\s]+$/i;
const _EMAIL = /^[_A-Z\d\.]+@[A-Z\d]+(\.[A-Z]{2,15})+$/i;
// const _EMAIL = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
const _SUBJECT = /^[A-Zñáéíóúü\s\d_.-]+$/i;
// const REG_EXP_COMMENT = 

export default function validateForm() {
    const $name = d.getElementById('input-name');
    const $lastname = d.getElementById('input-lastname');
    const $subject = d.getElementById('input-subject');
    const $email = d.getElementById('input-email');
    const $comment = d.getElementById('text-comment');
    
    //Validation Function
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

    d.addEventListener('keyup', (e)=> {
        if(e.target.matches('#input-name')){
             validator($name, _NAME);
        }
        if(e.target.matches('#input-lastname')){
            validator($lastname, _NAME);
        }
        if(e.target.matches('#input-subject')){
            validator($subject, _SUBJECT)
        }
        if(e.target.matches('#input-email')){
            validator($email, _EMAIL, 5);
        }
        if(e.target.matches('#text-comment')){
            validator($comment, 255, 10);
        }
    })
}