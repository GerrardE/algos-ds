let s = Date.now();
let start = new Date(s);

function firstDuplicate(a) {
    let idx;

    let idxObj = {};

    for(let i = 0; i<a.length; i++){
        if(!idxObj[a[i]]){
            idxObj[a[i]] = `${i}`;
        }
    }
    
    for(let j = 0; j<a.length; j++){
        if(idxObj[a[j]] && idxObj[a[j]] !== `${j}` && a[idxObj[a[j]]] === a[j] && (!idx || j<idx)){
            idx = idxObj[a[j]];
        }
    }

    if (!idx) return -1;
    
    return a[idx];
}

console.log(firstDuplicate([1, 1, 2, 2, 1]))

let e = Date.now();
let end = new Date(e);
console.log(`time to run = ${end.getMilliseconds() - start.getMilliseconds()} milliseconds`)

console.log(firstDuplicate([8, 4, 6, 2, 6, 4, 7, 9, 5, 8]))
e = Date.now();
end = new Date(e);
console.log(`time to run = ${end.getMilliseconds() - start.getMilliseconds()} milliseconds`)
