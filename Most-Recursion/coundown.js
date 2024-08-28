function coundown(c){ // recursion function
    console.log(c);
    if(c == 0) // base case
        return;
    coundown(c-1); // call it's self
}
coundown(5)