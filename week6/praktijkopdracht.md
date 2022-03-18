
# Praktijkopdracht week 6

Maak eerst de [basisoefening](./README.md) af, voordat je hiermee begint!

## Stappen

  - CSV cars data inladen
  - CSV `horsepower` en `mpg` tonen in scatterplot
  - Neural Network trainen
  - Model opslaan en inladen in een andere HTML pagina.
  - Train en testdata gebruiken


<br>
<br>
<br>

## CSV data

Gebruik een dataset die geschikt is voor *regression* (voorspellen van een getal). Gebruik [Papa Parse](https://www.papaparse.com) om CSV files te laden. In deze repository staan drie oefenbestanden:

- ***cars.csv*** - voorspel brandstofverbruik met de eigenschappen van bestaande auto's.
- ***houseprices.csv*** - voorspel huizenprijzen met de eigenschappen van bestaande huizen.
- ***winequality.csv*** - voorspel wijnkwaliteit naar aanleiding van eigenschappen van de wijn.

```javascript
function loadData() {
    Papa.parse("./data/cars.csv", {
        download: true,
        header: true, 
        dynamicTyping: true,
        complete: results => console.log(results.data)
    })
}
```

<br>
<br>
<br>

## Scatterplot tekenen 

De voorbeeldcode gebruikt ***cars.csv***.

Op de X as zet je de "horsepower" van de auto. Op de Y as zet je de "mpg" van de auto. 

```javascript
import { createChart } from "./scatterplot.js"

const chartdata = data.map(car => ({
    x: car.horsepower,
    y: car.mpg,
}))

createChart(chartdata)
```



<br>
<br>
<br>

## Training

Zie het [vorige voorbeeld](./README.md) voor het trainen van een Neural Network.

Een scatterplot toont een X en een Y as, maar je kan het Neural Network wel trainen op meer features! Bijvoorbeeld, de `cars.csv` bevat:

***mpg, cylinders, displacement, horsepower, weight, acceleration,model year, origin, car name***

In dit voorbeeld geven we `horsepower` en `weight` mee, om de `mpg` te leren:

```javascript
for (let car of data) {
    nn.addData({ horsepower: car.horsepower, weight:car.weight }, { mpg: car.mpg })
}
```
⚠️ Bij de prediction moet je wel dezelfde features doorgeven om een voorspelling te krijgen:
```javascript
const results = await nn.predict({horsepower:90, weight:220})
```


<br>
<Br>
<br>

## Model opslaan

Het is niet handig dat je steeds moet trainen voordat je een voorspelling kan doen. Daarom gaan we het getrainde model opslaan.

Voeg een knop toe aan je "training" webpagina waarmee je je getrainde model kan opslaan. Lees daarvoor de [documentatie: ML5 save()](https://learn.ml5js.org/#/reference/neural-network?id=save).

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

Maak nu een nieuwe webpagina waarin je dit getrainde model gaat inladen. Lees hiervoor de [documentatie: ML5 load()](https://learn.ml5js.org/#/reference/neural-network?id=load)

Maak een gebruiksvriendelijke UI waarin je bv. de *horsepower* van je auto kan invoeren, en dan de *miles per gallon* te zien krijgt.

![car](../images/carpredict.png)

> ⚠️ Als je neural network is getrained op meer dan één feature, dan kan je ook meer invoervelden in de UI plaatsen.

<br>
<br>
<br>
<br>

## Traindata en testdata

Net zoals bij de decision tree kan je de CSV data [opsplitsen](https://github.com/HR-CMGT/PRG08-2020-2021/blob/main/snippets/csv.md). De testdata kan je dan gebruiken om te zien of jouw neural network goede voorspellingen maakt. Dit doe je door jouw voorspelling te vergelijken met de echte `mpg` waarde van de test data.

```javascript
let trainData = data.slice(0, Math.floor(data.length * 0.8))
let testData = data.slice(Math.floor(data.length * 0.8) + 1)
```

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
- [🔥 ML5 Neural Networks](https://learn.ml5js.org/#/reference/neural-network)
- [Hidden Layers toevoegen](https://github.com/HR-CMGT/PRG08-2021-2022/blob/main/snippets/layers.md)
- [ChartJS Scatterplot code voorbeeld](https://github.com/HR-CMGT/PRG08-2021-2022/blob/main/snippets/scatterplot.md)
- [ChartJS Scatterplot documentatie](https://www.chartjs.org/docs/latest/charts/scatter.html)

## Externe links

- [📺 Crash Course Neural Networks](https://www.youtube.com/watch?v=JBlm4wnjNMY)
- [📺  But what is a neural network?](https://www.youtube.com/watch?v=aircAruvnKk)
- [Neural Network Playground](https://playground.tensorflow.org/)
- [Towards Data Science : Neural Networks for beginners](https://towardsdatascience.com/a-beginners-guide-to-neural-networks-d5cf7e369a13)
