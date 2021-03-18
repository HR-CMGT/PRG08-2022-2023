
# Inleveropdracht week 6

<img src="./inleveropdracht/images/hamster.jpg" width="400">

### Lezen:

 - [Lees de ML5 documentatie over de Image Classifier](https://learn.ml5js.org/#/reference/image-classifier)

### Inleveren:

- De uitgewerkte ImageClassifier opdracht
- Ingevuld inleverdocument
   - Wat kan de classifier wel en niet herkennen?
   - Is het gelukt om er een game UI omheen te bouwen?


<br>
<br>
<br>
<br>

# Opdracht

## ImageClassifier

Maak een ImageClassifier aan met hulp van de [documentatie]((https://learn.ml5js.org/#/reference/image-classifier)). Let hierbij op de volgorde van je functies! Je kan pas voorspellen als het model helemaal is ingeladen!

## Image voorspellen

Voorspel wat er op de afbeelding in de `<img>` tag staat. Probeer dit met meerdere afbeeldingen. Wat wordt er wel en niet herkend in het pre-trained model?

## Voorspelling uitspreken

Gebruik [Browser Speech](https://github.com/HR-CMGT/PRG08-2020-2021/blob/main/snippets/speech.md) om te zeggen wat de afbeelding is. Kan je er ook bij zeggen hoe accuraat de voorspelling is? Of wat de tweede keus is?

## Game UI

Vraag aan de gebruiker om een bepaalde afbeelding te uploaden en controleer of het hem/haar gelukt is! Gebruik [deze code snippet](https://github.com/HR-CMGT/PRG08-2020-2021/blob/main/snippets/uploadimage.md) om de gebruiker een afbeelding te laten uploaden.

Werkt het ook op mobiel als je de camera als input gebruikt?

```html
<input type="file" accept="image/*;capture=camera" id="file">
```

## Niet verplicht - wel leuk:

- Kan je de webcam gebruiken om *live* beelden te herkennen?
- Kan je `doodlenet` gebruiken om handgetekende schetsen te herkennen?


<br>
<br>

---

<br>


### Links

- [ML5 Image Classifier](https://learn.ml5js.org/#/reference/image-classifier)
- [Upload image UI](https://github.com/HR-CMGT/PRG08-2020-2021/blob/main/snippets/uploadimage.md)
- [Simple webspeech example](https://github.com/HR-CMGT/PRG08-2020-2021/blob/main/snippets/speech.md) en [Documentation](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis)
- [Webcam Image Capture](https://developer.mozilla.org/en-US/docs/Web/API/ImageCapture), [Demo](https://simpl.info/imagecapture/) en [broncode](https://github.com/samdutton/simpl/tree/gh-pages/imagecapture)
