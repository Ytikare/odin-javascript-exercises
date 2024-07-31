const repeatString = function(text, repeatCount) {
    if (repeatCount < 0) {
        return 'ERROR';
    }
    return text.repeat(repeatCount);
};

// Do not edit below this line
module.exports = repeatString;
