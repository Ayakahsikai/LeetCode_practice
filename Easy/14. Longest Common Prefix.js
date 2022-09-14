/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */


const strs = ["flower", "flow", "flowht"];
// 所以那個["a"]是啥??????
var longestCommonPrefix = function (strs) {
    let count = 0;
    let check = true;
    const run = (strsArr, count) => {
        for (i = 0; i < strsArr.length; i++) {
            if (strsArr[0].length < count) {
                check = false;
                break;
            }
            if (strsArr[0][count] != strsArr[i][count]) {
                check = false;
                break;
            }
        }
        if (!check) {
            return count;
        } else {
            count++;
            return run(strsArr, count)
        }
    }

    if (strs.length > 0) {
        let end = run(strs, count);
        return strs[0].slice(0, end)
    }
    else return ""
};

longestCommonPrefix(strs)

/*LeetCode解
var longestCommonPrefix = function (strs) {
    return strs.reduce((prefix, cur) => {
        while (cur.indexOf(prefix) != 0) {
            prefix = prefix.slice(0, prefix.length - 1)
        }
        return prefix
    })
};
*/
