const texts = document.querySelector('.texts');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults = true; // gives live display - false would wait till we stop talking then display

let p = document.createElement('p');

recognition.addEventListener('result', (e) => {
    const text = Array.from(e.results).map(result => result[0]).map(result => result.transcript).join('');

    p.innerText = text;
    texts.appendChild(p);

    if (e.results[0].isFinal){
        if(text.includes('hello')){
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'Hi';
            texts.appendChild(p);
        }
        p = document.createElement('p');

        if (text.includes('open')){
            p = document.createElement('p');
            p.classList.add('replay');
            p.innerText = 'opening';
            texts.appendChild(p);

            window.open('https://youtube.com');
        }

    }
});

recognition.addEventListener('end', () => {
    recognition.start();
})

recognition.start();