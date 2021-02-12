/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 *
 * https://leetcode-cn.com/problems/group-anagrams/description/
 *
 * algorithms
 * Medium (65.42%)
 * Likes:    653
 * Dislikes: 0
 * Total Accepted:    163.3K
 * Total Submissions: 249.5K
 * Testcase Example:  '["eat","tea","tan","ate","nat","bat"]'
 *
 * 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
 * 
 * 示例:
 * 
 * 输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
 * 输出:
 * [
 * ⁠ ["ate","eat","tea"],
 * ⁠ ["nat","tan"],
 * ⁠ ["bat"]
 * ]
 * 
 * 说明：
 * 
 * 
 * 所有输入均为小写字母。
 * 不考虑答案输出的顺序。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // 遍历数组，获取异位词的
    const getStrArr = (str) => {
        return str.split('').sort((x,y)=>{
            return x>y ? 0 : -1;
        });
    }
    const cache = [];
    const res = [];
    strs.forEach((str) => {
        var key = getStrArr(str).join('');
        const index = cache.indexOf(key);
        if (index > -1) {
            res[index].push(str);
        } else {
            cache.push(key);
            res.push([str]);
        }
    });
    return res;
};
// @lc code=end

