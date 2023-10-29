function argMax(arr) {
    let maxIndex = 0;
    let maxValue = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].greaterThan(maxValue)) {
            maxIndex = i;
            maxValue = arr[i];
        }
    }

    return maxIndex;
}
