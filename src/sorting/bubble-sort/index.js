/*
- BUBBLE SORT IS GOOD FOR ALMOST SORTED DATA
    - Start looping from a variable called i from the end of the array towards the begining,
    - Start an inner loop with a variable called j from the begining until i-1
    - If arr[j] is greater than arr[j+1], swap those two values!
    - Return the sorted array
*/

const bubbleSort = (arr) => {
    for(let i=arr.length; i>=0; i--){
        let noSwaps = true;
        for(let j = 0; j < (i-1); j++){
            if(arr[j] > arr[j+1]){
                let item = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = item;
                noSwaps = false;
            }
        }

        if(noSwaps) break;
    }

    return arr;
}

console.log(bubbleSort([23, 12, 78, 100, 1, 2, 3, 4, 5, 6, 7]));
