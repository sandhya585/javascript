function palindrome(str){
    var strWithoutSpecialCharacters = str.replace(/\W/g," ");
    var revstr=strWithoutSpecialCharacters.split("").reverse().join("");

    if(str === revstr){
        return "Palindrome";
    }
    return "Not Palindrome";
}

console.log(palindrome("aaasdfgh"));
