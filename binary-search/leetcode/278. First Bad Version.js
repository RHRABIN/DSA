var solution = function (n) {
    let start = 1;
    let end = n;
    let result = n;
    let mid;

    while (start <= end) {
        mid = Math.floor(start + (end - start) / 2);
        if (isBadVersion(mid) === true) {
            result = mid;
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return result;
};
