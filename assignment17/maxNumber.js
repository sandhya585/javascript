function maxNumber(arr){
    var max=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] < arr[i+1]){
            max=arr[i+1];
        }
    }
    return max;
}

console.log(maxNumber([18,2,13,9,5]));