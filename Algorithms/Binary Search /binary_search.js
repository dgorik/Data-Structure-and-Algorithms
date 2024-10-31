function binary_search(arr, target) { //IMPORRTANT - the array must be sorted!
    let left = 0; //we intialize the left pointer to the first elemment of the array

    let right = arr.length - 1 //we itialize the right pointer to the last pointer of the array

    while (left <= right) { //when left becomes greater than right, there are no more elements to check. As long as left is less or equal than right, there is still a valid portion of the array to search 

        let middle = Math.floor((left + right) / 2) //this line calculates the middle element of an array

        if (arr[middle] === target) { //if the middle element happens to be the target, we return the middle as the index of the target
            return middle
        }
        else if (arr[middle] > target) { //if the middle elemtent is greater than the target, then the target must be to the left of the middle so we shift the upper bound to middle - 1
            right = middle - 1
        }

        else if (arr[middle] < target) {//if the middle elemtent is less than the target, then the target must be to the right of the middle so we shift the lower bound to middle - 1
            left = middle + 1
        }
    }

    return -1 //we return -1, if we don't find the target
}

console.log(binary_search([1, 3, 5, 7, 9, 11, 13], 9));