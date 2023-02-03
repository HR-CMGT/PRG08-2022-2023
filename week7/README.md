# Week 7

## Neural Networks - Regression

![nn](../images/carnn.png)

Een neural network is in staat om complexe patronen in data te vinden. Je kan een neural network gebruiken voor:

- **Classification** : het algoritme voorspelt een **categorie**, bv:
    - "kat", "hond" of "capibara"
    - "giftig" of "niet giftig"
    - "spam" of "geen spam"
    - "fraude" of "geen fraude"
- **Regression** : het algoritme voorspelt een **numerieke waarde**, bv: 
    - benzineverbruik van een auto
    - prijs van een huis
    - waarde van een tweedehands telefoon
    - percentage studenten die naar de les komen 😬

### Classification of regression?

Het is niet altijd meteen duidelijk of een probleem een **classification** of **regression** probleem is. Denk aan een **rating** voor een restaurant van 1 tot 10. Is dit classification of regression? In deze les werken we met **regression**. Ook gaan we kijken hoe we data kunnen tekenen in een grafiek. We gaan de voorspelling ook tekenen!

<br>
<br>
<br>

# Opdracht

## Lesoefening met demo data
- Teken een scatterplot voor horsepower versus mpg met de demo data.
- Train een ML5 neural network met de horsepower en mpg demo data. Roep predict aan om te zien of alles werkt.

## Lesoefening CSV data
- Laad nu de `cars.csv` data en teken de scatterplot voor horsepower versus mpg.
- Train een ML5 neural network met de horsepower en mpg csv data. Maak een prediction.
- Maak een `for` loop die voor elke horsepower een mpg prediction doet. Let op `async await`.
- Teken deze voorspellingen in de scatterplot
- Train het neural network met meerdere kolommen uit de CSV file. Maak een prediction.

## [Inleveropdracht](./inleveropdracht.md)

<br>
<br>
<br>

# Startcode

Je kan `index.html`, `app.js` en `scatterplot.js` uit deze repository gebruiken als basis voor alle oefeningen in deze pagina. Om te oefenen met **data** kan je deze array van objecten gebruiken. 

```javascript
const data = [
    { horsepower: 130, mpg: 18 },
    { horsepower: 165, mpg: 15 },
    { horsepower: 225, mpg: 14 },
    { horsepower: 97, mpg: 18 },
    { horsepower: 88, mpg: 27 },
    { horsepower: 193, mpg: 9 },
    { horsepower: 80, mpg: 25 },
]
```

<br>
<br>
<br>

## Data controleren

- Trainingdata voor regression bestaat altijd uit getallen. Controleer dat alle waardes getallen zijn. Verwijder rijen met ongeldige waarden.
- Let op dat je voldoende data hebt. Hoe meer rijen én kolommen, hoe beter het algoritme zal werken. Denk aan minimaal een paar honderd rijen in een CSV bestand.
- Als je de data shuffled kan je voorkomen dat er een patroon herkend wordt in de volgorde van je data. 

<br>
<br>
<br>



# Scatterplot

Een scatterplot kan je gebruiken om te zien hoe data in elkaar zit. Zie je een verband tussen `horsepower` en `miles per gallon` ?

![scatterfake](../images/scatterplotcars.png)

Een `chartJS` scatterplot verwacht een array met x,y coordinaten, bijvoorbeeld: `[{x: 20, y: 30}, {x:40, y:50}]`. We gebruiken `map()` om onze demo data om te zetten naar `chartJS` data.

```javascript
// scatterplot
import { createChart } from "./scatterplot.js"

const chartdata = data.map(car => ({
    x: car.horsepower,
    y: car.mpg,
}))

// chartjs aanmaken
createChart(chartdata)
```


<br>
<br>
<br>

## Aanmaken Neural Network

We maken een [ML5](https://learn.ml5js.org/#/reference/neural-network) neural network aan voor regression.

```javascript
const nn = ml5.neuralNetwork({ task: 'regression', debug: true })
```
<br>
<br>
<br>

## Data toevoegen aan Neural Network

Met de functie `addData()` kan je data toevoegen. In dit voorbeeld gebruiken we de `horsepower` van een auto om te voorspellen wat de `mpg` gaat zijn. 

```javascript
// shuffle
data.sort(() => (Math.random() - 0.5))

// een voor een de data toevoegen aan het neural network
for (let car of data) {
    nn.addData({ horsepower: car.horsepower }, { mpg: car.mpg })
}

// normalize
nn.normalizeData()
```
<br>
<br>
<br>

## Trainen

Bij het trainen moet je aangeven hoeveel `epochs` dit moet duren. Hier kan je zelf mee experimenteren.

```javascript
nn.train({ epochs: 10 }, () => finishedTraining()) 

function finishedTraining(){
    console.log("Finished training!")
}
```
<br>
<br>
<br>

## Prediction

Met de `predict` functie kunnen we nieuwe data voorspellen! Maak een nieuwe `car` met een `horsepower` van `90`, waarvan we niet de `mpg` weten:

```javascript
async function finishedTraining() {
    const testCar = { horsepower: 90 }

    const results = await nn.predict(testCar)
    console.log(results)

    const prediction = results[0].value
    console.log(`Geschat verbruik: ${prediction}`)
}
```

<br>
<br>
<br>


## Prediction tekenen als lijn

![scatterfinished](../images/scatterfinished2.png)

We kunnen voor elke mogelijke `horsepower` (waarden van 40 tot 250) een prediction doen met een `for` loop.

Maak een lege `myPredictions` array. Doe een prediction voor elke HP waarde uit je for loop, en voeg deze toe aan de predictions array. 

```javascript
async function finishedTraining() {
    for(let hp = 40; hp<250; hp+=2) {
        // prediction here
    }
}
```
Nadat alle predictions gedaan zijn kan je de `updateChart` functie aanroepen om de predictions te tekenen als lijn.

```javascript
import { updateChart } from "./scatterplot.js"

updateChart("Predictions", myPredictions) 
```


<br>
<br>
<br>

# Inleveropdracht

Bij de praktijkopdracht van week 7 ga je een neural network trainen met een CSV dataset uit deze repository. Ook ga je het model opslaan, zodat je niet telkens opnieuw hoeft te trainen.

[Ga naar de inleveropdracht](./inleveropdracht.md)

<br>
<br>
<br>

### ⚠️ Async await

> Let op het gebruik van `async await`. Zodra je ergens `await` nodig hebt, moet je zorgen dat dit binnen een `async` functie staat!

```javascript
async function doSomething() {
    let result = await doComplicatedThing()
    console.log("ready!")
}
```

<br>
<br>
<br>
<br>


## Documentatie

- [🔥 ML5 Neural Networks in Javascript](https://learn.ml5js.org/#/reference/neural-network)
- [ChartJS Scatterplot code voorbeeld](https://github.com/HR-CMGT/PRG08-2021-2022/blob/main/snippets/scatterplot.md)
- [ChartJS Scatterplot documentatie](https://www.chartjs.org/docs/latest/charts/scatter.html)

## Externe links

- [📺 Crash Course Neural Networks](https://www.youtube.com/watch?v=JBlm4wnjNMY)
- [📺  But what is a neural network?](https://www.youtube.com/watch?v=aircAruvnKk)
