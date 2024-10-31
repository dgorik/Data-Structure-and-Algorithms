function merge(arr1, arr2) { //this function merges two arrays into one
    let results = []; //we define an empty array that we will return of a merged result of two input arrays
    let i = 0; //we set a pointer for one array to 0
    let j = 0; //we set a pointer for another array to 0
    while (i < arr1.length && j < arr2.length) { //as long as pointers for both arrays and less than the lengths of the corresponding arrays
        if (arr2[j] > arr1[i]) { //if the value of the first array at index i is less that the value of the second array at index j, we push the element of the first array onto results
            results.push(arr1[i]);
            i++; //we increament i in order to compare arr[j] to a different arr[i] index
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while (i < arr1.length) { //if we exhausted sorting the second array, we push all remaining elements of the first array onto results
        results.push(arr1[i])
        i++;
    }
    while (j < arr2.length) { //if we exhausted sorting the first array, we push all remaining element of the second array onto results
        results.push(arr2[j])
        j++;
    }

    console.log(`I'm the result ${results}`)

    return results;

}

function mergeSort(arr) { //this function splits the input array into two array at midpoint
    if (arr.length <= 1) return arr

    let midpoint = Math.floor(arr.length / 2)

    let left = mergeSort(arr.slice(0, midpoint))

    let right = mergeSort(arr.slice(midpoint))

    console.log(`i'm left ${left}`)

    console.log(`i'm right ${right}`)

    return merge(left, right)
}

console.log(mergeSort([10, 24, 79, 45]))