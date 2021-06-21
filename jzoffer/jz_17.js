//输入两棵二叉树A，B，判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构）
function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function HasSubtree(pRoot1, pRoot2)
{
    // write code here
    if(!pRoot1||!pRoot2) return false;

    if(!bothDfs(pRoot1,pRoot2)){
        return HasSubtree(pRoot1.right,pRoot2)||HasSubtree(pRoot1.left,pRoot2)
    }
    return true;

    function bothDfs(node1,node2){
        if(!node2) return true;
        if(!node1) return false;
        if(node1.val!==node2.val) return false;
        return bothDfs(node1.right,node2.right)&&bothDfs(node1.left,node2.left);
    }
}
module.exports = {
    HasSubtree : HasSubtree
};