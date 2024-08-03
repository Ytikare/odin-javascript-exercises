const sumAll = function(num1, num2) {
    if ( Number.isInteger(num1) == false || num1 <= 0 || Number.isInteger(num2) == false || num2 <= 0) {
        return 'ERROR';
    }
    let sum = 0;
    
    let start, end;

    if (num1 < num2) {
        start =num1;
        end = num2;
    } else {
        start = num2;
        end = num1;
    }

    for (let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
