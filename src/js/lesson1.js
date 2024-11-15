window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults = true;

recognition.addEventListener('result', (e) => {
    const text = Array.from(e.results).map(result => result[0]).map(result => result.transcript).join('');

    if (e.results[0].isFinal){
        if(text.includes('back')){
            window.location = "index.html";
            console.log("gonig back");
        }
    }
});

recognition.addEventListener('end', () => {
    recognition.start();
})

recognition.start();