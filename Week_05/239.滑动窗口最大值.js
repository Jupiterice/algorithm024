/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 *
 * https://leetcode-cn.com/problems/sliding-window-maximum/description/
 *
 * algorithms
 * Hard (49.50%)
 * Likes:    864
 * Dislikes: 0
 * Total Accepted:    128.1K
 * Total Submissions: 258.6K
 * Testcase Example:  '[1,3,-1,-3,5,3,6,7]\n3'
 *
 * 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k
 * 个数字。滑动窗口每次只向右移动一位。
 * 
 * 返回滑动窗口中的最大值。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
 * 输出：[3,3,5,5,6,7]
 * 解释：
 * 滑动窗口的位置                最大值
 * ---------------               -----
 * [1  3  -1] -3  5  3  6  7       3
 * ⁠1 [3  -1  -3] 5  3  6  7       3
 * ⁠1  3 [-1  -3  5] 3  6  7       5
 * ⁠1  3  -1 [-3  5  3] 6  7       5
 * ⁠1  3  -1  -3 [5  3  6] 7       6
 * ⁠1  3  -1  -3  5 [3  6  7]      7
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：nums = [1], k = 1
 * 输出：[1]
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：nums = [1,-1], k = 1
 * 输出：[1,-1]
 * 
 * 
 * 示例 4：
 * 
 * 
 * 输入：nums = [9,11], k = 2
 * 输出：[11]
 * 
 * 
 * 示例 5：
 * 
 * 
 * 输入：nums = [4,-2], k = 2
 * 输出：[4]
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * -10^4 
 * 1 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 暴力破解
// var maxSlidingWindow = function(nums, k) {
//     if (k == 0 || nums.length == 0) return [];
//     let res = [];
//     for(let i=0; i< nums.length - k + 1; i++) {
//         // res.push(Math.max(...nums.slice(i, i+k)));
//         let max = Number.MIN_SAFE_INTEGER;
//         for(let j = i;j < i + k;j++){
//             max = Math.max(max,nums[j]);
//         }
//         res.push(max);
//     }
//     return res;
// };
// 方法一：单调队列
var maxSlidingWindow = function(nums, k) {
    let n = nums.length;
    // if (k == 0 || n == 0) return [];
    // if (k == 1) return nums;
    let res = [];
    let q = [];
    for(let i=0; i< n; i++) {
        // 新元素依次和队列中的元素比较，淘汰队列中较小的
        while(q.length > 0 && nums[i]>q[q.length-1]) q.pop();
        q.push(nums[i]);

        if (i + 1 - k >= 0) {// 满足窗口长度
            res.push(q[0]);// 队首元素最大，放入结果中
            if (q[0] === nums[i+1-k]) q.shift();// 删除队列中刚滑出窗口的最大值
        }
    }
    return res;
}
// 方法二
// var maxSlidingWindow = function(nums, k) {
//     let n = nums.length;
//     if(n == 0) return [];
//     if(k == 1) return nums;
//     let res = [];
//     let left = new Array(n),right = new Array(n);
//     left[0] = nums[0];
//     right[n-1] = nums[n-1];
//     for(let i = 1;i < n;i++){
//         // 以分组首元素为准，删除较小的元素，其余与首元素相同
//         if(i % k == 0) left[i] = nums[i];
//         else left[i] = Math.max(left[i-1],nums[i]);

//         // 以右侧分组末尾元素为准，删除较小的，
//         let j = n - i - 1;
//         if((j + 1) % k == 0) right[j] = nums[j];
//         else right[j] = Math.max(right[j + 1],nums[j]);
//     }
//     for(let i = 0;i < n - k + 1;i++){
//         res[i] = Math.max(left[i + k - 1],right[i]);
//     }
//     return res;
// };
// @lc code=end

