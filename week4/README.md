# Week 4

> Werken met ML5 pre-trained models: handpose, bodypose, face, object recognition

## Lesopdracht

Bouwen ML5 pose detection app

- Bedenk een concept voor het werken met gezichtsuitdrukking herkenning, lichaamspose herkenning, handpose herkenning of object detectie.
- Dit concept moet geschikt zijn voor de positionele data die je uit ML5 krijgt. Dit zijn bijvoorbeeld de posities van je polsen, de afstand tussen je voeten, vingers of ogen.
- Lees pose-data uit met javascript en geef feedback aan de gebruiker via de UI. Maak ook duidelijk wat de bedoeling van de app is via de UI, middels een duidelijke titel en instructies.

<br>
<br>
<br>

### Voorbeeld

Via FaceApi haal je data binnen over het gezicht van de gebruiker. Met `requestAnimationFrame` kijk je telkens naar de `data.leftEye()` en `data.rightEye()` data. Je kijkt wat de `x,y` posities van de ogen zijn. Als deze posities te ver uit elkaar zijn, dan zit de gebruiker te dicht met zijn snufferd over het scherm van de computer gebogen! Geef een waarschuwing via een browser notificatie. Check dit elke 5 minuten.

![posture](../images/posture.png)

Of bekijk de startcode voor [schilderen met canvas](https://glitch.com/~draw-circle), of een [canvas PONG game](https://glitch.com/edit/#!/pong-game-canvas) en kijk of je dit kan besturen met de positie van je polsen.

<br>
<br>
<br>

### Startcode

- [ML5 Body Pose detection](https://learn.ml5js.org/#/reference/posenet)
- [ML5 Hand Pose detection](https://learn.ml5js.org/#/reference/handpose)
- [ML5 Face landmark detection](https://learn.ml5js.org/#/reference/face-api)
- [ML5 Object detection](https://learn.ml5js.org/#/reference/object-detector)
- [ML5 Feature Extractor](https://learn.ml5js.org/#/reference/feature-extractor). zie ook [Week 2](https://github.com/HR-CMGT/PRG08-2021-2022/tree/main/week2)
- [FaceApiJS Code Voorbeeld](#face)
- [HandPoseJS Code Voorbeeld](#hand)

<br>
<br>
<br>

## <a name="face"></a> Face API JS

De FACE API geeft een array van "landmark points" voor de belangrijkste features van je gezicht.

![landmarks](../images/landmarks.png)

```javascript
// get face landmarks as array
const detections = await faceapi
        .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks();

// all positions in the first face
console.log(detections[0].landmarks.positions)        

// get specific features in the first face
const leftEye = detections[0].landmarks.getLeftEye()
const rightEye = detections[0].landmarks.getRightEye()
```

- [Het voorbeeldproject vind je in de face-api map](./face-api).
- [Face-API.JS website](https://justadudewhohacks.github.io/face-api.js/docs/index.html)

<br>
<br>
<br>

## <a name="hand"></a> Handpose API

De HANDPOSE API geeft een array van "landmark points" voor je vingers in 3D. Je kan via `annotations` de posities uitlezen van: `indexFinger,middleFinger,palmBase,pinky,ringFinger,thumb`

![handpose](../images/handpose.png)

```javascript
const predictions = await model.estimateHands(video)
if (predictions.length > 0) {
    // indexFinger,middleFinger,palmBase,pinky,ringFinger,thumb
    let pinky = predictions[0].annotations.pinky
    // pak de x,y,z, van het eerste botje van de pink
    let [y,x,z] = pinky[0]
    console.log(x,y,z)
}
```

- [Het voorbeeldproject vind je in de handpose map](./handpose).
- [Handpose github](https://github.com/tensorflow/tfjs-models/tree/master/handpose)

<br>
<br>
<br>

