const reverseString = function(text) {
    let splitTextArray = text.split('');
    let reverseArray = splitTextArray.reverse();
    return reverseArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
