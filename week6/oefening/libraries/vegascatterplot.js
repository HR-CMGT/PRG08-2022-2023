export class VegaScatterplot {
    constructor(){
        console.log("New scatter plot created")
    }
    // names of the labels in the data! Use await initialise to know when it's ready
    // "Horsepower", "Miles_per_Gallon", 600, 400, data array
    async initialise(xLabel, yLabel, width, height, data) {
        this.settings = { xLabel, yLabel, width, height }
        this.data = data
        await this.loadConfig()
        await this.drawInitialPoints()
    }

    async loadConfig() {
        let response = await fetch('./libraries/vegaconfig.json')
        let config = await response.json()

        // add user settings
        config.width = this.settings.width
        config.height = this.settings.height

        // titles in the side of the graphic
        config.axes[0].title = this.settings.xLabel  //"Horsepower"
        config.axes[1].title = this.settings.yLabel  //"Miles_per_Gallon"

        // scales (automatically sizes the x y lengths to fit the screen)
        config.scales[0].domain.field = this.settings.xLabel
        config.scales[1].domain.field = this.settings.yLabel

        // marks are the blue and green dots - label names have to be equal to fields in data
        const trainingmarks = config.marks[0].encode.update
        const predictionmarks = config.marks[1].encode.update
        trainingmarks.x.field = predictionmarks.x.field = this.settings.xLabel
        trainingmarks.y.field = predictionmarks.y.field = this.settings.yLabel

        this.view = new vega.View(vega.parse(config), {
            renderer: 'canvas',
            container: '#view',
            hover: true
        })

        return Promise.resolve()
    }

    // set data --- https://vega.github.io/vega/docs/api/view/#data-and-scales  
    async drawInitialPoints() {
        this.view.data("trainingdata", this.data)
        return await this.view.runAsync()
    }

    // draw regression results - expects array in this shape
    /*[
        { "mpg": 5, "horsepower": 5 },
        { "mpg": 30, "horsepower": 30 }
    ]
    */
    async addPoints(points) {
        this.view.data("predictiondata", points)
        return await this.view.runAsync()
    }
}

// dataset test
// https://www.kaggle.com/uciml/autompg-dataset
