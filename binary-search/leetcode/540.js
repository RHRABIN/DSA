var singleNonDuplicate = function (nums) {
    let start = 0;
    let end = nums.length - 1;
    let mid;

    // for(let i = 0; i<nums.length; i++){
    //     if(nums[i+1] != nums[i] && nums[i-1] != nums[i]){
    //         return nums[i]
    //     }
    // }
    while (start <= end) {
        mid = Math.floor(start + (end - start) / 2);

        if (nums[mid] != nums[mid + 1] && nums[mid] != nums[mid - 1]) {
            return nums[mid];
        } else if (nums[mid] < nums[mid + 1]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return nums[mid];
};
console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]));
