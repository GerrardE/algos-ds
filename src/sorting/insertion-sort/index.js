/**
 * INSERTION SORT
 * Good for nearly sorted data
 * Works for online data(ie inserting data at a moment's notice)
 * 
 * - Start by picking the second element in the array
 * - Compare the second element with the one before it and swap if necessary
 * - Continue to the next element if it is in the correct order, iterate through the sorted portion(ie
 * - the left side) to place the element in the correct place.
 * - Repeat until the array is sorted
 */

const insertionSort = (arr) => {
    // [3,2,3,8,10,4,5]
    //  0,1,2,3, 4,5,6

    // loop through every array element starting with idx=1
    for(let i=1; i<arr.length; i++){// i = 4

        // loop through all the array elements, making sure to end where j < i
        for(let j=0; j<i; j++){
            // if item arr[j] is larger than arr[i], swap them
            if(arr[i]<arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr;
}

console.log(insertionSort([2,1,2000, 9,76,4, 7000]));
