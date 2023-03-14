import React, {useCallback, useEffect, useRef, useState} from "react";
import Webcam from "react-webcam";

import * as tf from '@tensorflow/tfjs';
import * as handpose from "@tensorflow-models/handpose";

import "./App.css";

export function App() {
    // global variables
    const modelRef = useRef(null);        // handpose
    const webcamRef = useRef(null);       // webcam

    // reactive variables
    const [predictionsArray, setpredictionsArray] = useState([])    // current/last prediction

    // detect handpose (called by request annimationframe)
    const capture = useCallback(async () => {
        // only try to predict if handpose has been loaded and canvas is available
        if (webcamRef.current && modelRef.current && webcamRef.current.getCanvas()) {
            const predictions = await modelRef.current.estimateHands(
                webcamRef.current.getCanvas(),
                true
            );

            if (predictions && predictions.length > 0) {
                let currentLandmarks = predictions[0].landmarks.flat();

                setpredictionsArray(currentLandmarks)
            }
        }

        requestAnimationFrame(capture);
    }, [webcamRef]);

    // init handpose, and start first capture
    useEffect(() => {
        const load = async () => {
            modelRef.current = await handpose.load();
            console.log("Handpose loaded")

            requestAnimationFrame(capture);
        };

        load();
    }, []);

    return (
        <section>
        <h1>Handpose in React</h1>

        <Webcam
            width="400"
            height="226"
            mirrored
            id="webcam"
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
        />

        <h2>Landmarks array voor KNN ⬇️</h2>
        <p>{ predictionsArray.toString() }</p>
        </section>
    );
}