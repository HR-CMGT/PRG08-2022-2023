class kNear {
    constructor(k) {
        this.k = k
        this.training = []
    }

    //compute the euclidean distance between two vectors
    //function assumes vectors are arrays of equal length
    dist(v1, v2) {
        let sum = 0
        v1.forEach( (val, index) => {
            sum += Math.pow(val - v2[index], 2)
        })
        return Math.sqrt(sum)
    };

    updateMax(val, arr) {
        let max = 0
        for(let obj of arr) {
            max = Math.max(max, obj.d)
        }
        return max
    }

    mode(store) {
        let frequency = {} // array of frequency.
        let max = 0 // holds the max frequency.
        let result // holds the max frequency element.
        for (let v in store) {
            frequency[store[v]] = (frequency[store[v]] || 0) + 1; // increment frequency.
            if (frequency[store[v]] > max) { // is this frequency > max so far ?
                max = frequency[store[v]] // update max.
                result = store[v] // update result.
            }
        }
        return result
    }

    //
    // PUBLIC : learn, classify
    //

    //add a point to the training set
    learn(vector, label) {
        let obj = { v: vector, lab: label }
        this.training.push(obj)
    }

    // classify a new unknown point
    classify(v) {
        let voteBloc = []
        let maxD = 0

        for(let obj of this.training) {
            let o = { d: this.dist(v, obj.v), vote: obj.lab }
            if (voteBloc.length < this.k) {
                voteBloc.push(o);
                maxD = this.updateMax(maxD, voteBloc)
            } else {
                if (o.d < maxD) {
                    let bool = true
                    let count = 0
                    while (bool) {
                        if (Number(voteBloc[count].d) === maxD) {
                            voteBloc.splice(count, 1, o)
                            maxD = updateMax(maxD, voteBloc)
                            bool = false
                        } else {
                            if (count < voteBloc.length - 1) {
                                count++
                            } else {
                                bool = false
                            }
                        }
                    }
                }
            }
        }
        let votes = []
        for(let el of voteBloc) {
            votes.push(el.vote)
        }
        return this.mode(votes)
    }
}