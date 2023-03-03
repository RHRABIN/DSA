let arr = [0, 10, 15, 20, 1]; //1=10
let arr2 = [0, 1, 0]; // 1=1

var peakIndexInMountainArray = function (arr) {
    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor((start + end) / 2);

    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (arr[mid - 1] < arr[mid] && arr[mid] > arr[mid + 1]) {
            return mid;
        } else if (arr[mid] < arr[mid + 1]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
};

console.log(peakIndexInMountainArray(arr));
