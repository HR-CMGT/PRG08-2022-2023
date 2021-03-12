import { VegaScatterplot } from "./libraries/vegascatterplot.js"

let nn
let fakeData = createFakedata()
let plot

//
// teken de scatterplot voor de fake data
//
async function drawScatterPlot() {
    plot = new VegaScatterplot()
    // await plot.initialise("horsepower", "mpg", 600, 400, fakeData)

}

//
// maak en train het neural network
//
async function createNeuralNetwork() {
    // maak neural network


    // voeg data toe aan neural network met addData
    for (let row of fakeData) {
        // nn.addData({ horsepower: row.horsepower }, { mpg: row.mpg })
    }

    // train neural network

}


//
// predictions
//
async function trainingFinished() {
    // doe een enkele voorspelling om te zien of alles werkt
    let testCar = { horsepower: 220 }



    // maak een voorspelling voor elk punt op de X as
    let predictions = []
    for (let i = 0; i < 400; i++) {
        // let prediction = ....
        // predictions.push(...)
    }


    // stuur nu de hele predictions array naar de scatterplot met "plot.addPoints"
    // ...
}


setup()