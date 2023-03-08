var findDuplicate = function(nums) {
    for(let i = 0; i< nums.length ; i++){
        let repeatedNumber = nums[i];
        for(let j = i+1; j<nums.length; j++){
            if(repeatedNumber === nums[j]){
                return repeatedNumber
            }
        }
    }
};