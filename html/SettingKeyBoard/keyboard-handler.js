var soundBase = localStorage.getItem('soundBase');
const Keys = localStorage.getItem('Keys');

document.addEventListener("DOMContentLoaded", function () {
    let utterance = new SpeechSynthesisUtterance("Choose a key to change it's audio or press escape to leave");
    speechSynthesis.speak(utterance);
    console.log(101)
});

document.addEventListener("keydown", e =>{
    console.log(e.key)
})


