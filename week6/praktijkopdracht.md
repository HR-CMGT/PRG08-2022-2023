
# Praktijkopdracht week 6

Maak eerst de [basisoefening](./README.md) af, voordat je hiermee begint!

## Stappen

  - CSV data inladen
  - Verbanden in data tonen in scatterplot
  - Neural Network trainen
  - Model opslaan en inladen in een aparte HTML pagina.
  - Kijken naar classification met Neural Network


<br>
<br>
<br>

## CSV data

Gebruik een dataset die geschikt is voor *regression* (voorspellen van een getal). Gebruik [Papa Parse](https://www.papaparse.com) om CSV files te laden. In deze repository staan drie oefenbestanden, je kan meer voorbeelden vinden onder "links" en door op kaggle te zoeken naar "regression datasets".

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

Deze voorbeeldcode gebruikt ***cars.csv***.

Op de X as zet je de "horsepower" van de auto. Op de Y as zet je de "mpg" van de auto. 

```javascript
import { createChart } from "./scatterplot.js"

const chartdata = data.map(car => ({
    x: car.horsepower,
    y: car.mpg,
}))

createChart(chartdata)
```
### Opdracht

Kijk of er nog meer kolommen in de CSV file relevant zijn voor hetgene dat je wil leren, door daar ook een scatterplot voor te tekenen. (bv. gewicht versus mpg van de auto).

<br>
<br>
<br>

## Training

Zie de code uit het [vorige voorbeeld](./README.md) voor het trainen van een Neural Network.

Een scatterplot toont een X en een Y as, maar je kan het Neural Network wel trainen op meer features! Bijvoorbeeld, de `cars.csv` bevat ***mpg, cylinders, displacement, horsepower, weight, acceleration,model year, origin, car name***

In het eerste object van `addData()` geef je alle features mee waarvan je wil leren. Het tweede object bevat de data die je wil kunnen voorspellen.

```javascript
nn.addData({ feature1: data.feature1, feature2:data.feature2, ... }, { label: data.label })
```
> ⚠️ Bij een prediction moet je wel dezelfde features doorgeven om een voorspelling te krijgen!

### Opdracht

Kan je het trainen verbeteren door meerdere kolommen toe te voegen?

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

## Classification 

Bij de K-Nearest-Neighbour en Decision Tree hebben we gewerkt met data voor classification. Dit kan je ook doen met een Neural Network. Gebruik deze ML5 voorbeeldcode om een van de eerdere datasets te trainen met een Neural Network. 
  
```javascript
const nn = ml5.neuralNetwork({
   task: 'classification',
   debug: true
})

// voorbeeld titanic data
const inputs = { Pclass: 7, Sex: 1, Age: 22, SibSp:0 }
const output = { Survived: "Died" }

// gebruik een for-loop om alle rijen uit de CSV toe te voegen
nn.addData(inputs, output)
  
// trainen
nn.normalizeData()
nn.train({ epochs: 32 }, () => console.log("Finished training!"))

// classify
const passenger = { Pclass: 7, Sex: 1, Age: 22, SibSp:0 }
nn.classify(passenger, (error, result) => console.log(result))
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
  
## Datasets voor classification
  
- [Diabetes](https://github.com/HR-CMGT/PRG08-2021-2022/blob/main/week5/oefening/data/diabetes.csv)
- [Poisonous Mushrooms](https://github.com/HR-CMGT/PRG08-2021-2022/blob/main/week5/oefening/data/mushrooms.csv)
- [Titanic Survivors](https://github.com/HR-CMGT/PRG08-2021-2022/blob/main/week5/oefening/data/titanic.csv)
- [Speed Dating - who gets the most dates?](https://www.kaggle.com/datasets/annavictoria/speed-dating-experiment)

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
