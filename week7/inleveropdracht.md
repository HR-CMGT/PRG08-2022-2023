
# Inleveropdracht week 7

- Kies een CSV file die geschikt is voor regression (voorspellen van een waarde).
- Gebruik de scatterplot om te kijken of je kolommen geschikt zijn om te trainen.
- Train het neural network. Bepaal hoeveel epochs je nodig hebt. 
- Sla het model op.
- Laad het model in een nieuwe html pagina, waarin je via een UI een voorspelling kan doen.

<br>
<br>
<br>

## CSV data

Gebruik een [dataset uit deze repository](./oefening/data/) of van [kaggle.com](https://www.kaggle.com/search?q=tag%3A%22regression%22+in%3Adatasets) die geschikt is voor *regression* (voorspellen van een getal). Bekijk de CSV goed om te weten welke kolom de waarde heeft die je wil gaan voorspellen.

- Mobile Phone prijzen
- Utrechtse huizenprijzen
- Wijn kwaliteit
- Studenten prestaties Hogeschool Rotterdam (anoniem)

<br>

Laad de data met [papa parse](https://www.papaparse.com/)

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

Op de X as zet je de feature waar je op wil trainen. Op de Y as zet je de waarde die je wil kunnen voorspellen. Kijk welke kolommen in de CSV file relevant zijn voor hetgene dat je wil leren. 

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

Zie de code uit de [les](./README.md) voor het trainen van een Neural Network.

Een scatterplot toont een X en een Y as, maar je kan het Neural Network wel trainen op meer features! Bijvoorbeeld, de `cars.csv` bevat ***mpg, cylinders, displacement, horsepower, weight, acceleration,model year, origin, car name***

In het eerste object van `addData()` geef je alle features mee waarvan je wil leren. Het tweede object bevat de data die je wil kunnen voorspellen.

```javascript
nn.addData({ feature1: data.feature1, feature2:data.feature2, ... }, { label: data.label })
```
> ⚠️ Bij een prediction moet je dezelfde features doorgeven als bij het trainen om een voorspelling te krijgen!

<br>
<Br>
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

Maak nu een nieuwe webpagina waarin je dit getrainde model gaat inladen. Lees hiervoor de [documentatie: ML5 load()](https://learn.ml5js.org/#/reference/neural-network?id=load). Maak een *gebruiksvriendelijke UI* waarin je bv. de *horsepower* van je auto kan invoeren, en dan de *miles per gallon* te zien krijgt.

![car](../images/carpredict.png)

> ⚠️ Als je neural network is getrained op meer dan één feature, dan kan je ook meer invoervelden in de UI plaatsen.

<br>
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
