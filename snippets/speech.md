## Browser spraak

Laat de browser een reactie uitspreken!

```html
<input type="text" id="inputfield">
<button id="playbutton">Play</button>
```

```javascript
let synth = window.speechSynthesis
let inputField = document.querySelector("#inputfield")
let playButton = document.querySelector("#playbutton")

playButton.addEventListener("click", () => {
    let text = inputField.value
    speak(text)
})

function speak(text) {
    if (synth.speaking) {
        console.log('still speaking...')
        return
    }
    if (text !== '') {
        let utterThis = new SpeechSynthesisUtterance(text)
        synth.speak(utterThis)
    }
}

```
Je kan het inputField en de button ook weglaten en rechtstreeks `speak("hello there!")` aanroepen.

⚠️ In nieuwe browsers mag je geen geluid laten horen zonder dat er een gebruikers interactie is geweest. Dit kan je bijvoorbeeld oplossen door een "start" knop in je applicatie te bouwen.

<br>
<br>

## Links

- [Complete Browser speech example with voices and pitch](https://github.com/mdn/web-speech-api/tree/master/speak-easy-synthesis)
- [Human Speech recognition](https://github.com/mdn/web-speech-api)
- [Synthesizer API](https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode)
- [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)	
