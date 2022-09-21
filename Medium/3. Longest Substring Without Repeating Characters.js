/*
Given a string s, find the length of the longest substring without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/

/**
 * @param {string} s
 * @return {number}
 */
const s = "pwwkew";

var lengthOfLongestSubstring = function (s) {
    let l = 0;//紀錄長度
    let str = ''; //記錄非重複文字
    const run = (l, str, s) => {
        if (s.length == 0) return l;  //字串跑完 回傳長度
        if (str.indexOf(s[0]) != -1) str = str.substr(str.indexOf(s[0]) + 1, str.length - 1) //如果有重複 移除重複
        str += s[0]; //str新增s[0]文字
        l = l > str.length ? l : str.length; //如果紀錄的長度小於非重複字串 更新長度
        s = s.replace(/^./, ""); //移除s第一個字
        return run(l, str, s)
    }
    return run(l, str, s)
};

lengthOfLongestSubstring(s);


/*
// 建立 左右雙指針
// 如果有重複 左+1
// 沒有重複 右+1
// 如果右 - 左 > max的值
// 更新max值
var lengthOfLongestSubstring = function(str) {
    if (str.length <= 1) {return str.length}
      let left = 0
      let right = 1
      let max = 0
      let temp
      while(right<str.length){
        temp = str.slice(left, right)
        if (temp.indexOf(str.charAt(right)) > -1) {
          left++
          continue
        } else {
          right++
        }
        if (right - left > max) { max = right - left }
      }
      return max
};
*/
