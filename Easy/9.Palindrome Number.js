/*
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

Constraints:

-2^31 <= x <= 2^31 - 1
*/

/**
 * @param {number} x
 * @return {boolean}
 */

//const num = -121;

var isPalindrome = function (x) {
    let ans = true;
    let ltor = x.toString().split('');
    let rtol = x.toString().split('').reverse();
    for(i in ltor) {
        ans = ltor[i] === rtol[i] ? true : false;
        if(!ans) break;
    }
    return ans
};
//isPalindrome(num)

/*LeetCode解
var isPalindrome = function(x) {
    return String(x) === String(x).split('').reverse().join('') ? true : false
};
*/

