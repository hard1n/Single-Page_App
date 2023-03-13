const d = document;

export default function responsiveTester(form) {
    const $form = d.getElementById(form);
    let popUp;
    d.addEventListener("submit", e => {
        e.preventDefault();
        if (e.target === $form) {
            const windowFeatures = `left=100,top=100,width=${$form.ancho.value},height=${$form.alto.value}`;
            //Validar si se ingresó una URL
            if ($form.direccion.value === "") return alert("Aun no ha ingresado una URL!!");
            popUp = open(
                $form.direccion.value, 
                "tester", 
                windowFeatures
            );
        }
    });
    // Cerrar el popUp
    d.addEventListener("click", e => {
        if (e.target === $form.cerrar) popUp.close();
    });
    /*** Necesita muchos parametros ***/
    // d.addEventListener("click", e => {
    //     if (e.target.matches(`#${openBtn}`)) {
    //         const $url = d.getElementById(url);
    //         const $inputWidth = d.getElementById(width);
    //         const $inputHeight = d.getElementById(height);
    //         const windowFeatures = `left=100,top=100,width=${$inputWidth.value},height=${$inputHeight.value}`;
    //         //Validar si se ingresó una URL
    //         if ($url.value === "") return alert("Aun no ha ingresado una URL!!");

    //         popUp = window.open(
    //             $url.value, 
    //             "mozillaWindow", 
    //             windowFeatures
    //         );
    //     }
    //     else if (e.target.matches(`#${closeBtn}`)) {
    //         popUp.close();
    //     }
    // });
}