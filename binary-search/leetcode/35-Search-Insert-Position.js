[1, 3, 5, 6], (target = 5);
var searchInsert = function (nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let mid = Math.floor((start + end) / 2);

    while (start < end) {
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            start = mid + 1;
        } else {
            end = mid;
        }
        mid = Math.floor((start + end) / 2);
    }

    if (nums[mid] < target) {
        return mid + 1;
    } else {
        return mid;
    }
};

console.log(searchInsert([1, 3, 5, 6], 7));

console.log("z".charCodeAt(0));
