function fact(n){ // recursion function
    if(n == 1) // base case 
        return 1;
    return n*fact(n-1); // call it's self
}
console.log(fact(5),'javascript');


// Iterative working
let n = 5;
let fac = 1;
for(i=5; i>=1; i--){
    fac = fac*i;
}
console.log(fac);