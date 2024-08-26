// create array 
let lst = [0, 0, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 9, 21, 52];
let found = false;
let n = lst.length;
let key = 521;
for(let i=0; i<n; i++){
    if(lst[i] == key){
        found = true;
        console.log(key,'find key index at',i);
    }
}
if(found == false){
    console.log('not found!!');
}