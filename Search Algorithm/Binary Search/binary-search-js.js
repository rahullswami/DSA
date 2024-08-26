let lst = [0, 0, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 9, 21, 52];
let found = false;
let key = 0;
let end = lst.length-1;
let start = 0;
while(start<=end){
    mid = Math.floor((start+end)/2);
    if(lst[mid] == key){
        found = true;
        console.log(key,'key find it index at',mid);
        break;
    }
    else if(lst[mid]<key){
        start = mid +1;
    }
    else{
        end = mid -1;
    }
}
if(found == false){
    console.log('not found!!');
}
