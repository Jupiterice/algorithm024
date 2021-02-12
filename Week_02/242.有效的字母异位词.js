/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 *
 * https://leetcode-cn.com/problems/valid-anagram/description/
 *
 * algorithms
 * Easy (63.50%)
 * Likes:    337
 * Dislikes: 0
 * Total Accepted:    201.8K
 * Total Submissions: 317.7K
 * Testcase Example:  '"anagram"\n"nagaram"'
 *
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 * 
 * 示例 1:
 * 
 * 输入: s = "anagram", t = "nagaram"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: s = "rat", t = "car"
 * 输出: false
 * 
 * 说明:
 * 你可以假设字符串只包含小写字母。
 * 
 * 进阶:
 * 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    if (s.length === 0) {
        return true;
    }


    const getStrArr = (str) => {
        return str.split('').sort((x,y)=>{
            return x>y ? 0 : -1;
        });
    }
    var sArr = getStrArr(s);
    var tArr = getStrArr(t);
    return sArr.join('') === tArr.join('');

    // if ([...new Set(sArr)].join('') !== [...new Set(tArr)].join('')) {
    //     return false;
    // }
    // console.log(sArr, tArr);

    // var len = s.length;
    // var maxIndex = s.length - 1;
    // var result = true;
    // for (let i = 0; i < s.length; i++) {
    //     console.log(s[i],t[maxIndex - i])
    //     if (s[i] != t[maxIndex - i]) {
    //         result = false;
    //         break;
    //     }
    // }
    // console.log(result);
    // return result;

    
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isAnagram;
// @after-stub-for-debug-end