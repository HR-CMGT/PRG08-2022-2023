/**
 * Creates an instance of DecisionTree
 * builder - contains training set and some configuration parameters
 */
export class DecisionTree {
    constructor(config) {
        this.predicates = {
            '==': function (a, b) { return a == b },
            '>=': function (a, b) { return a >= b }
        }
        this.root = this.buildDecisionTree({
            trainingSet: config.trainingSet,
            ignoredAttributes: this.arrayToHashSet(config.ignoredAttributes),
            categoryAttr: config.categoryAttr || 'category',
            minItemsCount: config.minItemsCount || 1,
            entropyThrehold: config.entropyThrehold || 0.01,
            maxTreeDepth: config.maxTreeDepth || 70
        })
    }

    // public predict
    predict(item) {
        return this.predictDecisionTree(this.root, item)
    }

    /**
     * Transforming array to object with such attributes 
     * as elements of array (afterwards it can be used as HashSet)
     */
    arrayToHashSet(array) {
        let hashSet = {}
        if (array) {
            for (let i in array) {
                let attr = array[i]
                hashSet[attr] = true
            }
        }
        return hashSet
    }

    /**
     * Calculating how many objects have the same  values of specific attribute.
     * items - array of objects
     * attr  - variable with name of attribute, which embedded in each object
     */
    countUniqueValues(items, attr) {
        let counter = {}
        // detecting different values of attribute
        for (let i = items.length - 1; i >= 0; i--) {
            // items[i][attr] - value of attribute
            counter[items[i][attr]] = 0
        }
        // counting number of occurrences of each of values of attribute
        for (let i = items.length - 1; i >= 0; i--) {
            counter[items[i][attr]] += 1
        }
        return counter
    }

    /**
     * Finding value of specific attribute which is most frequent in given array of objects.
     * items - array of objects
     * attr  - variable with name of attribute, which embedded in each object
     */
    mostFrequentValue(items, attr) {
        // counting number of occurrences of each of values of attribute
        let counter = this.countUniqueValues(items, attr);

        let mostFrequentCount = 0;
        let mostFrequentValue;

        for (let value in counter) {
            if (counter[value] > mostFrequentCount) {
                mostFrequentCount = counter[value];
                mostFrequentValue = value;
            }
        };

        return mostFrequentValue;
    }

    /**
     * Calculating entropy of array of objects by specific attribute.
     * items - array of objects
     * attr  - variable with name of attribute, which embedded in each object
     */
    entropy(items, attr) {
        // counting number of occurrences of each of values of attribute
        let counter = this.countUniqueValues(items, attr);

        let entropy = 0;
        let p;
        for (let i in counter) {
            p = counter[i] / items.length;
            entropy += -p * Math.log(p);
        }

        return entropy;
    }


    /**
     * Function for building decision tree
     */
    buildDecisionTree(config) {

        let trainingSet = config.trainingSet
        let minItemsCount = config.minItemsCount
        let categoryAttr = config.categoryAttr
        let entropyThrehold = config.entropyThrehold
        let maxTreeDepth = config.maxTreeDepth
        let ignoredAttributes = config.ignoredAttributes

        if ((maxTreeDepth == 0) || (trainingSet.length <= minItemsCount)) {
            // restriction by maximal depth of tree or size of training set is to small so we have to terminate process of building tree
            return {
                category: this.mostFrequentValue(trainingSet, categoryAttr)
            };
        }

        let initialEntropy = this.entropy(trainingSet, categoryAttr)

        if (initialEntropy <= entropyThrehold) {
            // entropy of training set too small
            // (it means that training set is almost homogeneous),
            // so we have to terminate process of building tree
            return {
                category: this.mostFrequentValue(trainingSet, categoryAttr)
            };
        }

        // used as hash-set for avoiding the checking of split by rules
        // with the same 'attribute-predicate-pivot' more than once
        let alreadyChecked = {};

        // this variable expected to contain rule, which splits training set
        // into subsets with smaller values of entropy (produces informational gain)
        let bestSplit = { gain: 0 };

        for (let i = trainingSet.length - 1; i >= 0; i--) {
            let item = trainingSet[i];

            // iterating over all attributes of item
            for (let attr in item) {
                if ((attr == categoryAttr) || ignoredAttributes[attr]) {
                    continue;
                }

                // let the value of current attribute be the pivot
                let pivot = item[attr];

                // pick the predicate
                // depending on the type of the attribute value
                let predicateName;
                if (typeof pivot == 'number') {
                    predicateName = '>=';
                } else {
                    // there is no sense to compare non-numeric attributes
                    // so we will check only equality of such attributes
                    predicateName = '==';
                }

                let attrPredPivot = attr + predicateName + pivot;
                if (alreadyChecked[attrPredPivot]) {
                    // skip such pairs of 'attribute-predicate-pivot',
                    // which been already checked
                    continue;
                }
                alreadyChecked[attrPredPivot] = true;

                let predicate = this.predicates[predicateName];

                // splitting training set by given 'attribute-predicate-value'
                let currSplit = this.split(trainingSet, attr, predicate, pivot);

                // calculating entropy of subsets
                let matchEntropy = this.entropy(currSplit.match, categoryAttr);
                let notMatchEntropy = this.entropy(currSplit.notMatch, categoryAttr);

                // calculating informational gain
                let newEntropy = 0;
                newEntropy += matchEntropy * currSplit.match.length;
                newEntropy += notMatchEntropy * currSplit.notMatch.length;
                newEntropy /= trainingSet.length;
                let currGain = initialEntropy - newEntropy;

                if (currGain > bestSplit.gain) {
                    // remember pairs 'attribute-predicate-value'
                    // which provides informational gain
                    bestSplit = currSplit;
                    bestSplit.predicateName = predicateName;
                    bestSplit.predicate = predicate;
                    bestSplit.attribute = attr;
                    bestSplit.pivot = pivot;
                    bestSplit.gain = currGain;
                }
            }
        }

        if (!bestSplit.gain) {
            // can't find optimal split
            return { category: this.mostFrequentValue(trainingSet, categoryAttr) };
        }

        // building subtrees

        config.maxTreeDepth = maxTreeDepth - 1;

        config.trainingSet = bestSplit.match;
        let matchSubTree = this.buildDecisionTree(config);

        config.trainingSet = bestSplit.notMatch;
        let notMatchSubTree = this.buildDecisionTree(config);

        return {
            attribute: bestSplit.attribute,
            predicate: bestSplit.predicate,
            predicateName: bestSplit.predicateName,
            pivot: bestSplit.pivot,
            match: matchSubTree,
            notMatch: notMatchSubTree,
            matchedCount: bestSplit.match.length,
            notMatchedCount: bestSplit.notMatch.length
        };
    }

    /**
     * Classifying item, using decision tree
     */
    predictDecisionTree(tree, item) {
        let attr,
            value,
            predicate,
            pivot;

        // Traversing tree from the root to leaf
        while (true) {

            if (tree.category) {
                // only leafs contains predicted category
                return tree.category;
            }

            attr = tree.attribute;
            value = item[attr];

            predicate = tree.predicate;
            pivot = tree.pivot;

            // move to one of subtrees
            if (predicate(value, pivot)) {
                tree = tree.match;
            } else {
                tree = tree.notMatch;
            }
        }
    }

    /**
     * Splitting array of objects by value of specific attribute, using specific predicate and pivot.
     * Items which matched by predicate will be copied to the new array called 'match', and the rest of the items 
     * will be copied to array with name 'notMatch'
     * items - array of objects
     * attr  - variable with name of attribute,which embedded in each object
     * predicate - function(x, y) which returns 'true' or 'false'
     * pivot - used as the second argument when calling predicate function:e.g. predicate(item[attr], pivot)
     */
    split(items, attr, predicate, pivot) {
        let match = [];
        let notMatch = [];

        let item,
            attrValue;

        for (let i = items.length - 1; i >= 0; i--) {
            item = items[i];
            attrValue = item[attr];

            if (predicate(attrValue, pivot)) {
                match.push(item);
            } else {
                notMatch.push(item);
            }
        };

        return {
            match: match,
            notMatch: notMatch
        };
    }

    // return the trained model as json
    toJSON() {
        return this.treeToJson(this.root)
    }
    
    // Recursive (DFS) function for displaying inner structure of decision tree
    treeToJson(tree) {
        // end leaf = prediction
        if (tree.category) {
            return { name: tree.category }
        }

        return {
            name: `${tree.attribute} ${tree.predicateName} ${tree.pivot} ?`,
            children: [
                {
                    name: "yes",
                    children: [this.treeToJson(tree.match)]
                },
                {
                    name: "no",
                    children: [this.treeToJson(tree.notMatch)]
                }
            ]
        }
    }
}




/**
 * Creates an instance of RandomForest with specific number of trees
 * builder - contains training set and some configuration parameters for building decision trees
 */
export class RandomForest {
    constructor(config, treesNumber) {
        this.trees = this.buildRandomForest(config, treesNumber)
    }
    predict(item) {
        return this.predictRandomForest(this.trees, item)
    }

    /**
     * Building array of decision trees
     */
    buildRandomForest(config, treesNumber) {
        let items = config.trainingSet;

        // creating training sets for each tree
        let trainingSets = [];
        for (let t = 0; t < treesNumber; t++) {
            trainingSets[t] = [];
        }
        for (let i = items.length - 1; i >= 0; i--) {
            // assigning items to training sets of each tree
            // using 'round-robin' strategy
            let correspondingTree = i % treesNumber;
            trainingSets[correspondingTree].push(items[i]);
        }

        // building decision trees
        let forest = [];
        for (let t = 0; t < treesNumber; t++) {
            config.trainingSet = trainingSets[t];

            let tree = new DecisionTree(config);
            forest.push(tree);
        }
        return forest;
    }

    /**
     * Each of decision tree classifying item
     * ('voting' that item corresponds to some class).
     *
     * This function returns hash, which contains 
     * all classifying results, and number of votes 
     * which were given for each of classifying results
     */
    predictRandomForest(forest, item) {
        let result = {};
        for (let i in forest) {
            let tree = forest[i];
            let prediction = tree.predict(item);
            result[prediction] = result[prediction] ? result[prediction] + 1 : 1;
        }
        return result;
    }
}