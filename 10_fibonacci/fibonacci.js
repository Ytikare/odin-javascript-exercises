const fibonacci = function(number) {
    if (isNaN(number) || number < 0) {
        return 'OOPS'
    } else if (number == 0) {
        return 0
    } else if (number == 1 || number == 2) {
        return 1;
    } 
    else {
        let firstNum = 1;
        let secondNum = 1;

        for (let i = 2; i < number; i++) {
            let temp = secondNum + firstNum;
            firstNum = secondNum;
            secondNum = temp;
        }

        return secondNum;
    }
};

// Do not edit below this line
module.exports = fibonacci;
