const palindromes = function (word) {


    let simbols_clean =  word.toLowerCase().replace(/[^a-z0-9]/g, "");
    let word_reverse = simbols_clean.split("").reverse().join("")
   

    if (word_reverse === simbols_clean){
        return true
    }else{
        return false
    }


};

console.log(palindromes("Racecar!"))

// Do not edit below this line
module.exports = palindromes;
