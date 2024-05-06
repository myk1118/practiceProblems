// FizzBuzz Problem:

// var str = "", x, y, a;
// for (a = 1; a <= 100; a++) {
//     x = a % 3 == 0;
//     y = a % 5 == 0;
//     if (x) {
//         str += "fizz"
//     }
//     if (y) {
//         str += "buzz"
//     }
//     if (!(x || y)) {
//         str += a;
//     }
//     str += "\n"
// }
// console.log(str);




// Q0: Write a function that takes a string as input and decides if the string is a palindrome.

// Example 1:
// Input: “abcba”
// Output: true

// Example 2:
// Input: “2 3412 3abcba—11”
// Output: true

// Example 3;
// Input: “a21b1340-=c021..’ Ba”
// Output: true

// Example 4;
// Input: “hello”
// output: false

const isPalindrome = (string) => {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const lettersArray = letters.split("");
    const cleaned = string.split("").reduce((acc, val) => {
        console.log("acc: ", acc);
        console.log("val: ", val);
        if (lettersArray.indexOf(val) !== -1) {
            acc = acc + val;
            return acc;
        } else {
            // continue;
        }
    }, "");
    console.log("Cleaned: ", cleaned);
    // const cleaned = string.replace(/(\W|\d)/ig, "").toLowerCase();
    const reversed = cleaned.split("").reverse().join("");
    if (cleaned === reversed) {
        return true
    } else {
        return false
    }
}

// console.log(isPalindrome("abcba"));
// console.log(isPalindrome("abcba") === true);
// console.log(isPalindrome("2 3412 3abcba—11") === true);
// console.log(isPalindrome("a21b1340-=c021..’ Ba") === true);
// console.log(isPalindrome("hello") === false);
