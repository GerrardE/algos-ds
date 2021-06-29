/**
 * NAIVE SEARCH
 * Define a function that takes a long and a short to search for
 * loop over the longer string
 * loop over the shorter string
 * if the characters don't match, break out if the inner loop
 * if the characters do match, keep going
 * if you complete the inner loop and find a match, incremetn the count of matches
 * Return the count
 * 
 */

const naiveSearch = (long, short) => {
    let count = 0;
    
    for(let i = 0; i<long.length; i++){
        for(let j = 0; j<short.length; j++){
            if(short[j]!==long[i+j]){
                break;
            }
            if(j === short.length-1) {
                count++
            }
        }
    }
    

    return count;
};

console.log(naiveSearch("bobnbnbnbobobo", "bobo"));
