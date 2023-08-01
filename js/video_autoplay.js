const d = document;

export default function autoplayVid() {
    const $video = d.querySelector('video[data-auto-vid]');
    const $togglePlayBtn = d.querySelector('#toggle-play-btn');

    // let isPlaying = $video.currentTime > 0 && !$video.paused && !$video.ended 
    // && $video.readyState;
    // let playPromise = $video.play();

    const cb = (entries) => {
        // console.log(entries)
        entries.forEach(entry => {
            // if (entry.isIntersecting){
            //     entry.target.play();
            //     // console.log("Entró", entry.target)
            // }
            // else {
            //     entry.target.pause();
            //     // console.log("Salió", entry.target)
            // }
            if (entry.isIntersecting){
                    entry.target.play();
                    // console.log("Entró", entry.target)
                    d.addEventListener('visibilitychange', () => {
                        d.visibilityState === "visible"
                            ? entry.target.play()
                            : entry.target.pause()
                    })
            }
        });
    }

    const observer = new IntersectionObserver(cb, {threshold: 0.5});
    observer.observe($video)

    // console.log($video.pause())
    /** Toggle Play **/
    const togglePlay = () => {
        $video.paused ? $video.play() : $video.pause();
        // if (playPromise !== undefined) {
        //     playPromise.then(_ => {
        //       // Automatic playback started!
        //       // Show playing UI.
        //       // We can now safely pause video...
        //       $video.pause();
        //     })
        //     .catch(error => {
        //       // Auto-play was prevented
        //       // Show paused UI.
        //       console.log(error);
        //     });
        // }
        // const method = ($video.paused )? 'play' : 'pause';
        // $video[method];
        // if (isPlaying) {
        //     $video.play();
        //     d.getElementById('toggle-play-btn').classList.replace('icon-play','icon-pause');
        // }
        // else {
        //     $video.setAttribute('autoplay', false);
        //     $video.setAttribute('loop', false);
        //     $video.pause(); 

        //     d.getElementById('toggle-play-btn').classList.replace('icon-pause','icon-play');
        // }
    }

    d.addEventListener('click', e => {
        if (e.target.matches(`#toggle-play-btn`)) {
            // console.log("play");
            togglePlay();
        };
    });

    $video.addEventListener('play', () => {
        // console.log($togglePlayBtn.classList);
        $togglePlayBtn.firstElementChild.classList.replace('icon-play','icon-pause');
        // $togglePlayBtn.classList.remove('icon-play');
        // $togglePlayBtn.classList.add('icon-pause');

        // console.log($togglePlayBtn.firstElementChild);
        // console.log("play");
    });

    $video.addEventListener('pause', () => {
        // console.log($togglePlayBtn.classList);
        $togglePlayBtn.firstElementChild.classList.replace('icon-pause','icon-play');
        // $togglePlayBtn.classList.remove('icon-pause');
        // $togglePlayBtn.classList.add('icon-play');

        // console.log($togglePlayBtn.firstElementChild);
        // console.log("pause");
    })
}

function scrollTextAnimate() {
    addEventListener('scroll', e => {

    })
}