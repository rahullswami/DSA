// create array unsorted!!
let lst = [23,7,89,78,5,4,1,0,5,44,3,78,8,54,3,9,3,11,12,89];
// array length !!
let n = lst.length;
// create loop let == i;
for(let i=0; i<n; i++){
    // create inner loop let == j;
    for(let j=0; j<n-i-1; j++){
        // checking condition
        if(lst[j]>lst[j+1]){
            // variable = a;
            // a = b;
            // b = variable;
            temp = lst[j];
            lst[j] = lst[j+1];
            lst[j+1] = temp;
        }
    }
}
// pring console
console.log(lst);