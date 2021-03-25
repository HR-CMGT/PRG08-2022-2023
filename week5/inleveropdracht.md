
# Inleveropdracht week 5

Maak eerst de [basisoefening](./README.md) af, voordat je hiermee begint! Als iets niet lukt, ga dan door met de volgende stap. 

### Lezen:

 - [Lees de ML5 documentatie over neural networks](https://learn.ml5js.org/#/reference/neural-network)
 - Bekijk de links onderin dit document en bekijk een van de artikelen of filmpjes

### Inleveren:

- De uitgewerkte opdracht
  - Dataset gebruiken
  - Scatterplot tekenen van punten en voorspelling
  - Model opslaan en inladen in een aparte UI
  - Optioneel : kan je de accuracy uitrekenen met testdata?
- Ingevuld inleverdocument 
  - Welke data heb je gebruikt? 
  - Ging dat in een keer goed? Waar liep je tegen aan?
  - Is je prediction een mooie lijn in je data scatterplot?
  - Kon je een accuracy uitrekenen met testdata?
  - Wat heb je gelezen van de geleverde externe links / filmpjes? Zat hier iets bij dat jij interessant vindt?

<br>
<br>
<br>

# Opdracht

<br>

## Data

Gebruik een dataset die geschikt is voor regression. Onderaan deze pagina vind je een aantal links, en je mag ook zelf zoeken naar [regression datasets op Kaggle](https://www.kaggle.com/search?q=tag%3A%22regression%22+in%3Adatasets). Gebruik [Papa Parse](https://www.papaparse.com) om CSV files te laden. 

```javascript
function loadData() {
    Papa.parse("./data/cars.csv", {
        download: true,
        header: true, // true maakt objecten, false maakt arrays
        dynamicTyping: true,
        complete: results => console.log(results.data)
    })
}
```

<br>

### Data opschonen

Een CSV file is niet altijd netjes ingedeeld. Controleer of er verkeerde waarden in staan. Dit kan je doen in Excel, of je kan in javascript de verkeerde waarden filteren. Je moet data shufflen voordat je een neural network gaat trainen. [Zie deze code snippet voor het prepareren van je data](https://github.com/HR-CMGT/PRG08-2020-2021/blob/main/snippets/csv.md).

<br>

### Scatterplot tekenen

Teken nu de scatterplot van twee kolommen in je data. Op de Y as zet je het getrainde label (bv. de "mpg" van de auto). Op de X as zet je de feature waar je op wil trainen (bv. de "horsepower" van de auto).

Het scatterplot kan verkeerde waarden aan het licht brengen, bv. een auto met een "mpg" van 0. 

> ⚠️ Een scatterplot toont alleen een X en een Y as, maar je kan eventueel wel trainen op meer features, bv. het gewicht en bouwjaar van de auto. Let op dat je alleen een X en Y aan de scatterplot visualiser doorgeeft.

<br>
<br>
<br>

## Training en Prediction

Bij het trainen kan je meegeven hoeveel *epochs* dit moet duren. Experimenteer hiermee en kijk of dit veel verschil maakt voor je eindresultaat.

```javascript
nn.train({ epochs: 12 }, finishedTraining)
```

Na het trainen teken je in je scatterplot de predictions voor alle waarden. Bv, als een auto een horsepower van 10 tot 200 heeft, teken je 190 voorspellingen van de *miles per gallon* voor elke *horsepower*

<br>
<Br>
<br>

## Model opslaan en inladen

Voeg een knop toe aan je "training" webpagina waarmee je je getrainde model kan opslaan. [Documentatie: ML5 save()](https://learn.ml5js.org/#/reference/neural-network?id=save).

Maak een aparte webpagina waarin je het getrainde model kan inladen. *Op deze pagina hoef je het neural network dus niet te trainen*. [Documentatie: ML5 load()](https://learn.ml5js.org/#/reference/neural-network?id=load)

> ⚠️ Er lijkt een bug in MacOS Safari te zijn waarbij het model niet helemaal wordt opgeslagen. Er moeten drie bestanden verschijnen:
```bash
model_meta.json
model.json
model.weights.bin
```

Je pagina bevat een gebruiksvriendelijke UI waarin je bv. de *horsepower* van je auto kan invoeren, en dan de *miles per gallon* te zien krijgt.

![car](../images/carpredict.png)

> ⚠️ Als je neural network is getrained op meer dan één feature, dan kan je ook meer invoervelden in de UI plaatsen.

<br>
<br>
<br>
<br>

## Optioneel : Traindata en testdata

Net zoals bij de decision tree kan je de CSV data [opsplitsen](https://github.com/HR-CMGT/PRG08-2020-2021/blob/main/snippets/csv.md) zodat je na het trainen kan uitrekenen wat de accuracy van je voorspellingen is.

<br>
<br>
<br>




## Datasets voor regression

- [Beijing Pollution, Salary Prediction](https://www.kaggle.com/ahmettezcantekin/beginner-dataset-v2)
- [Boston House Prices](https://www.kaggle.com/vikrishnan/boston-house-prices)
- [Cars miles per gallon](https://www.kaggle.com/uciml/autompg-dataset)
- [Kaggle regression dataset search](https://www.kaggle.com/search?q=tag%3A%22regression%22+in%3Adatasets)

## Documentation

- [🔥 ML5 Neural Networks in Javascript](https://learn.ml5js.org/#/reference/neural-network)
- [Vega Scatterplot documentation](https://vega.github.io/vega/examples/scatter-plot/)


## Externe links

- [📺 Crash Course Neural Networks](https://www.youtube.com/watch?v=JBlm4wnjNMY)
- [📺  But what is a neural network?](https://www.youtube.com/watch?v=aircAruvnKk)
- [📺  Showcase: Made with TensorFlowJS](https://www.youtube.com/watch?v=GskMuu821NI)
- [📺 Code a perceptron from scratch in javascript!](https://www.youtube.com/watch?v=o98qlvrcqiU&t=26s)
- [Neural Network Playground](https://playground.tensorflow.org/)
- [Towards Data Science : Neural Networks for beginners](https://towardsdatascience.com/a-beginners-guide-to-neural-networks-d5cf7e369a13)
