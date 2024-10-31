function maxSubarraySum(arr, num) {
    let maxSum = 0;

    let tempSum = 0;

    if (arr.length < num) return null

    for (let i = 0; i < num; i++) {
        tempSum += arr[i]
    } //we calculate the sum of first n elements of the array and set it to maxSum

    maxSum = tempSum //we set the temp maxSum to be equal the tempSum 

    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i] //in order to calculate the sum of next n elements, we need to substract the first element from the previous sum and add the most right number that we get by shifting n elements to the right 
        maxSum = Math.max(tempSum, maxSum)
    }

    console.log(maxSum)

    return maxSum

}

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)