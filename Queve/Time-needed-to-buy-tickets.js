// Question ==> https://leetcode.com/problems/time-needed-to-buy-tickets/

var timeRequiredToBuy = function(tickets, k) {
    q = [];
    for(i=0; i<tickets.length; i++){
        q.push(i)
    }
    time = 0;
    while(q.length>0){
        person = q.shift();
        tickets[person] -= 1;
        time +=1;
        if(tickets[k] == 0)
            break
        if(tickets[person]>0)
            q.push(person)
    }
    return time
};