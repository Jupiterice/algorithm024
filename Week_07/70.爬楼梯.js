/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 *
 * https://leetcode-cn.com/problems/climbing-stairs/description/
 *
 * algorithms
 * Easy (51.35%)
 * Likes:    1465
 * Dislikes: 0
 * Total Accepted:    363.9K
 * Total Submissions: 707.8K
 * Testcase Example:  '2'
 *
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 
 * 注意：给定 n 是一个正整数。
 * 
 * 示例 1：
 * 
 * 输入： 2
 * 输出： 2
 * 解释： 有两种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶
 * 2.  2 阶
 * 
 * 示例 2：
 * 
 * 输入： 3
 * 输出： 3
 * 解释： 有三种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶 + 1 阶
 * 2.  1 阶 + 2 阶
 * 3.  2 阶 + 1 阶
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n<3) return n;
    let dp = [];
    dp[0] = 1;
    dp[1] = 2;
    for (let i=2; i<n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n-1];

    // 0、1结果为1；
    // let p = 1, p1 = 1, p2 = 0;
    // 计算大于2的结果。前两级台阶之和
    // for (let i=0; i<n; i++) {
    //     p = p1 + p2;
    //     p2 = p1;
    //     p1 = p;
    // }
    // return p;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = climbStairs;
// @after-stub-for-debug-end