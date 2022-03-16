import { createChart, updateChart } from "./scatterplot.js"

let nn

//
// cars data
//
function createData() {
    let data = [
        { horsepower: 130, mpg: 18 },
        { horsepower: 165, mpg: 15 },
        { horsepower: 225, mpg: 14 },
        { horsepower: 97, mpg: 18 },
        { horsepower: 88, mpg: 27 },
        { horsepower: 193, mpg: 9 },
        { horsepower: 80, mpg: 25 },
    ]
}

//
// teken een scatterplot
//
function drawScatterplot(data) {

}


//
// maak en train het neural network
//
async function createNeuralNetwork() {
    // maak neural network

    // voeg data toe aan neural network met addData

    // train neural network

}


//
// predictions
//
async function trainingFinished() {
    // doe een voorspelling voor horsepower 220 om te zien of het werkt
    let testCar = { horsepower: 220 }

    // maak een voorspelling voor elke horsepower, sla op in array
    
    // toon de hele predictions array in de scatterplot 
}

// start de applicatie
createData()