function fib(n){ // recursion function
    if(n == 0 || n == 1) // base case
        return n;
    return fib(n-1) + fib(n-2); // recursion reletion
}
for(let i=0; i<=15; i++){
    console.log(fib(i));
}