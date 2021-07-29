Given an array of strings, your task is to find the number of pairs in which one string is a prefix of the other. Specifically, given 0 ≤ i < j < strings.length, strings[i] can be a prefix of strings[j], or strings[j] can be a prefix of strings[i].

Example

For strings = ["back", "backdoor", "gammon", "backgammon", "comeback", "come", "door"], the output should be stringPrefixPairs(strings) = 3.

The relevant pairs are:

strings[0] = "back" and strings[1] = "backdoor".
strings[0] = "back" and strings[3] = "backgammon".
strings[4] = "comeback" and strings[5] = "come".
For strings = ["abc", "a", "a", "b", "ab", "ac"], the output should be stringPrefixPairs(strings) = 8.

The relevant pairs are:

strings[0] = "abc" and strings[1] = "a".
strings[0] = "abc" and strings[2] = "a".
strings[0] = "abc" and strings[4] = "ab".
strings[1] = "a" and strings[2] = "a".
strings[1] = "a" and strings[4] = "ab".
strings[1] = "a" and strings[5] = "ac".
strings[2] = "a" and strings[4] = "ab".
strings[2] = "a" and strings[5] = "ac".
Input/Output

[execution time limit] 4 seconds (js)

[input] array.string strings

An array of strings containing lowercase letters from the English alphabet.

Guaranteed constraints:
1 ≤ strings.length ≤ 105,
1 ≤ strings[i].length ≤ 10.

[output] integer64

The number of pairs of strings in which one string is a prefix of the other string.

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}
