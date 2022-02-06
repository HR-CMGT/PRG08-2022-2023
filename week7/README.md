# Week 7

## Algoritmes: Neural Networks

In deze oefening kijken we naar `classification` met een ML5 Neural Network. We kijken vooral naar het inladen en opschonen van de data.

<br>
<br>
<br>

## CleanData functie

Na het inladen van de CSV roep je de cleanData functie aan. Een Neural Network heeft altijd **numbers** nodig als input, en **strings** als het output label!


```javascript
function loadData() {
    Papa.parse("./data/weather.csv", {
        download: true,
        header: true, 
        dynamicTyping: true,
        complete: results => cleanData(results.data)
    })
}
```
Bekijk `weather.csv` of `iris.csv` en kies een aantal features die je wil gebruiken voor classification. Bij de weather prediction kies je bv. `MinTemp` en `MaxTemp`. Check het label is waarop je wil trainen (`RainTomorrow`) en of dat een *string* is.

Gebruik `map` om deze features uit de CSV te halen. Gebruik `filter` om zeker te weten dat dit `numbers` zijn en niet `null`.

Je kan de data ook nog shufflen! [Zie deze code snippet voor het prepareren van je data](https://github.com/HR-CMGT/PRG08-2020-2021/blob/main/snippets/csv.md).

<br>



## Neural Network

De cleanData functie stuurt de opgeschoonde data naar de train functie! Let op dat je hier traint op de features die je hebt gekozen in de cleanData functie.

```javascript
function trainNeuralNetwork(data) {
    const nn = ml5.neuralNetwork({ task: 'classification', debug: true })

    for (let day of data) {
        const inputs = { Cloudy: day.Cloudy, Rain: day.Rain }
        const output = { RainTomorrow: day.RainTomorrow } 
        nn.addData(inputs, output)
    }

    nn.normalizeData()
    nn.train({ epochs: 32 }, () => finishedTraining())
}
```

## Prediction

Als het trainen klaar is roep je de `finishedTraining` functie aan. Hierin kan je een voorspelling doen voor het weer van morgen met zelfbedachte fake data.

Toon het resultaat in de console om te kijken wat voor informatie het Neural Network terug geeft.

```javascript
function finishedTraining() {
    const fakeDay = { Pressure: 7, PreviousRain: 10 }
    
    nn.classify(fakeDay, (error, result) => {
        console.log(result)
        console.log(`Rain Tomorrow: ${result[0].label}`)
    })
}
```

## Model opslaan

Gebruik `nn.save()` om je getrainde weermodel op te slaan. Als je het inlaadt met `nn.load()` in een aparte webpagina, dan hoef je daar het model dus niet meer te trainen!


<br>
<br>
<br>

## Inleveropdrahct

[In week 7 werk je aan deel A van de eindopdracht](eindopdrachtA.md).



## Datasets voor classification

- [Weather prediction](https://www.kaggle.com/zaraavagyan/weathercsv)
- [Iris Flower prediction](https://www.kaggle.com/arshid/iris-flower-dataset)

## Documentation

- [ML5 Neural Networks in Javascript](https://learn.ml5js.org/#/reference/neural-network)
