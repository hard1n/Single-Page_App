
export default function videoPlayer(player, controls, playPauseBtn, capture, picIn) {
    const d = document;
    const $player = d.getElementById(player);
    const $controls = d.getElementById(controls);
    const $playPauseBtn = d.getElementById(playPauseBtn);
    const $capture = d.getElementById(capture);
    const $picIn = d.getElementById(picIn);

    /** Funciones **/
    const togglePlay = () => {
        // ($player.paused) ? $player.play() : $player.pause();
        // const method = ($player.paused )? 'play' : 'pause';
        // $player[method];
        if ($player.paused) {
            $player.play();
            $playPauseBtn.innerHTML =  `<i class="icon-pause"></i>`;
        }
        else {
            $player.pause(); 
            $playPauseBtn.innerHTML = `<i class="icon-play"></i>`;
        }
    }

    const togglePicInPic = () => {
        // $player.requestPictureInPicture();
        if (d.pictureInPictureElement) {
            d.exitPictureInPicture();
        } 
        else if (d.pictureInPictureEnabled) {
            $player.requestPictureInPicture();
        }
    }

    /** Eventos **/
    d.addEventListener('click', e => {
        // Boton play/pausa
        if(e.target.matches(`#${playPauseBtn}, #${playPauseBtn} *`)) return togglePlay();
        if(e.target.matches(`#${picIn}, #${picIn} *`)) return togglePicInPic();

        // Pausar clicando el video
        if(e.target.matches(`#${controls}`)) return togglePlay();
    });
    
    // Mostrar controles
    $player.addEventListener('mouseenter', e => {
        $controls.classList.add('show-controls');
    });
    
    // $player.addEventListener('mouseleave', e => {
    //     $controls.addEventListener('mouseleave', e => {
    //         $controls.classList.remove('show-controls');
    //     });
    // });

    $controls.addEventListener('mouseleave', e => {
        setTimeout(() => $controls.classList.remove('show-controls'), 1500);
    });
}  