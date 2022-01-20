# Week 3

### College
- Introductie ML5 pre-trained models: handpose, bodypose, face, object recognition
### Praktijk en inleveropdracht
- Bouwen ML5 webcam app

<br>
<br>

# Inleveropdracht Week 3

Bedenk zelf een eigen toepassing voor het werken met een van deze startprojecten:

- [ML5 Body Pose detection](https://learn.ml5js.org/#/reference/posenet)
- [ML5 Hand Pose detection](https://learn.ml5js.org/#/reference/handpose)
- [ML5 Face landmark detection](https://learn.ml5js.org/#/reference/face-api)
- [ML5 Object detection](https://learn.ml5js.org/#/reference/object-detector)
- [FaceApiJS Code Voorbeeld](#face)
- [HandPoseJS Code Voorbeeld](#hand)

<br>
<br>

## Opdracht

Bouw een UI met HTML,CSS,Javascript. Lees de pose data uit met javascript. *(bijvoorbeeld: de positie van de ogen bij de Face landmark detection.)*

Programmeer je toepassing voor deze pose data.

Het moet duidelijk naar de gebruiker zijn wat de bedoeling is, en wat het resultaat is. Gebruik dus geen console.logs maar toon feedback in de UI.

---

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

---
<br>
<br>
<br>

## <a name="hand"></a> Handpose API

De HANDPOSE API geeft een array van "landmark points" voor de vingers van je hand in 3D.

![handpose](../images/handpose.png)

```javascript
const predictions = await model.estimateHands(video)
if (predictions.length > 0) {
    const result = predictions[0].landmarks
    // x, y, z van de top van de wijsvinger:
    let y = predictions[0].landmarks[8][0]
    let x = predictions[0].landmarks[8][1]
    let z = predictions[0].landmarks[8][2]
}
```

- [Het voorbeeldproject vind je in de handpose map](./handpose).
- [Handpose github](https://github.com/tensorflow/tfjs-models/tree/master/handpose)

---

<br>
<br>
<br>



## Links

- [Handpose API](https://github.com/tensorflow/tfjs-models/tree/master/handpose) en [tutorial](https://handsondeeplearning.com/a-quick-example-using-tensorflow-js-handpose-model/)
- [Face-api](https://github.com/justadudewhohacks/face-api.js/) 

<br>