// Question ==> https://leetcode.com/problems/binary-tree-postorder-traversal/

var postorderTraversal = function(root) {
    let ans = [];
    function postorder(root){
        if(root == null)
            return ;
        postorder(root.left)
        postorder(root.right)
        ans.push(root.val)
    }
    postorder(root)
    return ans
};