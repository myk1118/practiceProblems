// Project Euler: Problem 1: Multiples of 3 and 5

// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below the provided parameter value number.

function multiplesOf3and5(number) {
    // Good luck!
    var array = [];
    for (var i = 1; i < number.valueOf(); i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            array.push(i);
        }
    }
    var answer = array.reduce((a, b) => a + b, 0);
    console.log(answer);
    return answer;
}

multiplesOf3and5(1000);
