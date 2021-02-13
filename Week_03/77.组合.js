/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 *
 * https://leetcode-cn.com/problems/combinations/description/
 *
 * algorithms
 * Medium (76.32%)
 * Likes:    489
 * Dislikes: 0
 * Total Accepted:    132.4K
 * Total Submissions: 173.2K
 * Testcase Example:  '4\n2'
 *
 * 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
 * 
 * 示例:
 * 
 * 输入: n = 4, k = 2
 * 输出:
 * [
 * ⁠ [2,4],
 * ⁠ [3,4],
 * ⁠ [2,3],
 * ⁠ [1,2],
 * ⁠ [1,3],
 * ⁠ [1,4],
 * ]
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let result = [];
    let subresult = [];
    function combineSub(start,subresult){
        if(subresult.length == k){
            result.push(subresult.slice(0));
            return;
        }
        let len = subresult.length;
        for(let i = start;i<=n-(k-len)+1;i++){
            subresult.push(i);
            combineSub(i+1, subresult);
            subresult.pop();
        }
    }
    combineSub(1, subresult);
    return result;
    
};
// @lc code=end

