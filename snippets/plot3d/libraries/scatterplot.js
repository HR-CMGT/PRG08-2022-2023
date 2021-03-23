// 3D documentation
// https://plotly.com/javascript/reference/scatter3d/



// pass training data and prediction data at the same time
export function generate3dPlot(data, predictions) {

    let trace1 = {
        x: unpack(data, "horsepower"),
        y: unpack(data, "mpg"),
        z: unpack(data, "weight"),
        mode: "markers",
        marker: {
            size: 10,
            opacity: 0.7
        },
        type: "scatter3d"
    };

    /* predictions */
    let trace2 = {
        x: unpack(predictions, "horsepower"),
        y: unpack(predictions, "mpg"),
        z: unpack(predictions, "weight"),
        mode: "markers",
        marker: {
            color: "rgb(204, 20, 20)",
            size: 7,
            symbol: "circle",
            opacity: 0.3
        },
        type: "scatter3d"
    };
    

    let plotdata = [trace1, trace2]


    let layout = {
        margin: { l: 0, r: 0, b: 0, t: 0 },
        showlegend: true,
        width: 700, height: 700
    }

    Plotly.newPlot("chart", plotdata, layout)
}

function unpack(rows, key) {
    return rows.map((row) => row[key])
}