
    // 思想就是一个中序遍历
    // 中序遍历就是 左 中 右
    function Convert(pRootOfTree) {
			TreeNode lastNode =null;
			TreeNode headNode=ConvertNode(pRootOfTree, lastNode);
			while (headNode != null && headNode.left != null) {
				headNode = headNode.left;
			}
			return headNode;
		}
 
		function ConvertNode(rootTree, lastNode) {
			if (rootTree == null) {
				return null;
            }
            // 中序遍历中的找最左
			if (rootTree.left != null) {
				lastNode=ConvertNode(rootTree.left, lastNode);
            }
            // 正常这一步的时候lastNode为根结点，rootTree已经为当前根结点下的最左节点
            // 最左节点的左节点为该节点作为右子树的时候的根结点（第一次为Null）
			rootTree.left = lastNode;
			if (lastNode != null) {
                // 不为空的时候 补上右侧指针 也就是双链表的另一个方向
				lastNode.right = rootTree;
			}
            lastNode = rootTree;

            // 中序遍历中的找最右
			if (rootTree.right != null) {
				lastNode=ConvertNode(rootTree.right, lastNode);
			}
			return lastNode;
        }
    
