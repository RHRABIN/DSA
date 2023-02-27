const arr = [10, 20, 25, 30, 40, 45, 50, 60, 90, 99, 100];

/**
 * @note : condition for binary search: Input array must be sorted in ascending order or descending order
 * @step1 : take 3 variable for the first index, last index and mid index
 * @step2 : while loop condition is start <= end
 * @step3 : inside while loop we recalculate the mid index
 * @step4 : check the  target value for three step to get actual result
 */

const binarySearch = (arr, target) => {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((end + start) / 2);

        if (arr[mid] === target) {
            return "Target is found index: " + mid;
        } else if (arr[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return "Targe is not found!";
};

console.log(binarySearch(arr, 909));
