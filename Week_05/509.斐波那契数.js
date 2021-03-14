/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 *
 * https://leetcode-cn.com/problems/fibonacci-number/description/
 *
 * algorithms
 * Easy (68.28%)
 * Likes:    245
 * Dislikes: 0
 * Total Accepted:    148.7K
 * Total Submissions: 217.7K
 * Testcase Example:  '2'
 *
 * 斐波那契数，通常用 F(n) 表示，形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：
 * 
 * 
 * F(0) = 0，F(1) = 1
 * F(n) = F(n - 1) + F(n - 2)，其中 n > 1
 * 
 * 
 * 给你 n ，请计算 F(n) 。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：2
 * 输出：1
 * 解释：F(2) = F(1) + F(0) = 1 + 0 = 1
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：3
 * 输出：2
 * 解释：F(3) = F(2) + F(1) = 1 + 1 = 2
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：4
 * 输出：3
 * 解释：F(4) = F(3) + F(2) = 2 + 1 = 3
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 0 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    // 动态递推
    // if (n == 0|| n == 1) {
    //     return n;
    // }
    // let pre = 0;
    // let cur = 1;
    // for (let i = 2; i <= n;i++) {
    //     cur += pre;
    //     pre = cur - pre;
    // }
    // return cur;

    // 递归
    let cache = [];
    const counter = (N) => {
        if (N == 0|| N == 1) {
            return N;
        }
        if (cache[N]) return cache[N];
        cache[N] = counter(N-1) + counter(N-2);
        return cache[N];
    };
    return counter(n);
};
// @lc code=end

