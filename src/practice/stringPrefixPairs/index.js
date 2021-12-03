function stringPrefixPairs(strings) {
    let num = 0;
    let strObj = {};
    
    for(let i = 0; i<strings.length; i++){
        strObj[i] = strings[i]
    }
    for(let j in strObj){
        // if((j !== i)){
            if(strings[j].startsWith(strings[i])){
                num++
            }
        // }
    }
    
    return num;
}

console.log(stringPrefixPairs(["back", "backdoor", "gammon", "backgammon", "comeback", "come", "door"]))
console.log(stringPrefixPairs(["abc", "a", "a", "b", "ab", "ac"]))
