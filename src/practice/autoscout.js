/*
There are N cars numbered from 0 to N-1. each of them has some of the M possible optional features, numbered from 0 to M-1, for example: voice control, keyless entry, sunroof, blind spot detection, etc. the features of a car are described as a string of M characters, where the K-th character being '1' denotes that the car has th k-th possible feature and '0' denotes that it does not.

Two cars are similar if their descriptions differ by at most one feature. For example: "01101" and "01001" are similar because they differ only by feature number 2. On the other hand, "01101" and "11110" are not similar because they differ in feature numbers 0, 3 and 4.

Each car from the following set is similar to "011": "011", "111", "001", "010". Notice
that cars "011" and "011" are similar as their set of features is exactly the same.

We want to suggest to potential customers alternative cars to the one under consideration. In order to do that, for each individual car, calculate the number of other cars to which it is similar(differ by at most one feature).

Write a function: 
    function solution(cars);

    that, given an array cars consisting of N strings, returns an array of integers denoting, for every car in cars, the number of other similar cars.

Examples:

1. Given cars = ["100", "110", "010", "011", "100"], answer should be [2,3,2,1,2]. Car number 0 ("100") is similar to car number 1("110"), and also to car number 4("100").

2. Giver cars = ["0011","0111","0111","0110","0000"], the answer should be [2,3,3,2,0]. Notice that car number 4("0000") is not similar to any other car. All of the other cars have at least 2 features, while car number 4 has none.

Write an efficient algorithm for the following assumptions:
- N is an integer within the range [1..10,000]
- M is an integer within the range [1..15];
- all strings in the array cars are of the length M and consist only of the characters "0" and "1"
*/

const isSimilar = (string, pattern) => {
    let score = 0;

    if(string.length !== pattern.length) return false;
    
    if(!/^[0-1]{1,15}$/.test(string) || !/^[0-1]{1,15}$/.test(pattern)) return false;

    if(string === pattern) return true;

    for(let i=0; i<string.length; i++){
        if(string[i] === pattern[i]) score++;
    }  

    return (score >= string.length-1);
}

const naiveSolution = (cars) => {
    const matches = [];

    // loop through the array of cars and get a car
    for(let i=0; i<cars.length; i++){
        let score = 0;
        //with that car, loop through the rest of the cars
        for(let j=0; j<cars.length; j++){
            if(i !== j){
                isSimilar(cars[i], cars[j]) ? score++ : score;
            }
        }

        matches.push(score);
        score = 0;
    }

    return matches;
}


console.log(naiveSolution(["100", "110", "010", "011", "100"]));
console.log(naiveSolution(["0011","0111","0111","0110","0000"]));
