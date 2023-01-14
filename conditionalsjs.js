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
    multiply: function (x, y) {
        return x * y;
    },
    divide: function (x, y) {
        return x / y;
    },
    square: function (x) {
        return x * x;
    },
    add: function (x, y) {
        return x + y;
    },
    subtract: function (x, y) {
        return x - y;
    }
}

myMath.add(2, 100);

const jobs = ["Google", "Netflix", "Apple"]

jobs.forEach(function (i) {
    console.log(i)
})

const cities = ["New York", "LA", "The Bay", "London"]

let bigCities = cities.map(function (i) {
    return i.toUpperCase()
})

const cityStates = [{
    city: "New York",
    state: "New York"
}, {
    city: "LA",
    state: "California"
}, {
    city: "The Bay",
    state: "California"
}]

const state = cityStates.map(function (area) {
    return area.state;
})

setTimeout(function (i) {
    console.log("Hello!")
}, 3000)

const id = setInterval(() => {
    console.log(Math.random() * 10 + 1)
}, 3000)

clearInterval(id)

const prices = [9.99, 15.99, 100, 49.99, 1.50];

prices.reduce((total, price) => {
    return total + price
})

//OR

prices.reduce((total, price) => total + price)

//Checks for highest price in an array using reduce

let highPrice = prices.reduce((max, price) => {
    if (price > max) {
        return price;
    } else {
        return max;
    }
})

//Checks for lowest price in an array using reduce

let lowestPrice = prices.reduce((min, price) => {
    if (price < min) {
        return price;
    } else {
        return min;
    }
})

//Testing Spread with Arrays

const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];

const nums3 = [...nums1, ...nums2];


//Testing Spread with Objects (aka Dictionaries)

const dataFromForm = {
    email: "brittbaker@aew.com",
    password: "dmd123",
    username: "brittbakerdmd"
}

let newUser = { ...dataFromForm, id: 12345, isAdmin: true }

//Testing Spread with Function Calls

Math.max(...nums3)

Math.min(...nums3)

const allTests = document.getElementById("test");

const allParagraphs = document.getElementsByTagName("p");

const squareImages = document.getElementsByClassName('square');

//Get Element by Type

const getByType = document.querySelector('[title="sectionheading"]');

