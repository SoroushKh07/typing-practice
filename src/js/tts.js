function speak() {
    const textInput = document.getElementById('text').value; // Get text from input
    if ('speechSynthesis' in window) {
        const speech = new SpeechSynthesisUtterance(textInput); // Create speech object
        speech.lang = 'en-US'; // Set language
        speech.pitch = 1; // Voice pitch (1 = normal)
        speech.rate = 1; // Voice rate (1 = normal)
        window.speechSynthesis.speak(speech); // Speak the text
    } else {
        alert('Sorry, your browser does not support text-to-speech.');
    }
}