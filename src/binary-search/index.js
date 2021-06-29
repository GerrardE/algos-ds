/**
 * Write a function that accepts a sorted array and a value
 * Create a left pointer at the start of the array and a right pointer at the end of the array
 * While the left pointer comes before the right pointer:
 * - Create a pointer in the middle
 * - If you find the value you want, return the index
 * - If the value is too small, move the left pointer up
 * - If the value is too large, move the right pointer down
 * If you never find the value, return -1
 */

 const binarySearch = (sortedArray, value) => {
    let left = 0;
    let right = sortedArray.length - 1;
    let middle = Math.floor((left + right)/2);
    
    while((value !== sortedArray[middle]) && left <= right){
        if(value < sortedArray[middle]) {
          right = middle - 1
        } else {
          left = middle + 1
        };

        middle = Math.floor((left + right)/2);
    }

    return (sortedArray[middle] === value) ? middle : -1;
}


console.log(binarySearch([1,2,3,4,5,6,7,8,9], 2));
