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

// console.log(binarySearch(arr, 909));
const array2 = [50, 45, 40, 35, 30, 5, 10, 15, 20];

const descendingSearch = (array, target) => {
    let start = 0;
    let end = array.length - 1;
    let mid = Math.floor((end + start) / 2);
    let isAscending = array[0] < array[array.length - 1];

    while (start <= end) {
        mid = Math.floor((end + start) / 2);
        isAscending = array[start] < array[end];

        if (array[mid] === target) {
            return "Target is found index: " + mid;
        } else if (isAscending) {
            // if array in ascending order then this code will execute
            if (array[mid] < target) {
                // if target greater than array[mid] then this code will execute
                start = mid + 1;
            } else {
                // if target less than array[mid] then this code will execute
                end = mid - 1;
            }
        } else {
            // if array in descending order then this code will execute
            if (array[mid] < target) {
                // if target value is greater than array[mid] then this code will execute
                end = mid - 1;
            } else {
                // if target value is less than array[mid] then this code will execute
                start = mid + 1;
            }
        }
    }

    return "Targe is not found!";
};
console.log(descendingSearch(array2, 20));
