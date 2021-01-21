const log = document.querySelector("#array")
const video = document.querySelector("#video")
const startBtn = document.querySelector("button")

let initialized = false

//
// start de app - aangeroepen onderin dit document
//
function initApplication() {
    Notification.requestPermission()
    new Notification("Starting the app")

    startWebcam()
    video.addEventListener("play", () => generateLandmarks())
}

//
// function to read the webcam
//
function startWebcam() {
    if (!initialized) {
        navigator.getUserMedia(
            { video: {} },
            stream => {
                initialized = true;
                video.srcObject = stream
            },
            err => console.error(err)
        )
    }
}

//
// start face api
//
function generateLandmarks() {
    const canvas = faceapi.createCanvasFromMedia(video)
    const videoElement = document.querySelector(".video-wrapper")
    videoElement.append(canvas)
    const displaySize = { width: video.width, height: video.height }
    faceapi.matchDimensions(canvas, displaySize)

    setInterval(async () => {
        const detections = await faceapi
            .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
            .withFaceLandmarks()

        if (detections[0]?.landmarks) {
            // toon de hele array in een log. gebruik deze data voor KNN
            logData(detections)
        } else {
            console.log("No face found")
        }

        // toon de face detection op de webcam
        const resizedDetections = faceapi.resizeResults(detections, displaySize)
        canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height)
        faceapi.draw.drawDetections(canvas, resizedDetections)
        faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
    }, 1000 * 4)
}

//
// toon de eerste 20 waarden in een log
//
function logData(detections) {
    let str = ""
    for (let i = 0; i < 20; i++) {
        str += detections[0].landmarks.positions[i]._x + ", " + detections[0].landmarks.positions[i]._y + ", "
    }
    log.innerText = str
    
    // example : finding the eye position manually
    //let leftEyeY = detections[0].landmarks.positions[43]._y;
    //let leftEyeX = detections[0].landmarks.positions[43]._x;

    // example : use functions to get the eyes
    //const leftEye = detections[0].landmarks.getLeftEye()
    //const rightEye = detections[0].landmarks.getRightEye()
}


//
// START - load the FACE API models - after loading init the app
//
Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri("./models"),
    faceapi.nets.faceLandmark68Net.loadFromUri("./models")
]).then(initApplication)