const nums = [5, 20, 66, 1314];
// Output: 3

var maximumCount = function (nums) {
    let pos = 0;
    let neg = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            pos++;
        } else if (nums[i] < 0) {
            neg++;
        }
    }

    return Math.max(pos, neg);
};

console.log(maximumCount(nums));
