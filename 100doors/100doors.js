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