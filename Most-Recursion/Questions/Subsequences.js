function subsequences(s,i,curr){
    if(i == s.length){
        console.log(`javaScript method print ${curr}`);
        return;
    }
    subsequences(s,i+1,curr+s[i]); // Take
    subsequences(s,i+1,curr); // Leave
}
let s = 'abc';
let curr = '';
let index = 0;
subsequences(s,index,curr);