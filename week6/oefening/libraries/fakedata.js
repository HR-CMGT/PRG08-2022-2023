//
// array met random data objecten: {horsepower:4, mpg:3}
//
export function createFakedata() {
    let fake = []
    for (let i = 10; i < 400; i += 10) {
        const randomAmount = Math.floor(Math.random() * 16 + 3);
        for (let j = 0; j < randomAmount; j += 1) {
            fake.push({ horsepower: i, mpg: 100 - (i / 4) + Math.floor(Math.random() * 30 - 10) })
        }
    }
    return fake
}