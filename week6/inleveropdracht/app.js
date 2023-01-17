import { DecisionTree } from "./libraries/decisiontree.js"
import { VegaTree } from "./libraries/vegatree.js"

//
// DATA
//
const csvFile = ""
const trainingLabel = ""  
const ignored = []  

//
// laad csv data als json
//
function loadData() {
    Papa.parse(csvFile, {
        download: true,
        header: true,
        dynamicTyping: true,
        complete: results => console.log(results.data)   // gebruik deze data om te trainen
    })
}

//
// MACHINE LEARNING - Decision Tree
//
function trainModel(data) {
    // todo : splits data in traindata en testdata


    // maak het algoritme aan
    let decisionTree = new DecisionTree({
        ignoredAttributes: ignored,
        trainingSet: data,
        categoryAttr: trainingLabel
    })

    // Teken de boomstructuur - DOM element, breedte, hoogte, decision tree
    let visual = new VegaTree('#view', 800, 400, decisionTree.toJSON())


    // todo : maak een prediction met een sample uit de testdata


    // todo : bereken de accuracy met behulp van alle test data



}


loadData()