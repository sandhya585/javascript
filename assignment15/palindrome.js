
function palindrome(str)
{
    return str == str.split("").reverse().join("");
}

if(palindrome("Sandhya")){
    console.log("Palindrome");
}
else
{
    console.log("Not Palindrome");
}