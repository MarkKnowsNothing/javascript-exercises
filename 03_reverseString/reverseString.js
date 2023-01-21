const reverseString = function(string) {
    const splittedWord = string.split("");
    let reverseSplittedWord = splittedWord.reverse()
    let reversedString = reverseSplittedWord.join("")
    return reversedString
};

// Do not edit below this line
module.exports = reverseString;
