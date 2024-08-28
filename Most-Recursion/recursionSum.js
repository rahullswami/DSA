function sumOfN(n){ // recursion function
    if(n == 1) // base case
        return 1;
    return n+sumOfN(n-1); // call it's self
}
console.log(sumOfN(5));