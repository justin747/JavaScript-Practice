//Array Big O Operations

// Push = O(1)
// Pop = O(1)

// Shift = O(N)
// Unshift = O(N)

// Concat = O(N)
// Slice = O(N)
// Splice = O(N)

// Sort = O(N * log N)

// forEach, Map, Filter, Reduce, etc = O(N)

// DS&A Strategies

// 1. Understand the Problem
// 2. Explore Concrete Examples
// 3. Break It Down
// 4. Solve and Simplify
// 5. Look Back & Refactor

//Write a function that takes a string and returns an object with the letters and the number of their occurrences.

function charCount(str) {
    var result = {};

    for(var i = 0; i < str.length; i++) {
        var char = str[i];
        if (result[char] > 0) {
            result[char]++;
        } else {
            result[char] = 1;
        };
    }

    return result;
}
