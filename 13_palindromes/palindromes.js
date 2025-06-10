const palindromes = function (word) {
    word = word.toLowerCase()
    let word_reverse = word.split("").reverse().join("")
    let simbols_clean =  word_reverse.toLowerCase().replace(/[^a-z0-9]/g, "");

    if (simbols_clean === word){
        return true
    }else{
        return false
    }


};

console.log(palindromes("Racecar"))

// Do not edit below this line
module.exports = palindromes;
