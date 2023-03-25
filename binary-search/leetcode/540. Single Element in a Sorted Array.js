var singleNonDuplicate = function (nums) {
    let start = 0;
    let end = nums.length - 1;
    let mid;

    // for(let i = 0; i<nums.length; i++){
    //     if(nums[i+1] != nums[i] && nums[i-1] != nums[i]){
    //         return nums[i]
    //     }
    // }
    if (nums[0] != nums[1]) {
        return nums[0];
    }
    if (nums[nums.length - 1] != nums[nums.length - 2]) {
        return nums[nums.length - 1];
    }

    while (start <= end) {
        mid = Math.floor(start + (end - start) / 2);

        if (nums[mid] != nums[mid + 1] && nums[mid] != nums[mid - 1]) {
            return nums[mid];
        } else if (
            // here we check if the mid is even then compare the next element cause we sure that the array is sorted and number stayed pair to pair , so mid index when even then check with next element, cause element start with event index and odd index are pair if it's false the else block execute and element must be right portion or element on left portion

            // second condition is if mid is odd then compare the previous element, cause we sure that the array is sorted and odd mid -1 sure match mid index element, if not match then else block execute and element must be the left portion or element on left portion
            (mid % 2 == 0 && nums[mid] == nums[mid + 1]) ||
            (mid % 2 == 1 && nums[mid] == nums[mid - 1])
        ) {
            console.log("Enter", mid);
            start = mid + 1;
        } else {
            console.log("Enter", mid);
            end = mid - 1;
        }
    }
    return nums[mid];
};
console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]));
