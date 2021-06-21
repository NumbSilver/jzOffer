// 操作给定的二叉树，将其变换为源二叉树的镜像。

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param pRoot TreeNode类
 * @return TreeNode类
 */
function Mirror( pRoot ) {
    // write code here
    if(!pRoot){
        return null;
    }
    function change(root){
        if(!root||(!root.left&&!root.right)){
            return;
        }
        var temp = null;
        temp = root.right;
        root.right = root.left;
        root.left = temp;
        change(root.left);
        change(root.right);
    }
    change(pRoot)
    return pRoot;
}