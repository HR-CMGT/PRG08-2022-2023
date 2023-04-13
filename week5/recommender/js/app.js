let form = document.getElementById("form")
let feedback = document.getElementById("feedback")

const data = [
    { cooking: 1, painting: 100, name: 'erik' },
    { cooking: 0, painting: 10, name: 'bob' },
    { cooking: 89, painting: 15, name: 'ellen' },
    { cooking: 44, painting: 65, name: 'wesley' },
    { cooking: 3, painting: 86, name: 'ramon' },
    { cooking: 85, painting: 75, name: 'julia' },
    { cooking: 8, painting: 3, name: 'eva' },
    { cooking: 39, painting: 24, name: 'bas' },
    { cooking: 12, painting: 19, name: 'ollie' }, 
    { cooking: 49, painting: 65, name: 'arno' },
    { cooking: 20, painting: 40, name: 'robin' },
    { cooking: 49, painting: 36, name: 'maaike' },
    { cooking: 74, painting: 19, name: 'karin' },
    { cooking: 58, painting: 18, name: 'marloes' },
]

const machine = new kNear(1)
for (let d of data) {
    machine.learn([d.cooking, d.painting], d.name)
}


// waarden invullen voor een voorspelling
form.addEventListener("submit", (e) =>{
    e.preventDefault()
    const cooking = parseInt(e.target[0].value)
    const painting = parseInt(e.target[1].value)
    console.log(`Cooking ${cooking} Painting ${painting}`)
    const prediction = machine.classify([cooking, painting])
    console.log(prediction)
    feedback.innerHTML = `Je beste match is ${prediction}`
})



// Data tekenen op de x,y as. Als je meer dan twee interesses hebt moet je kiezen welke je wil tekenen
const chartdata = data.map(person => ({
    x: person.cooking,
    y: person.painting,
}))
const chartlabels = data.map(person => person.name)
createChart(chartdata, chartlabels, "Cooking", "Painting")