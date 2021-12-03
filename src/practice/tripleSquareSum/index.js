function tripleSquareSum(a) {
    let triples = {};
    let res = [];
    
    // for(let i = 0; i<a.length; i++){
    //     triples[i] = Math.pow(a[i], 2);    
    // }
    
    for(let i = 0; i<a.length; i++){
        if(Math.pow(a[i], 2) === Math.pow(a[i+1], 2) + Math.pow(a[i+1], 2)){
            res.push(a[i])
        } else if (Math.pow(a[i+1], 2) === Math.pow(a[i], 2) + Math.pow(a[i+1], 2)) {
            res.push(a[i+1])
        } else if (Math.pow(a[i+2], 2) === Math.pow(a[i], 2) + Math.pow(a[i+1], 2)){
             res.push(a[i+2])
        }
    }
    
    console.log(res)
    return res;
}
