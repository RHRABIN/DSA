var missingNumber = function (nums) {
    //here we take 2 variables two get sum for comparison
    let totalSum = 0;
    for (let i = 0; i <= nums.length; i++) {
        totalSum = totalSum + i;
    }

    let numsTotalSum = 0;
    for (let i = 0; i < nums.length; i++) {
        numsTotalSum = numsTotalSum + nums[i];
    }
    return totalSum - numsTotalSum;
};

console.log(missingNumber([0, 1, 2, 4, 5]));
