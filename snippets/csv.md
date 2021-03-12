# Data laden

- CSV files
- JSON files
- Data filteren
- Training data en test data

<br>
<br>
<br>

## CSV files

Voeg de Papa Parse library toe aan je HTML

```HTML
<script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.0/papaparse.min.js"></script>
```
of als je met modules werkt:
```bash
npm install papaparse
import Papa from './PapaParse/papaparse';
```

## Javascript

Download eerst een CSV file, bijvoorbeeld de [overlevenden van de Titanic](https://www.kaggle.com/c/titanic/data?select=train.csv). 

```javascript
function loadData(){
    Papa.parse("./data/titanic_survivors.csv", {
        download:true,
        header:true, 
        dynamicTyping:true,
        complete: results => checkData(results.data)
    })
}

function checkData(data) {
    console.log(data)
}
```
[Papa Parse Documentatie](https://www.papaparse.com)

<br>
<br>
<br>

## JSON files

Data in JSON formaat kan je ophalen met `fetch`. Hier gebruiken we `carsData.json` van google. 

```javascript
async function getData() {
    const response = await fetch('https://storage.googleapis.com/tfjs-tutorials/carsData.json')
    const json = await response.json()
    checkData(json)
}

function checkData(data) {
    console.log(data)
}
```

<br>
<br>
<br>

## Data filteren

Met `map` en `filter` kunnen we specifieke kolommen uit de dataset halen, en checken of er geen ongeldige waarden in staan. In dit voorbeeld gebruiken we `Miles_per_Gallon` en `Horsepower` uit de dataset, en we kijken of de waarden niet ongeldig zijn.

```javascript
function checkData(data) {
    const cleaned = data.map(car => ({
        mpg: car.Miles_per_Gallon,
        horsepower: car.Horsepower,
    }))
        .filter(car => (car.mpg != null && car.horsepower != null))

    console.log(cleaned)
}
```
Je kan [`isNan()`](https://flaviocopes.com/how-to-check-value-is-number-javascript/) gebruiken als je zeker wil weten dat een waarde een nummer is.

<br>
<br>
<br>

## Training en test data

Met `slice` kunnen we data opsplitsen in trainingdata en testdata. In dit geval is 80% van de data trainingdata en 20% is testdata.

```javascript
let trainData = data.slice(0, Math.floor(data.length * 0.8))
let testData = data.slice(Math.floor(data.length * 0.8) + 1)
```

> Let op, als je CSV file toevallig is gesorteerd op label, dan heeft je traindata alle positieve labels, en je testdata alle negatieve labels. Dat is natuurlijk niet handig. Om dit te voorkomen kan je je array shufflen **voordat** je splitst op traindata en testdata.

```javascript
function shuffleArray(arr) {
    arr.sort(() => (Math.random() - 0.5))
}
```
