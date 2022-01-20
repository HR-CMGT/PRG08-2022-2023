## Browser spraak

Laat de browser een reactie uitspreken!

```javascript
let synth = window.speechSynthesis

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

speak("Hello world")
```
Je kan verschillende voices gebruiken. Zie ook de [docs](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/getVoices)

```typescript
let voices = window.speechSynthesis.getVoices()
let name = "Alex"
utterThis.voice = voices.filter(function(voice) { return voice.name == name; })[0]
```
<br>
<Br>

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
