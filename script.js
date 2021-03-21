//Fullscreen
document.querySelector('.fullscreen').addEventListener('click', check);
document.querySelector('.fullscreen').addEventListener('click', toogleScreen);
function check() {
    console.log('fullscreenEnabled:')
    console.log(document.fullscreenEnabled)
    console.log('fullscreenElement:')
    console.log(document.fullscreenElement)
}
function toogleScreen() {
    if (document.fullscreenElement===null) {
        document.documentElement.requestFullscreen();
    }
    else {
        if (document.fullscreenEnabled==true) {
            document.exitFullscreen();
        }
    }    
}


//notes => letters
const btnNotes = document.querySelector('.btn-notes');
const btnLetters = document.querySelector('.btn-letters');
const PIANOkeys = document.querySelectorAll('.piano-key');
btnLetters.addEventListener('click', (event) => {
    btnLetters.classList.add('btn-active');
    btnNotes.classList.remove('btn-active');
    PIANOkeys.forEach((key) => {
        key.classList.add("piano-key-letter");
      });
});

btnNotes.addEventListener('click', (event) => {
    btnNotes.classList.add('btn-active');
    btnLetters.classList.remove('btn-active');
    PIANOkeys.forEach((key) => {
        key.classList.remove("piano-key-letter");
      });
});
// keyboard
  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('active');
  }

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;
    key.classList.add('active');
    audio.currentTime = 0;
    audio.play();
  }

  const keys = Array.from(document.querySelectorAll('.piano-key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);
  window.addEventListener('keyup', () => {
      const key= document.querySelector('.piano-key');
      key.classList.remove('active');
  });


  //Mouse
  
  const pianoКey = document.querySelectorAll('.piano-key');
  const pKey = document.querySelector('.piano-key');
  const PIANO = document.querySelector(".piano");
  
  function playAudio(event) {
      const audio = new Audio();
      if (event.target.classList.contains("piano-key")) {
        const note= event.target.dataset.note;
        const src= `assets/audio/${note}.mp3`;
        audio.src= src;
        audio.currentTime = 0;
        audio.play();
      }
  }
  
  const startSound = (event) => {
    if (event.target.classList.contains("piano-key")) {
        event.target.classList.add('active');
        playAudio(event);
    }
  }
  
  const stopSound = (event) => {
    event.target.classList.remove("active");
  }
  
  const startCorrespondOver = (event) => {
    if (event.target.classList.contains('piano-key')) {
        PIANO.addEventListener("mousedown", startSound);

        event.target.classList.add("active");
        pianoКey.forEach((elem) => {
            elem.addEventListener("mouseover", startSound);
            elem.addEventListener("click", startSound);
            elem.addEventListener("mouseout", stopSound);
        });
    }
}
    
  const stopCorrespondOver = () => {
    pianoКey.forEach((elem) => {
      elem.classList.remove("active");
      elem.removeEventListener("mouseover", startSound);
      elem.removeEventListener("mouseout", stopSound);
    });
  }

 
 document.addEventListener("mousedown", startCorrespondOver, false);
 document.addEventListener("mouseup", stopCorrespondOver)