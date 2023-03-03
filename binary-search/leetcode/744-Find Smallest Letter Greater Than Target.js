var nextGreatestLetter = function (letters, target) {
    let start = 0;
    let end = letters.length - 1;
    let mid = Math.floor((start + end) / 2);

    while (start < end) {
        // mid = Math.floor((start + end) / 2);
        if (letters[mid] < target) {
            // if mid < target
            console.log(mid);
            start = mid + 1;
        } else {
            // if mid > target
            end = mid;
        }

        mid = Math.floor((start + end) / 2);
        console.log(mid);
    }
    if (letters[mid] === target) {
        for (let i = mid; i < letters.length; i++) {
            if (letters[i] > letters[mid]) {
                return letters[i];
            }
        }
        return letters[0];
    } else if (letters[mid] < target) {
        console.log("Return 1");
        return letters[0];
    } else {
        console.log("Return 2 ");
        return letters[mid];
    }
};

console.log(nextGreatestLetter(["x", "x", "y"], "z"));
