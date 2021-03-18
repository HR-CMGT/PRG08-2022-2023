let nn

function loadData() {
    Papa.parse("./data/weather.csv", {
        download: true,
        header: true, 
        dynamicTyping: true,
        complete: (results) => cleanData(results.data)
    })
}

// TODO data kiezen en opschonen
function cleanData(data) {
    /*
    const cleanedData = data.map(day => ({

    }))
        .filter(day => (...)
        .filter(day => (...)

    */
    console.log(cleanedData)
    createNeuralNetwork(cleanedData)
}


// create neural network
function createNeuralNetwork(data) {
    nn = ml5.neuralNetwork({ task: 'classification', debug: true })

    for (let day of data) {
        const inputs = { MinTemp: day.MinTemp, Cloudy: day.Cloudy } // TODO moet kloppen met je cleaned data
        const output = { RainTomorrow: day.RainTomorrow } 
        nn.addData(inputs, output)
    }

    nn.normalizeData()
    nn.train({ epochs: 32 }, () => classify())
}



// make a classification
function classify() {
    console.log("done training!")
    
    const input = { Evaporation: 13, Rainfall: 13 } // TODO moet kloppen met je cleaned data
    
    nn.classify(input, (error, result) => {
        console.log(result)
        console.log(`Rain Tomorrow: ${result[0].label}`)
    })
}

loadData()