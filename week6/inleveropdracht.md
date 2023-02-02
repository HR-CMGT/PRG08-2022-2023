# Inleveropdracht week 6

Bij de inleveropdracht van week 6 ga je een echte dataset gebruiken, én testen hoe accuraat je voorspellingen zijn. 

  - Gebruik een CSV dataset zoals hieronder beschreven
  - Split de dataset in traindata en testdata
  - Teken het model als decision tree met behulp van de traindata
  - Reken de accuracy uit met behulp van de testdata *(hoe vaak wordt de testdata correct voorspeld?)*
  - Maak een confusion matrix
  - Sla het model op als JSON
  - Maak een aparte HTML pagina waarin je het model kan inladen en de voorspelling kan maken

<br>
<br>
<br>

## CSV Dataset

Gebruik een van de datasets uit deze folder, of zoek zelf een [classification dataset op kaggle](https://www.kaggle.com/datasets?tags=13302-Classification). 

- Voorspel of je het eten van een paddestoel gaat overleven
met de [**Poisonous mushrooms dataset**](https://www.kaggle.com/uciml/mushroom-classification)
- Voorspel of je huidige levensstijl diabetes gaat opleveren met de [**Diabetes dataset**](https://www.kaggle.com/uciml/pima-indians-diabetes-database)




<br>
<br>
<br>

## Bekijk je CSV data

Bij het inlezen van de data moet je controleren wat het **label** is waarop we willen trainen. Ook moet je even kijken of er kolommen zijn die niet relevant zijn bij het trainen.

- Bij `mushrooms.csv` is het label `class`, en de inhoud is `p` (poisonous) en `e` (edible.)
- Bij `diabetes.csv` is het label `Label` en de inhoud is `1` (diabetes) en `0` (geen diabetes)

<br>
<br>
<br>

## Sorteren data

⚠️ Als je CSV file toevallig is gesorteerd op label, dan heeft je traindata alle positieve labels, en je testdata alle negatieve labels. Om verkeerde training te voorkomen shuffle je de array **voordat** je splitst op traindata en testdata.

```javascript
data.sort(() => (Math.random() - 0.5)
```

<br>
<br>
<br>

## Traindata en testdata

We gaan de data opsplitsen in trainingdata en testdata om te kunnen uitrekenen hoe goed het algoritme werkt. Sommige Kaggle sets zijn al opgesplitst. Als dat niet zo is kan je het zelf doen met javascript. 

```javascript
let trainData = data.slice(0, Math.floor(data.length * 0.8))
let testData = data.slice(Math.floor(data.length * 0.8) + 1)
```

Nu kan je de decision tree genereren en tekenen. Je kan hierbij irrelevante kolommen weglaten en je moet aangeven welke kolom het label is.

```javascript
let decisionTree = new DecisionTree({
    // hier kan je aangeven welke kolommen genegeerd moeten worden
    ignoredAttributes: ['Name'],    
    trainingSet: trainData,
    // dit is het label dat je wil gaan voorspellen
    categoryAttr: "survived"          
})
// teken de tree
let json = decisionTree.toJSON()
let visual = new VegaTree('#view', 2300, 1000, json)
```



<br>
<br>
<br>

## Prediction

Uiteindelijk kunnen we voorspellingen gaan doen. Gebruik hiervoor een item uit de testdata.

```javascript
let passenger = testData[0]
let passengerPrediction = decisionTree.predict(passenger)
console.log(`Survived the holiday : ${passengerPrediction}`)
```

<br>
<Br>
<br>

## Accuracy

Als we de testdata gebruiken voor onze voorspellingen, dan kunnen we aan het label van de testdata zien of de voorspelling goed was of niet!

Als we weten dat 70 van de 100 voorspellingen goed gedaan zijn, dan zeggen we dat ons algoritme een **Accuracy van 70%** heeft.

<br>

> ⚠️ Bij een prediction moet je nooit het correcte label meegeven. Die moet je dus eerst verwijderen uit je test sample. In dit voorbeeld maken we eerst een kopie van de titanic testdata en daaruit verwijderen we het "survived" label.

```javascript
function testPassenger(passenger) {
    // kopie van passenger maken, zonder het "survived" label
    const passengerWithoutLabel = { ...passenger }
    delete passengerWithoutLabel.survived

    // prediction
    let prediction = decisionTree.predict(passengerWithoutLabel)

    // vergelijk de prediction met het echte label
    let message = (prediction === passenger.survived) ? "goed voorspeld!" : "fout voorspeld!"
    console.log(message)
}

testPassenger(testData[0])
```
Schrijf een `for` loop waarin je alle rijen uit de testdata test! Je kan bijhouden hoeveel van jouw predictions overeenkomen met de werkelijkheid. Dit geeft uiteindelijk je accuracy:

```javascript
let accuracy = amountCorrect / totalAmount
```

Toon in de HTML wat de accuracy is van jouw decision tree.

<br>
<br>
<br>

## Confusion Matrix

Met een ***Confusion Matrix*** krijg je nog wat meer inzicht in je accuracy. Je gaat nu ook bijhouden waarom een voorspelling goed of fout was. Bijvoorbeeld bij de mushrooms:

```javascript
if(prediction == "e" && label == "p") {
    console.log("🍄 predicted edible, but was actually poisonous!🤮 ⚰️")
}
if(prediction == "p" && label == "e") {
    console.log("🍄 predicted poisonous, but was actually edible! 😬")
}
```

![confusion](../images/confusion.png)

Kan je jouw confusion matrix in de HTML file tonen?

```html
<div>
    <h4>Confusion Matrix</h4>
    <table id="confusion">
        <tr>
            <td></td>
            <td>Predicted true</td>
            <td>Predicted false</td>
        </tr>
        <tr>
            <td>Actually true</td>
            <td> - </td>
            <td> - </td>
        </tr>
        <tr>
            <td>Actually false</td>
            <td> - </td>
            <td> - </td>
        </tr>`
    </table>
</div>
```

<br>
<br>
<br>

## Model opslaan als JSON

Als je het model hebt gemaakt (de Decision Tree), dan heb je de originele data niet meer nodig. Je kan de decision tree als JSON opvragen:

```javascript
let decisionTree = new DecisionTree({...})

// de tree kan je opvragen als JSON
let json = decisionTree.toJSON()
let jsonString = JSON.stringify(json)
console.log(jsonString)
```

Sla deze JSON op in een apart bestand (Bv. met `copy>paste` vanuit de console 😬)

<br>
<br>
<br>

## Model inladen

Maak een aparte HTML file aan waarin je de JSON inlaadt en gebruikt om een voorspelling te doen. Je kan [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) gebruiken om JSON te laden. Nu kan je je decision tree gebruiken zonder dat je het originele CSV bestand nog nodig hebt!


<br>
<br>
<br>

## Externe links

- [Kaggle datasets voor classification](https://www.kaggle.com/datasets?tags=13302-Classification)
- [Decision Tree Javascript](https://github.com/lagodiuk/decision-tree-js)
- [Vega tree viewer](https://vega.github.io/vega/examples/tree-layout/)
- [Papa Parse](https://www.papaparse.com)
- [Towards Data Science : Decision Tree explanation](https://towardsdatascience.com/decision-trees-in-machine-learning-641b9c4e8052/)
