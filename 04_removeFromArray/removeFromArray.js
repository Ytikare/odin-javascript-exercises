const removeFromArray = function(array, ...elementToRemove) {
    for (let i = 0; i < elementToRemove.length; i++) {
        let removeIndex = -1;

        for (let j = 0; j < array.length; j++) {
            if (array[j] === elementToRemove[i]) {
                array.splice(j, 1);
                j--;
            }
        }
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
