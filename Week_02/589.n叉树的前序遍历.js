/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N叉树的前序遍历
 *
 * https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/description/
 *
 * algorithms
 * Easy (74.09%)
 * Likes:    138
 * Dislikes: 0
 * Total Accepted:    64.8K
 * Total Submissions: 87.4K
 * Testcase Example:  '[1,null,3,2,4,null,5,6]'
 *
 * 给定一个 N 叉树，返回其节点值的前序遍历。
 * 
 * 例如，给定一个 3叉树 :
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 返回其前序遍历: [1,3,5,6,2,4]。
 * 
 * 
 * 
 * 说明: 递归法很简单，你可以使用迭代法完成此题吗?
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    // 1.root.val
    // 2.root.children按顺序遍历。
    var result = [];
    const arr = [root];
    console.log(arr);
    const walk = (root) => {
        if (root !== null) {
            result.push(root.val);
            root.children.forEach((child) => {
                walk(child)
            })
        }
    }
    walk(root);
    return result;
    
};
// @lc code=end

