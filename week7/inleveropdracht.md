
# Inleveropdracht week 7

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
- Studenten dropout voorspellen aan de hand van anonieme studentgegevens Hogeschool Rotterdam
- Regression dataset van [kaggle.com](https://www.kaggle.com/search?q=tag%3A%22regression%22+in%3Adatasets) 

<br>
<br>
<br>

# Trainen met meerdere kolommen

Je voorspelling wordt veel nauwkeuriger als je met meerdere kolommen traint. Voordat we dit gaan doen is het handig om je data op te splitsen in train en testdata.

```javascript
function checkData(data){
    data.sort(() => (Math.random() - 0.5)
    let trainData = data.slice(0, Math.floor(data.length * 0.8))
    let testData = data.slice(Math.floor(data.length * 0.8) + 1)

    for(let car of trainData){
        nn.addData({ horsepower: car.horsepower, weight: car.weight, cylinders:car.cylinders }, { mpg: car.mpg })
    }
}
```
De voorspelling kan je doen met testdata, of met data die de gebruiker heeft ingevoerd.

```javascript
async function makePrediction() {
    const testCar = { horsepower: testData[0].horsepower, weight: testData[0].weight, cylinders:testData[0].cylinders }
    const pred = await nn.predict(testCar)
    console.log(pred[0].mpg)
}
```
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

## Optioneel: scatterplot met testdata

Bij het tekenen van je voorspelling in een scatterplot kan je nu een `for` loop maken die door alle `testData` heen loopt en dan een voorspelling doet met de kolommen waarop je getrained hebt. Let op dat je bij het tekenen in de scatterplot nog steeds alleen een x en een y waarde meegeeft.

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
