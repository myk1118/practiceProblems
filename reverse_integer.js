// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321

// Example 3:
// Input: x = 120
// Output: 21

// Example 4:
// Input: x = 0
// Output: 0

/**
 * @param {number} x
 * @return {number}
 */

var reverse = function (x) {
    const string = x.toString();
    const array = string.split("");
    const newArray = [];
    for (i = array.length - 1; i >= 0; i--) {
        if (array.length === 1 && array[i] == 0) {
            return 0;
        }
        newArray.push(array[i]);
    }
    let answer = parseInt(newArray.join(""))
    if (x < 0) { answer *= -1 }
    console.log(answer);
    return answer;
};

reverse(-12300);