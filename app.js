String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}

// globals
var letters = "acdegilmnoprstuw";
var numberOfLetters = letters.length;
var expectedLength = 9;
var expectedOutput = 910897038977002;

var hash = function() {
	// locals
	var h = 0;
	
	// methods
	var contract = {};
	contract.get = function(s) {
		h = 7;
		for(var i = 0; i < s.length; i++) {
			h = (h * 37 + letters.indexOf(s[i]));
		}
		return h;
	};
	return contract;
};

var tumbler = function () {
	// tumbler vars
    var returnValue = "";
    var letter = '';
    var listPosition = 0;
    var isLastLetter = false;

    var tumble = function(str, pos){
        if(pos == expectedLength) return str;

        returnValue = str;
        letter = str[pos];
        listPosition = letters.indexOf(letter);
        isLastLetter = (listPosition == numberOfLetters - 1);

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

//var testHash = hash();
//var testTumbler = tumbler();
//var test1 = "aaaaaaaaa"
//var testOutput1 = testTumbler.next(test1);
//
//console.log("Test tumble: (in) " + test1 + " > (out) " + testOutput1);
//
//var test2 = "waaaaaaaa"
//var testOutput2 = testTumbler.next(test2);
//
//console.log("Test tumble: (in) " + test2 + " > (out) " + testOutput2);
//
//var test3 = "wwwwwwwaa"
//var testOutput3 = testTumbler.next(test3);
//
//console.log("Test tumble: (in) " + test3 + " > (out) " + testOutput3);
//
//var test4 = "wwwwwwwww"
//var testOutput4 = testTumbler.next(test4);
//
//console.log("Test tumble: (in) " + test4 + " > (out) " + testOutput4);
//
//console.log("Hashing the default " + test1 + " returns " + testHash.get(test1));

// Run utility

//var answer = "aaaaaaaaa";
//var answer = "aaaaaaaai";
var answer = "aaaaaaaap";
var notFound = true;
var output = "";
var tmblr = tumbler();
var hsh = hash();
var triesThisRun = 0;

while(notFound) {
    triesThisRun++;
	answer = tmblr.next(answer);
    output = hsh.get(answer);
    if(triesThisRun % 1000000 == 0){
		console.log("Trial " + triesThisRun + " [" + answer + "] > " + output);
	}
    if(output == expectedOutput || answer == "aaaaaaaaa"){
        notFound = false;
    }
}

console.log("string found! [" + answer + "]");