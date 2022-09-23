/*
Given a string s, return the longest palindromic substring in s.

A string is called a palindrome string if the reverse of that string is the same as the original string.

 

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
 

Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters.
*/

/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    if(s.length === 1) return s
    str = "";
    const c = (i, j) => {
        while(i >= 0 && j < s.length && s[i] === s[j]) {
            if(j - i >= str.length || str.length === 0) {
                str = s.slice(i, j + 1);
            } //原本是計算回文次數 改成判斷長度 參考647
            i--;
            j++;
        }
    }

    for(i = 0; i < s.length; i++) {
        c(i, i);
        c(i, i + 1);
    }
    return str;
};
