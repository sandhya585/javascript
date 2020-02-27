var num = [2,1,4,3];
function list(num){
    for(i=0;i<num.length;i++){
        for(j=0;j<num.length;j++){
            if(num[i]<num[j]){
                temp = num[i];
                num[i] = num[j];
                num[j] = temp; 
            }
            console.log("i is "+i+" j is "+j +" and array is"+num);
        }
    }
    
}
list(num);
console.log(num); 