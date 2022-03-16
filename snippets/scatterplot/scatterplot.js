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
// add points in this format: updateChart([{x:19,y:14, x:1, y:12}])
// https://www.chartjs.org/docs/latest/developers/updates.html
export function updateChart(newData) {
    for (let point of newData) {
        myChart.data.datasets[0].data.push(point)
    }
    myChart.update()
}