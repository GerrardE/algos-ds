let s = Date.now();
let start = new Date(s);

function firstNotRepeatingCharacter(s) {
    let chars = {};

    for(let i = 0; i<s.length; i++) {
        chars[s[i]] = (chars[s[i]] || 0) + 1 
    }

    for(let j in chars){
        if(chars[j] === 1){
            return j;
        }
    }
    
    return '_'
}

console.log(firstNotRepeatingCharacter("abacabad"))
let e = Date.now();
let end = new Date(e);
console.log(`time to run = ${end.getMilliseconds() - start.getMilliseconds()} milliseconds`)

console.log(firstNotRepeatingCharacter("bcb"))
e = Date.now();
end = new Date(e);
console.log(`time to run = ${end.getMilliseconds() - start.getMilliseconds()} milliseconds`)
