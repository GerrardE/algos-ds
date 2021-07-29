Think about a group chat with a bunch of people writing messages to it. Messages could include text, mentions of other people in the chat, and/or mentioning everyone in the chat (@all). Specifically, there are only 3 types of tokens in messages:

@id<number>
<text>
@all
For example:

"Here is an example with no mentions"
"Here is an example with @id12345 one mention"
"Here is an example with @id12345 @id123 @id983 three people mentioned"
"Here is an example with @all all people mentioned"
Your task is to calculate mention statistics - given a list of members in a group chat (users) and a list of messages from the chat, count the number of different messages that each each user is mentioned in.

Return the result in an array of strings, with every string following this format: "[user id]=[mentions count]". The array should be sorted by mention count in descending order, or in case of a tie, lexicographically by user ids in ascending order.

NOTE: In all message, any @all and @id<number> are guaranteed to be preceded by a space and followed by a space, or they will be located at the either the beginning or end of the message.

Example

For members = ["id1", "id23", "id58", "id2"] and

messages = [
  "Hi @all !! Can anynone of you help me with my homework? Hey @id1 I think I can.",
  "@id58 I think the answer for the first task is @id65",
  "@id23 I think you are right @id23"
]
the output should be chatMentionStatistics2(members, messages) = ["id23=2", "id58=2", "id1=1", "id2=1"].

Explanation:

In the first message all users are mentioned: all.
In the second message, 1 user is mentioned: id58. Note that id65 is not a member of the group chat.
In the third message, 1 user is mentioned: id23. Note that id23 is mentioned twice in this message, but it should only be counted once.
So, the output should be ["id23=2", "id58=2", "id1=1", "id2=1"].
Input/Output

[execution time limit] 4 seconds (js)

[input] array.string members

An array of strings representing members of a group chat.

Guaranteed constraints:
2 ≤ members.length ≤ 50,
3 ≤ members[i].length ≤ 5.

[input] array.string messages

An array strings containing messages with text and user mentions described above.

Guaranteed constraints:
1 ≤ messages.length ≤ 100,
1 ≤ messages[i].length ≤ 200.

[output] array.string

Return an array of strings containing all user ids from members, with mentions statistics of each user id across messages (described above) separated by = sign. This array should be sorted by mention count in descending order, or in case of a tie, lexicographically by user ids in ascending order.

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}
