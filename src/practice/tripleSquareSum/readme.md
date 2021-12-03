Given an array of non-negative integers a, your task is to test all the consecutive triples of elements for being a Pythagorean triple. In other words, for each triple of consecutive elements (a[i], a[i + 1], a[i + 2]) check whether the sum of squares of two of them equals the square of the remaining one, i.e. whether any of the following equations is true:

a[i]2 + a[i + 1]2 = a[i + 2]2;
a[i]2 + a[i + 2]2 = a[i + 1]2;
a[i + 1]2 + a[i + 2]2 = a[i]2.
Return an array of length a.length - 2, where the ith element is 1 if (a[i], a[i + 1], a[i + 2]) is a Pythagorean triple and 0 otherwise.

Example

For a = [0, 5, 5, 0, 5, 13, 12], the output should be tripleSquareSum(a) = [1, 1, 1, 0, 1].

Triple (a[0], a[1], a[2]) = (0, 5, 5) is a Pythagorean triple, because a[0]2 + a[1]2 = a[2]2;
Triple (a[1], a[2], a[3]) = (5, 5, 0) is a Pythagorean triple, because a[1]2 + a[3]2 = a[2]2;
Triple (a[2], a[3], a[4]) = (5, 0, 5) is a Pythagorean triple, because a[2]2 + a[3]2 = a[4]2;
Triple (a[3], a[4], a[5]) = (0, 5, 13) is not a Pythagorean triple, because none of the needed equations are true;
Triple (a[4], a[5], a[6]) = (5, 13, 12) is a Pythagorean triple, because a[4]2 + a[6]2 = a[5]2;
Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer a

An array of non-negative integers.

Guaranteed constraints:
3 ≤ a.length ≤ 104,
0 ≤ a[i] ≤ 104.

[output] array.integer

An array of integers.

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}
