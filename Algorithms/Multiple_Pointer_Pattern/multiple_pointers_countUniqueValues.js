function countUniqueValues(arr) {

    let i = 0

    for (let j = 1; j < arr.length; j++) {
        if (arr[i] != arr[j]) {
            i++
            arr[i] = arr[j];
        }

    }

    console.log(i + 1)

    return i + 1

}

return countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])