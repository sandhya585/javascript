var longestWord="";
function longWord(str){
    strarr= str.split(" ");

    for(let i=0;i<strarr.length;i++){
        if(strarr[i].length > longestWord.length){
            longestWord = strarr[i];
        }
    }

    console.log(longestWord);
}
longWord("working in omniwyse company");