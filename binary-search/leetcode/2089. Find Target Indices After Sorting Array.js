// Input: nums = [1,2,5,2,3], target = 2
// Output: [1,2]

function targetIndices(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let minIndex = i;
        for (let j = i; j < nums.length; j++) {
            if (nums[j] < nums[minIndex]) {
                minIndex = j;
            }
        }

        let temp = nums[i];
        nums[i] = nums[minIndex];
        nums[minIndex] = temp;
    }
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            result.push(i);
        }
    }

    return result;
}
console.log(targetIndices([1, 2, 5, 2, 3], 3));
