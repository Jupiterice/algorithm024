/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
 *
 * https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/
 *
 * algorithms
 * Medium (68.92%)
 * Likes:    870
 * Dislikes: 0
 * Total Accepted:    152.6K
 * Total Submissions: 221K
 * Testcase Example:  '[3,9,20,15,7]\n[9,3,15,20,7]'
 *
 * 根据一棵树的前序遍历与中序遍历构造二叉树。
 * 
 * 注意:
 * 你可以假设树中没有重复的元素。
 * 
 * 例如，给出
 * 
 * 前序遍历 preorder = [3,9,20,15,7]
 * 中序遍历 inorder = [9,3,15,20,7]
 * 
 * 返回如下的二叉树：
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// 方法一
// var buildTree = function(preorder, inorder) {
//     var i = 0, tree = new TreeNode, premap = {},inMap = {}, l = inorder.length;
//     while (i < l) {
//         premap[preorder[i]] = i;
//         inMap[inorder[i]] = i;
//         i++;
//     }
//     if(l ==0) return null;
//     function getTop (i0,i1,j0,j1) {
//         if(i0<0 || i1<0||j0>=l||j1>=l || i0>j0||  i1>j1) {
//             return null;
//         }
//         var val = preorder[i0];
//         var tree = new TreeNode(val);
//         // 变量声明对时间的影响？
//         var left0 = i0+1, left1 = inMap[val] - 1;
//             var l1 = j1 - inMap[val];
//             tree.left = getTop(i0+1, i1,i0+1 + left1 - i1, left1);
//             tree.right = getTop(j0 - l1 + 1, inMap[val] + 1, j0, j1);
//         return tree;
//     }
//     return getTop(0,0,l -1, l-1);
// };
// 方法二
// var buildTree = function(preorder, inorder) {
//     if (inorder.length == 0) return null;
//     const root = new TreeNode(preorder[0]);
//     const mid = inorder.indexOf(root.val);
//     root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
//     root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));
//     return root;
// };

var buildTree = function(preorder, inorder) {
    const getTree = (p_start, p_end, i_start, i_end) => {
        if (p_start > p_end) return null;
        const root = new TreeNode(preorder[p_start]);
        const mid = inorder.indexOf(root.val);
        // 左子树
        const leftNum = mid - i_start;
        root.left = getTree(p_start + 1, p_start + leftNum, i_start, mid - 1);
        root.right = getTree(p_start + leftNum + 1, p_end, mid + 1, i_end);
        return root;
    }
    return getTree(0, preorder.length - 1, 0, inorder.length - 1);
};

// @lc code=end

