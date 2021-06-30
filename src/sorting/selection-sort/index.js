/**
 * SELECTION SORT DOES WELL WHEN WE DON'T KNOW IF THE DATA IS PRESORTED. IT IS GOOD IF WE WANT TO REDUCE NUMBER OF SWAPS
 * 
 * Store the first element as the smallest value you've seen so far.
 * Compare this item to the next item in the array until you find a smaller number
 * If a smaller number is found, designate that smaller number to be the new minimum and continue until the end of the array
 * If the minimum is not the value(index) you initially began with, swap the 2 values
 * Repeat this with the next element until the array is sorted
 */

const selectionSort = (arr) => {
    for(let i = 0; i<arr.length; i++){
        let min = i;
        // let i be the smallest
        
        for(let j = i+1; j<arr.length; j++){
            // if arr[j] < arr[i] set min to j
            if(arr[j]<arr[min]){
                min=j;
            } 
        }   

        
        if(i!==min){
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min]=temp;
        }
    }

    return arr;
}

console.log(selectionSort([1,2,3,8,100,4,5]));
