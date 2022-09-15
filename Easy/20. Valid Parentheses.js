/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
const str1 = "()";
var isValid = function (s) {
    const run = (str) => {
        if(str.indexOf('()') != -1 || str.indexOf('{}') != -1 || str.indexOf('[]') != -1) {
            str = str.replace(/\(\)/g, '');
            str = str.replace(/\{\}/g, '');
            str = str.replace(/\[\]/g, '');
            return run(str)
        } else {
            return str.length <= 0 ? true : false
        }
    }
    return run(s);
};

isValid(str1);
// /*
// const str1 = "()";
// var isValid = function (s) {
//     const stack = [];
//     for (let i = 0; i < s.length; i++) {
//         let c = s[i];
//         switch (c) {
//             case '(':
//                 stack.push(')');
//                 break;
//             case '[':
//                 stack.push(']');
//                 break;
//             case '{':
//                 stack.push('}');
//                 break;
//             default:
//                 // 利用stack.pop()將stack取出來比對
//                 // 如果不同就回傳false
//                 if (c !== stack.pop()) {
//                     return false;
//                 }
//         }
//     }
//     // for跑完 比對長度
//     return stack.length === 0;
// };
// isValid(str1);
//   */
