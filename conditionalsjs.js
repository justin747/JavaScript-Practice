// let caliNBA = ["Clippers", "Warriors", "Kings"]

// let caliNFL = ["49ers", "Chargers", "Rams"]

// console.log(caliNBA)

// let caliSports = caliNBA.concat(caliNFL)

// console.log(caliSports)

// console.log(caliNBA)

// console.log(caliNFL)

// caliNBA.includes("Kings")


// const footballPlayer = {
//     firstName: String,
//     lastName: String,
//     jerseyNo: Number,
//     position: String
// };

// console.log(footballPlayer.firstName)

// const me = footballPlayer.fir

// for (let i = 0; i <= 50; i += 10) {
//     console.log(i)
// }

// caliSports = [["Rams", "Chargers", "49ers"],
// ["Lakers", "Kings", "Warriors"],
// ["Sharks", "Ducks"]
// ]

// for (let i = 0; i < caliSports.length; i++) {
//     const row = caliSports[i];
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j])
//     }
// }

// //For...Of for Arrayes
// for (let row of caliSports) {
//     for (let team of row) {
//         console.log(team)
//     }
// }

// const testScores = {
//     keenan: 80,
//     damon: 67,
//     kim: 89,
//     shawn: 91,
//     marlon: 72,
//     dwayne: 77,
//     nadia: 83,
//     elvira: 97,
//     deidre: 82,
//     vonnie: 70
// }

// for (let student in testScores) {
//     console.log(`${student} scored ${testScores[student]}`)
// }

// console.log(Object.keys(testScores))
// console.log(Object.values(testScores))
// console.log(Object.entries(testScores))


// //For...In for Objects aka Dictionaries
// let total = 0;
// let scores = Object.values(testScores);

// for (let score of scores) {
//     total += score
// }

// console.log(total/scores.length)

// function betweenFunc(min, max) {
//     return function (num) {
//         return num >= min && num <=max;
//     }
// }

const myMath = {
    multiply: function(x, y) {
        return x * y;
    },
    divide: function(x, y) {
        return x / y;
    },
    square: function(x) {
        return x * x;
    },
    add: function(x, y) {
        return x + y;
    },
    subtract: function(x, y) {
        return x - y;
    }
}

myMath.add(2, 100);

const jobs = ["Google", "Netflix", "Apple"]

jobs.forEach(function (i){
    console.log(i)
})

const cities = ["New York", "LA", "The Bay", "London"]

let bigCities = cities.map(function (i) {
    return i.toUpperCase()
})