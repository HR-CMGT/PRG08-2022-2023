
# Inleveropdracht week 6

<a href="https://www.youtube.com/watch?v=tqyG6YZLI0Y)" target="_blank"><img src="./inleveropdracht/images/hamsterdetective.png" width="400"></a>

### Lezen:

 - [Lees de ML5 documentatie over de Image Classifier](https://learn.ml5js.org/#/reference/image-classifier)

### Inleveren:

- De uitgewerkte ImageClassifier opdracht
- Ingevuld inleverdocument
   - Wat kan de classifier wel en niet herkennen? Hoe komt dit?
   - Wat is het verschil tussen de pre-trained modellen?
   - Is het gelukt om er een game UI omheen te bouwen?


<br>
<br>
<br>
<br>

# Opdracht

## ImageClassifier

Maak een ImageClassifier aan met hulp van de [documentatie](https://learn.ml5js.org/#/reference/image-classifier). Let hierbij op de volgorde van je functies! Je kan pas voorspellen als het model helemaal is ingeladen!

Kies een van de beschikbare pre-trained models om in te laden: *mobilenet, darknet, doodlenet*

## Image voorspellen

Voorspel wat er op de afbeelding in de `<img>` tag staat. Probeer dit met meerdere afbeeldingen. Wat wordt er wel en niet herkend in het pre-trained model?

## Voorspelling uitspreken

Gebruik [Browser Speech](https://github.com/HR-CMGT/PRG08-2020-2021/blob/main/snippets/speech.md) om te zeggen wat de afbeelding is. Kan je er ook bij zeggen hoe accuraat de voorspelling is? Of wat de tweede keus is?

## Afbeelding uploaden

Vraag aan de gebruiker om een bepaalde afbeelding te uploaden. Gebruik daarvoor [deze code snippet](https://github.com/HR-CMGT/PRG08-2020-2021/blob/main/snippets/uploadimage.md). Test het op mobiel, zodat de speler live een foto kan maken! Geef via spraak feedback of de speler een goede foto heeft gemaakt. 

## Game UI

 Kan je hier een game omheen bouwen? Maak de UI gebruiksvriendelijk. Kan je een random vraag stellen? Kan je een score bijhouden?

- [📺  Eenvoudig voorbeeld op YouTube](https://www.youtube.com/watch?v=tqyG6YZLI0Y)

<br>

> 🤯 tip: gebruik je IP adres van je localhost om je site meteen op je mobiel te testen, bv. `http://192.168.2.4/hamsterdetective`. Dit werkt als je mobiel en desktop op dezelfde wifi zitten.

<br>
<br>
<br>

---

<br>


### Links

- [ML5 Image Classifier](https://learn.ml5js.org/#/reference/image-classifier)
- [Upload image UI](https://github.com/HR-CMGT/PRG08-2020-2021/blob/main/snippets/uploadimage.md)
- [Simple webspeech example](https://github.com/HR-CMGT/PRG08-2020-2021/blob/main/snippets/speech.md) en [Documentation](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis)
- [Hoe kan je het pre-loaded model verbeteren?](https://github.com/HR-CMGT/Machine-Learning-Readinglist/tree/master/extractfeatures) en [documentatie](https://learn.ml5js.org/#/reference/feature-extractor)
- [Foto's maken met de Webcam](https://developer.mozilla.org/en-US/docs/Web/API/ImageCapture) met [Demo](https://simpl.info/imagecapture/)
