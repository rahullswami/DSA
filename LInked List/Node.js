class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
node = new Node(1);
node1 = new Node(2);
node2 = new Node(3);
node3 = new Node(4);

let head = node;
node.next = node1;
node1.next = node2;
node2.next = node3;

// starting ===> head
// ending ===> null

while(head!=null){
    console.log('all node print',head.data);
    head = head.next;
}

// sum of linked list
let sum = 0;
head = node;
while(head!=null){
    sum += head.data;
    head = head.next;
}
console.log('sum of in this linked list',sum)

// Given the head of linked list, find the length

let n = 0;
head = node;
while(head!=null){
    n +=1;
    head = head.next;
}
console.log('length of in this linked list',n);