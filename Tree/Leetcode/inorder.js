// Question => https://leetcode.com/problems/binary-tree-inorder-traversal/

var inorderTraversal = function(root) {
    let ans = [];
    function inorder(root){
        if(root == null)
            return;
        inorder(root.left)
        ans.push(root.val)
        inorder(root.right)
    }
    inorder(root)
    return ans;
};