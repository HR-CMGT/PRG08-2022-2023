import { createChart } from "scatterplot.js"

function loadData() {
    Papa.parse("cars.csv", {
        download: true,
        header: true,
        dynamicTyping: true,
        complete: results => cleanData(results.data)
    })
}

function cleanData(data) {
    const columns = data.map(car => ({
        x: car.mpg,
        y: car.horsepower,
    }))
    createChart(columns)
}

loadData()