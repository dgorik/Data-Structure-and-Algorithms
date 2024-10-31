function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1 = {} //counts the frequency of individual elements in the array1
    let frequencyCounter2 = {} //counts the frequency of individual elements in the array1
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1 //we are counting the number of times each value appears in the array
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1 //we are counting the number of times each value appears in the array
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) { //we loop over the first object, we are looking at each key and checking if the squared value of the key exists in the second object
            return false
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) { //we are checking if the frequency of the values matches, if it's not, we return false
            return false
        }
    }
    return true
}

same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11])