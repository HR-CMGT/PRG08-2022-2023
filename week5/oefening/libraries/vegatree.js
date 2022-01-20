// Deze class tekent de decision tree met behulp van de VEGA library
// https://vega.github.io/vega/examples/tree-layout/
// CONTAINER : dom element
// WIDTH, HEIGHT 
// TREE : json export van decisiontree algoritme
export class VegaTree {
    constructor(container, width, height, json) {
        this.container = container
        this.width = width
        this.height = height
        this.treeHierarchy = json
        this.loadConfigFile()
    }    

    async loadConfigFile() {
        const response = await fetch('./libraries/vegaconfig.json')
        const config = await response.json()
        this.render(config)
    }

    async render(config) {
        config.width = this.width
        config.height = this.height
        let view = new vega.View(vega.parse(config), {
            renderer: 'canvas',
            container: this.container,
            hover: true
        })

        let vegaTree = this.flattenTree(this.treeHierarchy)
        view.data("tree", vegaTree)
        await view.runAsync()
    }

    

    // het decision tree algoritme geeft parent-child objecten terug
    // de vega tree heeft een flat array nodig met id's
    flattenTree(obj) {
        let id = 1
        return _flatten2(obj)

        function _flatten2(obj, ar = [], parentID = -1) {
            let node = {}
            node.id = id++
            node.name = obj.name
            if (parentID !== -1) { node.parent = parentID }
            if (obj.size) { node.size = obj.size }
            ar.push(node)

            if (obj.children) {
                for (let child of obj.children) {
                    _flatten2(child, ar, node.id)
                }
            }
            return ar
        }
    }


    // not used: D3 library gebruiken om hierarchie om te zetten
    // nadeel is dat je de D3 libary speciaal hiervoor moet inladen 
    flattenD3hierarchy(d3hierarchy) {
        let ar = []
        let i = 1

        let hierarchyWithID = d3.hierarchy(d3hierarchy).each(d => d.id = i++)

        ar = hierarchyWithID.descendants().map(d => {
            let obj = {}
            obj.name = d.data.name
            obj.id = d.id
            if (d.parent) { obj.parent = d.parent.id }
            if (d.size) { obj.size = d.size }
            return obj
        })

        return ar
    }

}