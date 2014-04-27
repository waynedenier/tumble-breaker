String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}

var letters = "acdegilmnoprstuw";
var numberOfLetters = letters.length;
var expectedLength = 9;
var expectedOutput = "910897038977002";

var hash = function(s) {
    var h = 7;
    for(var i = 0; i < s.length; i++) {
        h = (h * 37 + letters.indexOf(s[i]));
    }
    return h;
};

var tumbler = function () {
    // locals

    var tumble = function(str, pos){
        if(pos == expectedLength) return str;

        var returnValue = str;
        var letter = str[pos];
        var listPosition = letters.indexOf(letter);
        var isLastLetter = (listPosition == numberOfLetters - 1);

        if (isLastLetter) {
            returnValue = returnValue.replaceAt(pos, letters[0]);
            returnValue = tumble(returnValue, pos + 1);
        } else {
            returnValue = returnValue.replaceAt(pos, letters[listPosition + 1]);
        }

        return returnValue;
    };

    // methods
    var contract = {};

    contract.next = function(last){
        return tumble(last,0);
    };

    return contract;
};

// Test Runs for tumble()

var test1 = "aaaaaaaaa"
var testOutput1 = tumbler().next(test1);

console.log("Test tumble: (in) " + test1 + " > (out) " + testOutput1);

var test2 = "waaaaaaaa"
var testOutput2 = tumbler().next(test2);

console.log("Test tumble: (in) " + test1 + " > (out) " + testOutput2);

var test3 = "wwwwwwwaa"
var testOutput3 = tumbler().next(test3);

console.log("Test tumble: (in) " + test3 + " > (out) " + testOutput3);

var test4 = "wwwwwwwww"
var testOutput4 = tumbler().next(test4);

console.log("Test tumble: (in) " + test4 + " > (out) " + testOutput4);

console.log("Hashing the default " + test1 + " returns " + hash(test1));

// Run utility

var answer = "aaaaaaaaa";
var notFound = true;
while(notFound) {
    answer = tumbler().next(answer);
    var output = hash(answer);
    console.log("[" + answer + "] > " + output);
    if(output == expectedOutput){
        notFound = false;
    }
}

console.log("string found! [" + answer + "]");