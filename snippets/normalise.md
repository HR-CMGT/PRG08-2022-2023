# Data normaliseren

Als de getallen per kolom in een andere schaal zijn, kan een algoritme de voorkeur geven aan een bepaalde kolom. In deze tabel gebruikt *height* veel grotere waarden dan *ear length*. Dat kan effect hebben op het leerproces van het algoritme.

### Cats & dogs

| Height | Ear length |  Label |
| ------ | ------ | ------ |
| 9.2 | 2 | 'cat' |
| 17 | 5 | 'dog' |
| 9.1 | 1.95 | 'cat' |

Als je dit wil voorkomen kan je elke kolom *normaliseren*. De waarden gaan dan altijd van 0 tot 1. 

| Height | Ear length |  Label |
| ------ | ------ | ------ |
| 0.02 | 0.01 | 'cat' |
| 0.73 | 0.72 | 'dog' |
| 0.01 | 0.01 | 'cat' |

In sommige algoritmes is dit al ingebouwd. Je kan dit ook zelf doen: om een kolom te normaliseren moet je eerst per kolom weten wat de *hoogste* en *laagste* waarde is. Daarna kan je deze functie aanroepen:

```javascript
function normalise(val, max, min) { 
    return (val - min) / (max - min);
}

normalise(3, 6, 0) // returns 0.5
```

Mocht het nodig zijn, dan kan je de uitkomst weer *denormaliseren* met deze functie:

```javascript
function deNormalise(val, max, min) {
    return (val * (max - min)) + min
}

deNormalize(0.5, 6, 0) // returns 3
```
# ML5

In een ML5 Neural Network is de *normalise* functie al ingebouwd.
```javascript
const nn = ml5.neuralNetwork(options)
nn.addData(inputs, output)
nn.normalizeData()
```
