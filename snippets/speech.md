## Browser spraak

Laat de browser een reactie uitspreken:

```javascript
function speak(message) {
    let msg = new SpeechSynthesisUtterance()

    msg.text = message

    let selectedVoice = ""
    if (selectedVoice != "") {
        msg.voice = speechSynthesis.getVoices().filter(function (voice) { return voice.name == selectedVoice; })[0];
    }

    window.speechSynthesis.speak(msg)
}

speak("I think this photo shows a falafel stand!")
```
⚠️ In nieuwe browsers mag je geen geluid laten horen zonder dat er een gebruikers interactie is geweest. Dit kan je bijvoorbeeld oplossen door een "start" knop in je applicatie te bouwen.

## Links

- [Speak](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak)
- [Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
- [Synthesizer API](https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode)
- [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)	
