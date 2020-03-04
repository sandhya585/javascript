function repeatString(str, n){
    var finalString = "";
    
    if(n<=0){
        return str;        
    }

    let i=0;
    while(i<n){
        finalString+=str;
        i++;
    }
    console.log(finalString);
}

repeatString("sandhya",2);