const abc = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                console.log("Enter a number not match", arr1[i]);
            }
        }
    }
};

abc([1, 2, 3, 4, 5], [1, 2, 3, 4, 6]);
