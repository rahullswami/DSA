function sumArray(arr,n){ // recursion function
    if(n == 0) // base case
        return 0;
    return arr[n-1] + sumArray(arr,n-1); // call it's self
}
let arr = [3,2,5,7,1,8];
let n = arr.length;
console.log(sumArray(arr,n));