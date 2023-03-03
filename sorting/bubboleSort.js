const arr = [4, 2, 6, 10, 6, 12, 1, 2, 3];

function bubleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let temp;
        for (let j = i; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}
bubleSort(arr);
console.log(arr);
