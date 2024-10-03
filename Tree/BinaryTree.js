class TreeNode{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

let root = new TreeNode(1);
let b = new TreeNode(8);
let c = new TreeNode(9);
let d = new TreeNode(109);

root.left = b;
root.right = c;
b.left = d;

console.log(root.val);
console.log(root.left.val);
console.log(root.right.val);
console.log(b.left.val);