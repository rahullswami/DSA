function recursion(count){// <== recursion function
    console.log('JavaScritp');
    if(count==5)// <== base case
        return;
    recursion(count+1);// <== call it's self
 }
 recursion(1);