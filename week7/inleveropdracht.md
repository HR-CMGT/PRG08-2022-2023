
# Inleveropdracht week 7

Zorg dat je de [lesopdracht](./README.md) hebt afgerond. Hierin train je een neural network met de "cars" dataset, en je leert een scatterplot te tekenen.

- Kies een CSV file uit de data map. Je mag ook zelf een CSV file zoeken die geschikt is voor regression (voorspellen van een waarde).
- Train het neural network met meerdere kolommen. Bepaal hoeveel epochs en welke kolommen je nodig hebt. 
- Sla het model op.
- Laad het model in een nieuwe html pagina, waarin je via een UI een voorspelling kan doen.
- Plaats je eindresultaat live online, bv. op github pages. Plaats je broncode op github. Vervolgens vul je in feedbackfruits de evaluatie in.

<br>
<br>
<br>

# CSV data

Laad een van de [datasets]() met [Papa Parse](https://github.com/HR-CMGT/PRG08-2022-2023/blob/main/snippets/csv.md).

- Mobile Phone prijzen bepalen aan de hand van de specs van een telefoon
- Utrechtse huizenprijs bepalen aan de hand van ligging en eigenschappen van een huis
- Wijn kwaliteit bepalen aan de hand van de chemische samenstelling van de wijn
- Regression dataset van [kaggle.com](https://www.kaggle.com/search?q=tag%3A%22regression%22+in%3Adatasets) 

## Data voorbereiden

Bekijk de geladen CSV data via `console.table(data)` om te zien of het inladen goed is gegaan.

Verwijder rijen met ongeldige waarden zoals "null", "", "undefined", etc. 

Het is handig als je *kolomnamen* geen spaties of vreemde tekens bevatten. Vervang bijvoorbeeld "RAM (GB)" door "ramGb".

Controleer welke kolommen getallen bevatten. Deze kan je gebruiken om te trainen. Je kan twee kolommen in een scatterplot tekenen voor een visualisatie.

Niet alle kolommen zijn belangrijk, bijvoorbeeld een "ID" zegt niets over de waarde van een telefoon.

Een kolom met tekst kan wel belangrijk zijn, bv. het merk van een telefoon. Je kan teksten via `find + replace` vervangen door nummers, bijvoorbeeld:

```html
APPLE = 1
SAMSUNG = 2
XIAOMI = 3
etc.
```


Je kan je CSV data het beste editen in Excel, Google Sheets of Numbers. Kies vervolgens voor `exporteren als CSV` om het bestand op te slaan.

<br>
<br>
<br>

# Trainen met meerdere kolommen

Je voorspelling wordt veel nauwkeuriger als je met meerdere kolommen traint. 

> *Je kan een scatterplot gebruiken om te zien welke kolommen nuttige informatie bevatten!*

Voordat we gaan trainen is het handig om je data op te splitsen in train en testdata.

```javascript
function checkData(data){
    // data voorbereiden
    data.sort(() => (Math.random() - 0.5))
    let trainData = data.slice(0, Math.floor(data.length * 0.8))
    let testData = data.slice(Math.floor(data.length * 0.8) + 1)

    // neural network aanmaken
    nn = ml5.neuralNetwork({ task: 'regression', debug: true })

    // data toevoegen aan neural network
    for(let car of trainData){
        nn.addData({ horsepower: car.horsepower, weight: car.weight, cylinders:car.cylinders }, { mpg: car.mpg })
    }
}
```

### Voorspelling doen met de testdata

De voorspelling kan je doen met testdata, of met data die de gebruiker heeft ingevoerd. In dit geval doen we een voorspeling met `horsepower`, `weight` en `cylinders`.

```javascript
async function makePrediction() {
    const testCar = { horsepower: testData[0].horsepower, weight: testData[0].weight, cylinders:testData[0].cylinders }
    const pred = await nn.predict(testCar)
    console.log(pred[0].mpg)
}
```

> *Als je voorspellingen met meerdere kolommen ook aan je scatterplot wil toevoegen, dan kan je dezelfde `x` en `y` kolommen gebruiken die je voor de CSV data hebt gebruikt, bijvoorbeeld `x = horsepower` en `y = mpg`*

<br>
<br>
<br>

## Model opslaan

Het is niet handig dat je steeds moet trainen voordat je een voorspelling kan doen. Daarom gaan we het getrainde model opslaan. Voeg een knop toe aan je "training" webpagina waarmee je je getrainde model kan opslaan. Lees daarvoor de [documentatie: ML5 save()](https://learn.ml5js.org/#/reference/neural-network?id=save).

⚠️ Als je na het trainen op de knop klikt worden er drie bestanden gedownload:
```bash
model_meta.json
model.json
model.weights.bin
```
<br>
<br>
<br>

## Model inladen

Maak nu een nieuwe webpagina waarin je dit getrainde model gaat inladen. Lees hiervoor de [documentatie: ML5 load()](https://learn.ml5js.org/#/reference/neural-network?id=load). Maak een *gebruiksvriendelijke UI* waarin de gebruiker gevens kan invoeren en een voorspelling kan doen. 


<br>
<br>
<br>

# Links

## Datasets voor regression

- [Beijing Pollution, Salary Prediction](https://www.kaggle.com/ahmettezcantekin/beginner-dataset-v2)
- [Boston House Prices](https://www.kaggle.com/vikrishnan/boston-house-prices)
- [Cars miles per gallon](https://www.kaggle.com/uciml/autompg-dataset)
- [Kaggle regression dataset search](https://www.kaggle.com/search?q=tag%3A%22regression%22+in%3Adatasets)
  

## Documentatie

- [Opschonen van CSV data met filter en map](https://github.com/HR-CMGT/PRG08-2020-2021/blob/main/snippets/csv.md).
- [ML5 Neural Networks](https://learn.ml5js.org/#/reference/neural-network)
- [Hidden Layers toevoegen](https://github.com/HR-CMGT/PRG08-2021-2022/blob/main/snippets/layers.md)
- [ChartJS Scatterplot code voorbeeld](https://github.com/HR-CMGT/PRG08-2021-2022/blob/main/snippets/scatterplot.md)
- [ChartJS Scatterplot documentatie](https://www.chartjs.org/docs/latest/charts/scatter.html)

## Externe links

- [📺 Crash Course Neural Networks](https://www.youtube.com/watch?v=JBlm4wnjNMY)
- [📺  But what is a neural network?](https://www.youtube.com/watch?v=aircAruvnKk)
- [Neural Network Playground](https://playground.tensorflow.org/)
- [Towards Data Science : Neural Networks for beginners](https://towardsdatascience.com/a-beginners-guide-to-neural-networks-d5cf7e369a13)
