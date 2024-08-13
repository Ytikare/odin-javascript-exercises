const palindromes = function (string) {
    let text = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,'').replace(/\s{1,}/g,'');

    for (let i = 0; i < text.length / 2; i++) {
        if (text[i].toLowerCase() != text[text.length - 1 -i].toLowerCase()) {
            return false
        }
    }
    return true;
};


// Do not edit below this line
module.exports = palindromes;
