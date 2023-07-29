const d = document;

export default function textToSpeech(){
    const $voiceSelect = d.querySelector('#speech-select');
    const $text = d.querySelector('.text-to-play');
    const $playBtn = d.querySelector('.play-text-btn');
    const synth = window.speechSynthesis;
    let voices = [];
    
    // const populateVoiceList = () => {}
    // populateVoiceList()

    
    // media.webspeech.recognition.enable
    // media.webspeech.synth.enabled
    //Evento para esperar a que capture las voces
    synth.addEventListener("voiceschanged", (e) => {
        voices = synth.getVoices();    
        // console.log('voces', voices );
        // Llenar lista de voces
        voices.forEach(voice => {
            const $option = d.createElement('option');
            
            $option.textContent = `${voice.name} (${voice.lang})`
            if (voice.default) $option.textContent = `-Default- ${voice.name}`;

            $option.setAttribute("data-lang", voice.lang);
            $option.setAttribute("data-name", voice.name);
            $voiceSelect.insertAdjacentElement('beforeend', $option);
            // console.log($voiceSelect);
            // console.log('Voz', voice);
        });
    });

    d.addEventListener('click', e => {
        if(e.target.matches('.play-text-btn,.play-text-btn *')){

            // let selectedVoice = $voiceSelect.options.selectedIndex;
            let selectedIndex = $voiceSelect.selectedIndex < 0 ? selectedIndex = 0 : $voiceSelect.selectedIndex;
            let selectedVoice = $voiceSelect.selectedOptions[selectedIndex].getAttribute("data-name");

            if ($text.value !== ""){
                const sayText = new SpeechSynthesisUtterance($text.value);
                // sayText.voice = 
                // console.log('Voz selected', selectedVoice);
                // console.log(voices[0].name);

                for (let i = 0; i < voices.length; i++) {
                    if (voices[i].name === selectedVoice) {
                        sayText.voice = voices[i];
                      break;
                    }
                }
                console.log(sayText.rate)
                synth.speak(sayText);
            }
            else {
            }

            // console.log($playBtn.children[0]);
            // console.log($playBtn.children[1]);
            $playBtn.children[0].classList.add('none');
            $playBtn.classList.add('active');
            $playBtn.children[1].classList.remove('none');
            setTimeout(()=>{
                $playBtn.classList.remove('active');
                $playBtn.children[0].classList.remove('none');
                $playBtn.children[1].classList.add('none');
            },3000)
        }
    });
}