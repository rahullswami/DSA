function pow(n,x){ // recursion function
    if(x == 0) // base case
        return 1;
    if(x < 0)
        return 1/pow(n,-x); // Nagitive Power+

    return n*pow(n,x-1); // recursion relation , Positive Power
}
console.log(pow(5,2));
console.log(pow(5,-3));