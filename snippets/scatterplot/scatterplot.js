const canvas = document.getElementById('myChart')
let myChart

export function createChart(columns) {
    const config = {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Cars Miles per gallon versus Horsepower',
                data: columns,
                backgroundColor: 'rgb(99, 99, 255)'
            }]
        },
        options: {
            scales: {
                x: {
                    title: { display: true, text: 'Miles per Gallon' }
                },
                y: {
                    title: { display: true, text: 'Horsepower' }
                }
            },
            layout: {
                padding: 30
            }
        }
    }

    myChart = new Chart(canvas, config)
}

// update an existing chart
// https://www.chartjs.org/docs/latest/developers/updates.html
export function updateChart(label, data) {
    myChart.data.datasets.push({
        label,
        data,
        backgroundColor: 'rgb(255, 99, 55)'
    })
    myChart.update()
}