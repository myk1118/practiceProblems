// There is a new mobile game that starts with consecutively numbered clouds.
// Some of the clouds are thunderheads and others are cumulus.
// The player can jump on any cumulus cloud having a number that is equal to
// the number of the current cloud plus 1 or 2.
// The player must avoid the thunderheads.
// Determine the minimum number of jumps it will take
// to jump from the starting postion to the last cloud.
// It is always possible to win the game.

// For each game, you will get an array of clouds numbered 0
// if they are safe or 1 if they must be avoided.

// Example:
// c = [0, 1, 0, 0, 0, 1, 0]
// Index the array from 0...6.
// The number on each cloud is its index in the list
// so the player must avoid the clouds at indices 1 and 5.
// They could follow these two paths: 0 > 2 > 4 > 6 or 0 > 2 > 3 > 4 > 6.
// The first path takes 3 jumps while the second takes 4.
// Return 3.

// Sample Input:
// 7
// 0 0 1 0 0 1 0

// Sample Output:
// 4

function jumpingOnClouds(c) {
    let count = 0;
    for (let i = 0; i < c.length - 1; i++) {
        if (c[i + 1] == 1) {
            count++;
            i++;
        } else if (c[i + 1] == 0 && c[i + 2] == 0) {
            count++;
            i++;
        } else if (c[i + 1] == 0 && c[i + 2] == 1) {
            count++;
        }
        else if (c[c.length - 1] == 0) {
            count++;
        }
    }

    console.log("Count: ", count);
    return count;
}

jumpingOnClouds([0, 0, 0, 1, 0, 0]);