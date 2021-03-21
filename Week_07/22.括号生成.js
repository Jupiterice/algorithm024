/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 *
 * https://leetcode-cn.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (76.74%)
 * Likes:    1644
 * Dislikes: 0
 * Total Accepted:    245.6K
 * Total Submissions: 319K
 * Testcase Example:  '3'
 *
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：n = 3
 * 输出：["((()))","(()())","(())()","()(())","()()()"]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：n = 1
 * 输出：["()"]
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = [];
    const helper = (left, right, str) => {
        if (str.length === n * 2) {
            res.push(str);
            return;
        }
        if (left > 0) {
            helper(left-1, right, str+'(');
        }
        if (left < right) {
            helper(left, right-1, str+')');
        }
    }
    helper(n, n, '')
    return res;
};
// @lc code=end

