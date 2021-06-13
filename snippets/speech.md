## Browser spraak

Laat de browser een reactie uitspreken!

```javascript
let synth = window.speechSynthesis
speak("Hello world")

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
Je kan een inputField en de button toevoegen om het te testen met verschillende teksten

```html
<input type="text" id="inputfield">
<button id="playbutton">Play</button>
```

```javascript
let inputField = document.querySelector("#inputfield")
let playButton = document.querySelector("#playbutton")

playButton.addEventListener("click", () => {
    let text = inputField.value
    speak(text)
})
```

⚠️ In nieuwe browsers mag je geen geluid laten horen zonder dat er een gebruikers interactie is geweest. Dit kan je bijvoorbeeld oplossen door een "start" knop in je applicatie te bouwen.

<br>
<br>

## Links

- [Complete Browser speech example with voices and pitch](https://github.com/mdn/web-speech-api/tree/master/speak-easy-synthesis)
- [Human Speech recognition](https://github.com/mdn/web-speech-api)
- [Synthesizer API](https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode)
- [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)	
