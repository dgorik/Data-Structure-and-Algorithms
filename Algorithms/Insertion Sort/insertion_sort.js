function insertion_sort(arr) {
    for (var i = 1; i < arr.length; i++) {
        var currentVal = arr[i]
        for (var j = i - 1; j >= 0; j--) {
            if (currentVal > arr[j]) break //if the current value is greater than the element in the sorted portion of the array, we are exiting the loop as the left side is sorted
            else {
                arr[j + 1] = arr[j] //If currentVal is not greater than arr[j], it means we need to move arr[j] one position to the right to make space for currentVal.
            }
            console.log(arr)
        }

        arr[j + 1] = currentVal
    }

    return arr
}

console.log(insertion_sort([2, 3, 4, 9, 1, 3, 5]))