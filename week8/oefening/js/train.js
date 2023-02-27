let nn, trainData, testData

function loadData() {
    Papa.parse("./data/weather.csv", {
        download: true,
        header: true, 
        dynamicTyping: true,
        complete: (results) => cleanData(results.data)
    })
}

function cleanData(data) {
    console.table(data)

    // haal de data uit de CSV die je nodig hebt, inclusief het label waarop je wil trainen
    // met de filter functie checken we dat de traindata uit nummers bestaat
    const cleanData = data
        .map(day => ({
            MinTemp: day.MinTemp,
            MaxTemp: day.MaxTemp,
            RainTomorrow: day.RainTomorrow
        }))
        .filter(day =>
            typeof day.MinTemp === "number" &&
            typeof day.MaxTemp === "number"
        )

    cleanData.sort(() => (Math.random() - 0.5))
    trainData = cleanData.slice(0, Math.floor(data.length * 0.8))
    testData = cleanData.slice(Math.floor(data.length * 0.8) + 1)

    createNeuralNetwork(trainData)
}

function createNeuralNetwork(data) {
    nn = ml5.neuralNetwork({ task: 'classification', debug: true })

    for (let day of data) {
        const inputs = { 
            MinTemp: day.MinTemp, 
            MaxTemp: day.MaxTemp
        }
        const output = { 
            RainTomorrow: day.RainTomorrow 
        } 
        nn.addData(inputs, output)
    }

    nn.normalizeData()
    nn.train({ epochs: 32 }, () => classify())
}

// make a classification
function classify() {
    
    const input = { MinTemp: -4, MaxTemp: 13 }
    
    nn.classify(input, (error, result) => {
        console.log(result)
        console.log(`Rain Tomorrow: ${result[0].label} - Confidence ${(result[0].confidence * 100).toFixed(2)}%`)
    })
}

async function classify() {
    console.log("done training!")

    const inputs = { MinTemp: -4, MaxTemp: 13 }
    const result = await nn.classify(inputs)
    console.log(`Rain Tomorrow: ${result[0].label} - Confidence ${(result[0].confidence * 100).toFixed(2)}%`)

    getAccuracy()
}

async function getAccuracy() {
    let correctPredictions = 0

    for (let day of testData) {
        const inputs = {
            MinTemp: day.MinTemp,
            MaxTemp: day.MaxTemp
        }
        const result = await nn.classify(inputs)
        console.log(`Predicted: ${result[0].label}, Actual data: ${day.RainTomorrow}`)
        if (result[0].label === day.RainTomorrow) {
            correctPredictions++
        }
    }

    console.log(`Correcte voorspellingen ${correctPredictions} van de ${testData.length}, dit is ${((correctPredictions / testData.length) * 100).toFixed(2)} %`)
}

loadData()