import { generate3dPlot } from "./libraries/scatterplot.js"

// car data laden uit csv
function loadData() {
    Papa.parse("./data/cars.csv", {
        download: true,
        header: true,
        dynamicTyping: true,
        complete: results => {
            let carData = results.data.filter(car => (car.mpg != null && car.horsepower != null && !isNaN(car.mpg) && !isNaN(car.horsepower)))
            csvLoaded(carData)
        }
    })
}

// training data als json inladen, voor deze demo. 
// dit moeten eigenlijk je predictions uit het neural network zijn.
async function csvLoaded(carData) {
    let response = await fetch("./data/trained.json")
    let carPredictions = await response.json()

    generate3dPlot(carData, carPredictions)
}

loadData()