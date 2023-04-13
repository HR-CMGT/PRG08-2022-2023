# Recommender met KNN

In dit voorbeeld gebruiken we KNN om personen te zoeken waar je een match mee hebt qua interesses.

<br>
<br>
<br>

## Trainen

Importeer `knear` in je HTML file. Vervolgens kan je trainen met jouw data:

```javascript
const data = [
    { cooking: 1, painting: 10, name: 'erik' },
    { cooking: 0, painting: 0, name: 'bob' },
    { cooking: 10, painting: 1, name: 'ellen' },
    { cooking: 4, painting: 6, name: 'wesley' },
    { cooking: 3, painting: 8, name: 'ramon' },
    { cooking: 8, painting: 7, name: 'julia' },
    { cooking: 8, painting: 3, name: 'eva' },
    { cooking: 3, painting: 2, name: 'bas' },
    { cooking: 2, painting: 7, name: 'jim' },
]

const machine = new knn.kNear(1)
for (let d of data) {
    machine.learn([d.cooking, d.painting], d.name)
}
```
## Voorspellen

Je kan nu de dichtsbijzijnde match vinden:

```javascript
// persoon met interesses cooking: 1, painting: 2
const prediction = machine.classify([1,2])
```

## Meer dan twee waarden

Je kan meer dan twee interesses toevoegen. 

```javascript
machine.learn([12,44,55,2,21], "henk")
const prediction = machine.classify([12,44,15,20,12])
```

<br>
<br>
<br>

## Tekenen

We gebruiken ChartJS om twee interesses te tekenen. Hiermee kan je controleren of je voorspellingen goed zijn.

```javascript
const chartdata = data.map(person => ({
    x: person.cooking,
    y: person.painting,
}))
const chartlabels = data.map(person => person.name)
createChart(chartdata, chartlabels, "Cooking", "Painting")
```