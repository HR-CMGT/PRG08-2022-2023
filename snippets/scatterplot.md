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

Hier gebruiken we de `array.map()` functie om alleen de benodigde data uit de CSV te halen. We gebruiken de `mpg` (miles per gallon) en de `horsepower` kolom als X en Y as.

Je krijgt dan een array die er zo uit ziet `[{x:10,y:20}, {x:15, y:33},...]`. 

Dit kan je doorgeven aan de scatterplot met de functie `createChart()`

```javascript
import { createChart } from "scatterplot.js"

function cleanData(data) {
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
