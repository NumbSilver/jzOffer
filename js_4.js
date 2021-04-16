// 输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。
function reConstructBinaryTree(pre, vin)
{
    // write code here
    if(pre.length==0) return;
    var newTree = new TreeNode(pre[0]);
    var index = vin.indexOf(pre[0]);
    if(index==-1){
        return;
    }
    newTree.left = reConstructBinaryTree(pre.slice(1,index+1),vin.slice(0,index));
    newTree.right = reConstructBinaryTree(pre.slice(index+1,pre.length),vin.slice(index+1,pre.length));
    return newTree;
}
