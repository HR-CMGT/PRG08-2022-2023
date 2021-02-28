# Data laden

## CSV files

Download een CSV file, bijvoorbeeld de [overlevenden van de Titanic](https://www.kaggle.com/c/titanic/data?select=train.csv). Voeg de Papa Parse library toe aan je HTML

```HTML
<script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.0/papaparse.min.js"></script>
```

## Javascript

```javascript
function loadData(){
    Papa.parse("./titanic_survivors.csv", {
        download:true,
        header:true, 
        dynamicTyping:true,
        complete: results => checkData(results.data)
    })
}

function checkData(data) {
    console.log(data)
}
```
[Documentatie](https://www.papaparse.com)

## JSON files

In dit voorbeeld laden we `carsData.json` van google. We halen daar de *miles per gallon* en *horsepower* uit om mee te trainen. We gebruiken `filter` om corrupte data uit de tabel te verwijderen.

```javascript
async function getData() {
    const response = await fetch('https://storage.googleapis.com/tfjs-tutorials/carsData.json')
    const json = await response.json()
    const cleaned = json.map(car => ({
        mpg: car.Miles_per_Gallon,
        horsepower: car.Horsepower,
    }))
        .filter(car => (car.mpg != null && car.horsepower != null))

    return cleaned
}
```