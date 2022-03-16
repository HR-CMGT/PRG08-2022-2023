const canvas = document.getElementById('myChart')

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

    const myChart = new Chart(canvas, config)
}