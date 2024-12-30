function pivot(arr, start = 0, end = arr.length + 1) { //this function is responsible for finding the final resting place of the pivot element

    function swap(arr, i, j) {
        var temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    var pivot = arr[start]

    var swapIdx = start //swapIdx will eventually tell us where to insert the pivot element so that all elements to the left of it are smaller than pivot and all elements to the right of it are bigger than pivot

    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIdx++ //this tell us that there is one (one more) element to the right of pivot that is smaller than pivot 
            swap(arr, swapIdx, i) //here we are moving elements that are smaller than a pivot element into into the "smaller-than-pivot" section to the left
            console.log(`This is ${arr}`)
        }
    }

    swap(arr, start, swapIdx)
    return swapIdx
}

function quickSort(arr, left = 0, right = arr.length - 1) {

    if (left < right) { //if left and right are the same, we are looking at a one element array that is already sorted, so we quit the recursion
        let pivotIndex = pivot(arr, left, right) //here we are calling a pivot method on array to find the position of a pivot element 

        //left
        quickSort(arr, left, pivotIndex - 1) //we then recursievly perform quicksort at the left of pivotIndex

        //right
        quickSort(arr, pivotIndex + 1, right) //and at the right of pivot index

    }
    return arr
}

console.log(quickSort([1, 4, 5, 1, 34, 56, 7, 9]))

//the item is considered to be in a sorted position if it's greater than all elements at its left and smaller than all elements at its right