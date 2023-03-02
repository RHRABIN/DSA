var search = function (nums, target) {
    let start = 0;
    let end = nums.length;
    let mid = Math.floor((start + end) / 2);

    while (start <= end) {
        mid = Math.floor((start + end) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
};
