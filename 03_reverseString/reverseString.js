const reverseString = function(word) {
    let newArray = word.split("");
    let reverse = [];
    let j = 0;
    for(let i = newArray.length -1; i >= 0; i--){
        reverse[j] = newArray[i];
        j++;
    }
    return reverse.join("");
};

// Do not edit below this line
module.exports = reverseString;
