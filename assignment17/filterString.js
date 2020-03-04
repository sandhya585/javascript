function strarray(arr){

   var arrayystr= arr.filter(function (a){
        return typeof a === "string";
    })
    return arrayystr;
}

console.log(strarray([10,"sandy",12,"mani"]));