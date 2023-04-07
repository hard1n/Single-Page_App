export default function webcamDetection(player) {
    const d = document;
    const n = navigator;
    const $player = d.getElementById(player);
    
    if (n.mediaDevices.getUserMedia){
        n.mediaDevices.getUserMedia({ video:true, audio:false })
        
        .then(stream => {
            // console.log(stream)
            $player.srcObject = stream;
            $player.play();
        })
        .catch(e => 
            {
                console.log(`Ocurrió un el siguiente error: ${e}`)
                $player.insertAdjacentHTML('beforebegin', 
                `<p>Ocurrió un el siguiente error: <mark>${e}</mark></p>`)
            }
        );
    }
}