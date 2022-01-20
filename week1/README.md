# Week 1

## College

- Introductie van het vak en van de terminologie
- Toelichting cursushandleiding
- Oefening met [Teachable Machine](https://teachablemachine.withgoogle.com). 

<br>
<br>

## Praktijk

Teachable Machine toepassen

- Train een model op [Teachable Machine](https://teachablemachine.withgoogle.com) voor het herkennen van beeld of een lichaamspose. (geluid mag je ook proberen maar dit werkt niet altijd even goed.)
- Klik op **export model** en volg de instructies voor tensorflow.js. Zie screenshot.
- Test of het lokaal werkt met console berichten die de predictions tonen.
- Bedenk een eenvoudige toepassing in je HTML pagina die de gestures/camera beeld gebruikt als input. Bijvoorbeeld:
    - Toon emoji 🤘 👋 ✊ voor herkende gestures.
    - Gebruik [web speech](#speech) om bepaalde personen te groeten als ze voor de camera staan.
- 👉 Let op, de webcam output hoeft niet zichtbaar te zijn in de uiteindelijke HTML pagina!
- In de [Teachable Machine Documentatie](https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image) vind je meer code uitleg.
- ⚠️ De html embed code werkt niet helemaal goed op iOS, je moet de video tag aanpassen. [Zie deze issue](https://github.com/googlecreativelab/teachablemachine-community/issues/73).

![tmexport](../images/tm-download.png)
*export window teachable machine*




<br>
<br>
<br>

### Voorbeeldcode web speech

Je kan de web speech api gebruiken om de browser te laten spreken:

```javascript
function speak() {
    let msg = new SpeechSynthesisUtterance()

    msg.text = "Well done!"

    let selectedVoice = ""
    if (selectedVoice != "") {
        msg.voice = speechSynthesis.getVoices().filter(function (voice) { return voice.name == selectedVoice; })[0]
    }

    window.speechSynthesis.speak(msg)
}
```
