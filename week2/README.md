# Week 2

## College

- Introductie ML5
- Image Classifier
- Feature Extractor

<br>
<br>

## Praktijk

Bouw een photo hunting app voor mobile met de image classifier en de mobile camera.

<a href="https://www.youtube.com/watch?v=tqyG6YZLI0Y)" target="_blank"><img src="./startcode/images/hamsterdetective.png" width="400"></a>


<br>
<br>

# Opdracht

## ImageClassifier

Maak een ImageClassifier aan met hulp van de [documentatie](https://learn.ml5js.org/#/reference/image-classifier). Let hierbij op de volgorde van je functies! Je kan pas voorspellen als het model helemaal is ingeladen!

## Image voorspellen

Voorspel wat er op de afbeelding in de `<img>` tag staat. Probeer dit met meerdere afbeeldingen. Wat wordt er wel en niet herkend in het pre-trained model?

## Voorspelling uitspreken

Gebruik [Browser Speech](https://github.com/HR-CMGT/PRG08-2020-2021/blob/main/snippets/speech.md) om te zeggen wat de afbeelding is. Kan je er ook bij zeggen hoe accuraat de voorspelling is? Of wat de tweede keus is?

## Mobiele camera gebruiken 

Vraag aan de gebruiker om een bepaalde afbeelding te uploaden. Gebruik daarvoor [deze code snippet](https://github.com/HR-CMGT/PRG08-2020-2021/blob/main/snippets/uploadimage.md). Test het op mobiel, zodat de speler live een foto kan maken met zijn of haar mobiele camera! Geef via spraak feedback of de speler een goede foto heeft gemaakt. 

## Game

Geef steeds verschillende foto opdrachten, hou een score bij, of bedenk zelf iets om hier een game omheen te bouwen.

- [📺  Eenvoudig voorbeeld op YouTube](https://www.youtube.com/watch?v=tqyG6YZLI0Y)

## Feature extractor

Als je je eigen unieke images wil kunnen herkennen, dan kan je de ML5 feature extractor gebruiken in plaats van de imageClassifier. Hiermee "re-train" je het model van de imageClassifier, bijvoorbeeld met afbeeldingen van je eigen gezicht of je huisdier. 

Train het model met minimaal 10 tot 20 eigen afbeeldingen per klasse die je wil herkennen. **Save** het model zodat je niet telkens opnieuw hoeft te trainen. **Laad** het model in een nieuwe webpagina. 

- [🔥 In dit code voorbeeld wordt de webcam gebruikt om te trainen](https://github.com/HR-CMGT/Machine-Learning-Readinglist/tree/master/extractfeatures))
- [Documentatie](https://learn.ml5js.org/#/reference/feature-extractor) 




<br>

> 🤯 tip: gebruik je IP adres van je localhost om je site meteen op je mobiel te testen, bv. `http://192.168.2.4/hamsterdetective`. Dit werkt als je mobiel en desktop op dezelfde wifi zitten.

<br>
<br>
<br>

---

<br>


### Image Classifier Game Links

- [ML5 Image Classifier](https://learn.ml5js.org/#/reference/image-classifier)
- [Upload image button, werkt met webcam](https://github.com/HR-CMGT/PRG08-2020-2021/blob/main/snippets/uploadimage.md)
- [Simple webspeech voorbeeld](https://github.com/HR-CMGT/PRG08-2020-2021/blob/main/snippets/speech.md) en [documentatie](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis)
- [MDN documentatie webcam image capture](https://developer.mozilla.org/en-US/docs/Web/API/ImageCapture) met [Demo](https://simpl.info/imagecapture/)

### Feature Extractor Links

- [ML5 Feature Extractor documentatie](https://learn.ml5js.org/#/reference/feature-extractor)
- [🔥 Code voorbeeld : herken of iemand een mondmasker draagt](https://github.com/HR-CMGT/Machine-Learning-Readinglist/tree/master/extractfeatures)
- [ML5 Plain Javascript example](https://github.com/ml5js/ml5-library/tree/main/examples/javascript/FeatureExtractor/FeatureExtractor_Image_Classification)
- [🔥🔥 Youtube with Daniel Shiffman tutorial](https://www.youtube.com/watch?v=eeO-rWYFuG0)
