const d = document;
const n = navigator;
export default function getGeolocation(id){
    const $id = d.getElementById(id);
    const $div = d.createElement('div');

    // Opciones para getCurrentPosition
    const options = {
        enableHightAccuracy: true,
        timeout: 5000,
        maximunAge: 0
    };

    const success = (position) => {
        //valores obtenidos
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        const accuracy = position.coords.accuracy;
        // console.log(position.coords);
        $div.insertAdjacentHTML('beforeend',
        `<h3>Tu posición actual es: </h3><br>
        <p><b>Latitud:</b> ${lat}</p>
        <p><b>Longitud:</b> ${long}</p>
        <p><b>Presición:</b> ${Math.round(accuracy)} Metros</p><br>
        <a href="https://www.google.com/maps/@${lat},${long},18z" target="_blank" rel="noopener"><p>Ver en Google Maps</p></a>`);

        $id.insertAdjacentElement('beforeend', $div);
    }
    const error = (err) => {
        $id.innerHTML = `<p>Error: <mark>${err.code}: ${err.message}</mark></p>`
        console.log(`Error ${err.code}: ${err.message}`);

    }
    
    n.geolocation.getCurrentPosition(success, error, options);
}