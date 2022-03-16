const canvas = document.getElementById('myChart')
let myChart

// documentatie 
// https://www.chartjs.org/docs/latest/charts/scatter.html

export function createChart(columns){
    const config = {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Cars Miles per gallon versus Horsepower',
                data: columns,
                backgroundColor: 'rgb(185, 185, 255)'
            }]
        },
        options: {
            scales: {
                x: {
                    title: {display: true, text: 'Horsepower'}
                },
                y: {
                    title: {display: true, text: 'Miles per Gallon'}
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
export function updateChart(label, data){
    myChart.data.datasets.push({
        label,
        data,
        backgroundColor: 'rgb(255, 44, 44)'
    })
    myChart.update()
}
