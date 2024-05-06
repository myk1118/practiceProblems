// There is a large pile of socks that must be paired by color.
// Given an array of integers representing the color of each sock,
// determine how many pairs of socks with matching colors there are.
// Example:
// n = 7
// ar = [1, 2, 1, 2, 1, 3, 2]
// There is one pair of color 1 and one of color 2.
// There are three odd socks left, one of each color.
// The number of pairs is 2.

// input:
// n = 9
// ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
// output: 3

// input:
// n = 10
// ar = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]
// output: 4

function sockMerchant(n, ar) {
    let match = 0;
    for (let i = 0; i < ar.length; i++) {
        for (let j = i + 1; j < ar.length;)
            if (ar[i] == ar[j]) {
                match++;
                ar.splice(j, 1);
                ar.splice(i, 1);
                j = i + 1;
            } else {
                j++
            }
    }
    console.log(match);
    return (match);
}

sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]);