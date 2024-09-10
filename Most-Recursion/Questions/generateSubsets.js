function subsets(arr,i,curr,powerSet){
    if(i == arr.length){
        powerSet.push([...curr])
        return;
    }

    // leave the current Element
    subsets(arr,i+1,curr,powerSet);

    // add the current element
    curr.push(arr[i]);

    // take the current element
    subsets(arr,i+1,curr,powerSet)

    // remove the current element 
    curr.pop();// back tracking

}
let arr = [1,2,3];
let powerSet = [];
subsets(arr,0,[],powerSet);
console.log(powerSet);