function sumZero(arr) {
    let left = 0; //we set the left pointer to equal to the first element in the array
    let right = arr.length - 1; //we set the right pointer to equal to the last element of the array
    while (left < right) {
        let sum = arr[left] + arr[right]; //we check the sum of array of left and array of right
        if (sum === 0) {
            return [arr[left], arr[right]]; //if it's zero, we return an array with left and right element
        } else if (sum > 0) { //if sum is greater than zero, we move a right pointer one element to the left
            right--;
        } else {
            left++; //if sum is less than zero, we move the left pointer one element to the right to a smaller number in an array
        }
    }
}

sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10])