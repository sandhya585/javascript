function unique(str){
    strarr = str.split("").sort();
    for(let i=0;i<strarr.length;i++){
        if(strarr[i]===strarr[i+1]){
            return "notuniqueString";
        }
    }
    return "uniquestring";
}
console.log(unique("sdfgashjk"));