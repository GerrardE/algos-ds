let s = Date.now();
let start = new Date(s);

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 const twoSum = (nums, target) => {
    for(let i = 0; i<nums.length; i++){
        for(let j = 0; j<nums.length; j++){
            if(i !== j && (nums[i] + nums[j] === target)) {
                return [i, j]
            }
        }
    }
};

console.log(twoSum([2,7,11,15], 9))
let e = Date.now();
let end = new Date(e);
console.log(`time to run = ${end.getMilliseconds() - start.getMilliseconds()} milliseconds`)
