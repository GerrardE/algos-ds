/**
 * WRITE A FUNCTION TO MERGE TWO SORTED ARRAYS
 * - Create an empty array, take a look at the smallest values in each input array
 * - While there are still values we haven't looked at
 *      - If the value in the first array is smaller than the value in the second array, push the value 
 *        in the first array into our results and move on to the next value in the first array
 *      - If the value in the first array is larger than the value in the second array, 
 *        push the value in the second array into our results and move on to the next value in 
 *        the second array
 *      - Once we exhaust one array, push in all remaining values from the other array
 * 
 */

const mergeArray = (arr1, arr2) => {
    let store = [];
    let i = 0;
    let j = 0;

    while(i<=arr1.length && j<=arr2.length){}
}

console.log(mergeArray([3,4,1],[50,20,7]));
