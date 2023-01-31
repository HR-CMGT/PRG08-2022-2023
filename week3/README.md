# Week 3

- Introductie ML5
- Image Classifier
- Feature Extractor

<br>
<br>
<br>

## Lesoefening

- Laad de [ML5 Image classifier](https://learn.ml5js.org/#/reference/image-classifier) in een HTML pagina. 
- Classify een afbeelding uit een `<img>` tag. Toon het resultaat in de HTML pagina.
- Spreek het resultaat uit met [web speech](https://github.com/HR-CMGT/PRG08-2020-2021/blob/main/snippets/speech.md)
- Maak een variatie waarbij je met een [button](https://github.com/HR-CMGT/PRG08-2020-2021/blob/main/snippets/uploadimage.md) een nieuwe image kan uploaden en die kan classificeren.
- Maak een variatie waarbij je met de [webcam](https://github.com/HR-CMGT/PRG08-2022-2023/blob/main/snippets/camera.md) een foto kan maken en die kan laten classificeren.

<br>
<br>
<br>

## Lesoefening

- Start een webcam project met de [startcode](https://github.com/HR-CMGT/PRG08-2022-2023/tree/main/week3/startcode)
- Laad de [ML5 Feature Extractor](https://learn.ml5js.org/#/reference/feature-extractor) 
- Zorg dat de buttons onder de video een image toevoegen aan de feature extractor.
- Als je voldoende images hebt toegevoegd ga je met de `train` button het train proces starten.
- Als het model is getrained start je een `interval` die de webcam classificeert.

<br>
<br>
<br>

# Inleveropdracht 🐹

<a href="https://www.youtube.com/watch?v=tqyG6YZLI0Y" target="_blank"><img src="./startcode/images/hamsterdetective.png" width="400"></a>

- Bouw een photo hunting game voor mobile waarbij de speler op pad moet gaan om foto's van specifieke onderwerpen te maken, [zoals in dit voorbeeld](https://www.youtube.com/watch?v=tqyG6YZLI0Y).
- Train een model met de feature extractor die je gemaakt hebt in de les. 
- [Save](https://learn.ml5js.org/#/reference/feature-extractor?id=save) het model zodat je niet telkens opnieuw hoeft te trainen.
- [Laad](https://learn.ml5js.org/#/reference/feature-extractor?id=load) je eigen model in je app. Hierdoor kan je je eigen getrainde objecten herkennen.
- Gebruik [Browser Speech](https://github.com/HR-CMGT/PRG08-2020-2021/blob/main/snippets/speech.md) om opdrachten aan de speler te geven en om het resultaat van een foto scan uit te spreken.

Plaats je project live en vul de feedbackfruits evaluatie in.

<br>
<br>
<br>

### Code

- [Startproject](https://github.com/HR-CMGT/PRG08-2022-2023/tree/main/week3/startcode)
- [Browser Speech](https://github.com/HR-CMGT/PRG08-2020-2021/blob/main/snippets/speech.md)
- [Upload image button](https://github.com/HR-CMGT/PRG08-2020-2021/blob/main/snippets/uploadimage.md)
- [Code tutorial feature extractor](https://github.com/HR-CMGT/Machine-Learning-Readinglist/tree/master/extractfeatures)
- [ML5 documentatie](https://learn.ml5js.org/#/reference/feature-extractor) met [Save model](https://learn.ml5js.org/#/reference/feature-extractor?id=save) en [Load model](https://learn.ml5js.org/#/reference/feature-extractor?id=load)

<br>

> 🤯 tip: gebruik het IP adres van je localhost om je site meteen op je mobiel te testen, bv. `http://192.168.2.4/hamsterdetective`. Dit werkt als je mobiel en desktop op dezelfde wifi zitten. Je kan ook glitch.com of codesandbox.io gebruiken om je project te testen op je mobiel.