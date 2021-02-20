/*

You are given a string s and an array of strings words of the same length. Return all starting indices of substring(s) in s that is a concatenation of each word in words exactly once, in any order, and without any intervening characters.

You can return the answer in any order.

 
Example 1:

Input: s = "barfoothefoobarman", words = ["foo","bar"]
Output: [0,9]
Explanation: Substrings starting at index 0 and 9 are "barfoo" and "foobar" respectively.
The output order does not matter, returning [9,0] is fine too.

Example 2:
Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
Output: []

Example 3:
Input: s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
Output: [6,9,12]

*/


/*
- Utilize the length of each array element somehow to help with iteration... AHA! each concatenation must be word.length*words[0].length long, good starting place.
- set up new Map that counts each word occurence, so that it keeps a log of every word AND encapsulates the event of having repeat words
- make an index limit that doesn't keep iterating if the length of the substring is smaller than what it should be (words.length*words[0].length)
-while iterating through string 's', set up variable to make a copy of the original Map, so as not to change the original, or create a new map for every iteration (can be very expensive with time complexity)
- create new loop that uses process of elimination to see if chunks (words[0].length) match the keys in the Map copy, and decrement their values in the Map
- if a chunk isn't found (undefined or 0), break the inner loop, continue iterating through string (because this tells us that the amount of word recurence is disproportionate to the key's value)
- if every chunk of the string is found, then push that string index into results array
- results array gets returned in the end

*/

var findSubstring = function(s, words) {
    let result = [];
    const wordCount = new Map();
    words.forEach(word => {
        if(!wordCount.get(word)){
            wordCount.set(word, 0);
        }
        wordCount.set(word, wordCount.get(word) + 1);
    });
    let chunk = words[0].length;
    let chunkCount = words.length;
    let idxLimit = chunk*chunkCount;
    for( let i = 0; i <= s.length - idxLimit; i += 1){
        let wordsCopy = new Map(wordCount);
        for(let j = 0; j < chunkCount; j += 1){
            let curChunk = s.slice(i + j*chunk, i + j*chunk + chunk)
            let numOccurences = wordsCopy.get(curChunk);

            if(!numOccurences){
                break;
            }
            wordsCopy.set(curChunk, wordsCopy.get(curChunk) - 1);

            if(j === chunkCount - 1){
                result.push(i);
            }
        }
    }
    return result;
};

console.log(findSubstring("barfoofoobarthefoobarthe", ["bar","foo","the"] ))