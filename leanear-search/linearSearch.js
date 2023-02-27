const array = [21, 32, 4, 54, 44, 23, 12, 78, 90, 78];

// task one:  find here any target value that is exist in the array or not exist

function findTargetValue(array, target) {
    for (let i = 0; i < array.length; i++) {
        // here we get a single value from the array by index number[i]
        if (array[i] === target) {
            // if enter the condition we found the target value and return
            return `the target value found index: ${array[i]} `;
        }
    }
    // if target is not exist then return from out of the loop
    return "The target value not found in the array";
}

console.log(findTargetValue(array, 44));

// task two: find the largest value in the array

function largestValue(array) {
    // first we take a variable for largest value and compare it to the array of each element by for loop

    let maxValue = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maxValue) {
            maxValue = array[i];
        }
    }
    return maxValue;
}

console.log(largestValue(array));

// task two: find the smallest value in the array

function smallestValue(array) {
    // first we take a variable for largest value and compare it to the array of each element by for loop

    let smallValue = array[0];

    for (let i = 0; i < array.length; i++) {
        if (array[i] < smallValue) {
            smallValue = array[i];
        }
    }
    return smallValue;
}

console.log(smallestValue(array));
