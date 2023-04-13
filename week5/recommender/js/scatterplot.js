const canvas = document.getElementById('myChart')
let myChart

// documentatie 
// https://www.chartjs.org/docs/latest/charts/scatter.html

function createChart(knndata, knnlabels, labelx, labely){
    const config = {
        type: 'scatter',
        data: {
            labels: knnlabels,
            datasets: [{
                label: `${labelx},${labely}`,
                data: knndata,
                backgroundColor: 'rgb(185, 185, 255)'
            }]
        },
        options: {
            scales: {
                x: {
                    title: {display: true, text: labelx}
                },
                y: {
                    title: {display: true, text: labely}
                }
            },
            layout: {
                padding: 30
            }
        }
    }

    myChart = new Chart(canvas, config)
}
