const k = 3
const machine = new kNear(k)

// training - todo: meerdere voorbeelden voor cats en dogs nodig!
machine.learn([11, 5, 10], 'cat')

// predicting
let prediction = machine.classify([7, 7, 7])
console.log(`I think it's a ${prediction}`)