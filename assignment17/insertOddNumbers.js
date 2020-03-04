var array=[];
function oddNumbers(arr){

    for(var i=0;i<arr.length;i++){
        if(arr[i] % 2 !== 0){
            array.push(arr[i]);
        }
    }
}

oddNumbers([1,2,3,7,4,9,3,1]);
console.log(array);