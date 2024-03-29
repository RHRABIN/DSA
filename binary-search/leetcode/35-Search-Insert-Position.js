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



// 1552. Magnetic Force Between Two Balls
// 1870. Minimum Speed to Arrive on Time
// 875. Koko Eating Bananas
// 1011. Capacity To Ship Packages Within D Days
// 1283. Find the Smallest Divisor Given a Threshold
// 1482. Minimum Number of Days to Make m Bouquets
// 2064. Minimized Maximum of Products Distributed to Any Store
// 1231. Divide Chocolate
// 774. Minimize Max Distance to Gas Station
// 410. Split Array Largest Sum
// 1539. Kth Missing Positive Number
// 162. Find Peak Element
// 441. Arranging Coins
// 378. Kth Smallest Element in a Sorted Matrix
// 287. Find the Duplicate Number
// 209. Minimum Size Subarray Sum
// 1760. Minimum Limit of Balls in a Bag
// 1631. Path With Minimum Effort
// 2070. Most Beautiful Item for Each Query
// 475. Heaters
// 1818. Minimum Absolute Sum Difference
// 1838. Frequency of the Most Frequent Element
// 778. Swim in Rising Water
// 668. Kth Smallest Number in Multiplication Table
// 878. Nth Magical Number
// 719. Find K-th Smallest Pair Distance
// 2141. Maximum Running Time of N Computers
// 1287. Element Appearing More Than 25% In Sorted Array
// 34. Find First and Last Position of Element in Sorted Array
// 774. Minimize Max Distance to Gas Station
// 1150. Check If a Number Is Majority Element in a Sorted Array
// 1482. Minimum Number of Days to Make m Bouquets
// 981. Time Based Key-Value Store
// 1201. Ugly Number III
// 704. Binary Search
// 69. Sqrt(x)
// 35. Search Insert Position
// 278. First Bad Version
// 2187. Minimum Time to Complete Trips