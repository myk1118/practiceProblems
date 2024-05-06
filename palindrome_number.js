// Determine whether an integer is a palindrome.
// An integer is a palindrome when it reads the same backward as forward.

// Follow up: Could you solve it without converting the integer to a string?

// Example 1:
// Input: x = 121
// Output: true

// Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121.
// From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Example 4:
// Input: x = -101
// Output: false

/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
    const digits = x.toString().split("");
    const reversed = [];
    for (i = digits.length - 1; i >= 0; i--) {
        reversed.push(digits[i])
    }
    const joined = reversed.join("");
    const toInt = parseInt(joined);
    console.log("x: ", x);
    console.log("reversed: ", toInt);
    if (x === toInt)
        return true
    else return false
};

isPalindrome(121);