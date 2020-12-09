// Rosetta Code: 100 doors

// There are 100 doors in a row that are all initially closed.
// You make 100 passes by the doors.
// The first time through, visit every door and 'toggle' the door
// (if the door is closed, open it; if it is open, close it).
// The second time, only visit every 2nd door (i.e., door #2, #4, #6, ...) and toggle it.
// The third time, visit every 3rd door (i.e., door #3, #6, #9, ...), etc., until you only visit the 100th door.

// Implement a function to determine the state of the doors after the last pass.
// Return the final result in an array, with only the door number included in the array if it is open.

function getFinalOpenedDoors(numDoors) {
    // Good luck!
    // debugger;
    var doorNumbers = new Array(numDoors);
    var answer = [];
    for (var i = 0; i < doorNumbers.length; i++) {
        doorNumbers[i] = i + 1;
        var doorNumber = doorNumbers[i];
        // console.log(doorNumber);
        var factors = [];
        for (var j = 1; j < doorNumber.valueOf() + 1; j++) {
            if (doorNumber % j === 0) {
                factors.push(j);
            }
        }
        // console.log(factors);
        if (factors.length % 2 === 1) {
            answer.push(doorNumber);
        }
    }
    console.log("Answer: ", answer);
}

getFinalOpenedDoors(100);