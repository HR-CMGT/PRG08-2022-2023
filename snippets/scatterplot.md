# Scatterplot tekenen

In dit voorbeeld lezen we een CSV file en gebruiken we twee kolommen voor de x en y as van het scatterplot.

- [Voorbeeldcode](./scatterplot)
- [Documentatie ChartJS](https://www.chartjs.org/docs/latest/charts/scatter.html)

<br>
<br>
<br>

## HTML

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.1/chart.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.0/papaparse.min.js"></script>

<canvas id="myChart" width="300" height="200"></canvas>
```

## JAVASCRIPT

### Data laden
```javascript
function loadData() {
    Papa.parse("cars.csv", {
        download: true,
        header: true,
        dynamicTyping: true,
        complete: results => cleanData(results.data)
    })
}
```

### Data opschonen

Na het inladen van de CSV kijk je met `console.table()` of de data goed is binnengekomen.

Omdat een scatterplot data tekent op een `x` en `y` as, moeten we hiervoor twee kolommen kiezen uit de CSV file. We gebruiken `array.map()` om de `mpg` (miles per gallon) en de `horsepower` kolommen om te zetten naar `x` en `y`.

Je krijgt dan een array die er zo uit ziet `[{x:10,y:20}, {x:15, y:33},...]`. 

Dit kan je doorgeven aan de scatterplot met de functie `createChart()`

```javascript
import { createChart } from "scatterplot.js"

function cleanData(data) {
    console.table(data)

    const columns = data.map(car => ({
        x: car.horsepower,
        y: car.mpg,
    }))
    createChart(columns, "Horsepower", "MPG")
}
```

### Achteraf punten toevoegen

Je kan achteraf nog punten toevoegen aan een bestaande grafiek.

```javascript
import { updateChart } from "scatterplot.js"

updateChart("New data", [{ x: 5, y: 45 }, { x: 8, y: 48 }])
```

<br>
<br>
<br>
