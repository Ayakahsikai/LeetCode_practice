/*Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
 

Constraints:

-231 <= x <= 231 - 1
*/

/**
 * @param {number} x
 * @return {number}
 */
const x = -123
var reverse = function(x) {
    // 判定正負 負數為true 反之false
    let re = x < 0 ? true : false;
    let tmp = Number(String(x).split('').reverse().join('').replace('-', ''));
    tmp = re ? -tmp : tmp;
    // 判定是否超過32位元數
    return tmp < -2147483648 || tmp > 2147483648 ? 0 : tmp;
};
reverse(x)
// var reverse = function(x) {
//     var n = 0;
//     while(x != 0){
//         // n * 10 = 0, x % 10 = -3 => n = -3
//         // n * 10 = -30, x % 10 = -2 => n = -32
//         // n * 10 = -320, x % 10 = -1 => n = -321
//         n = n*10 + x%10; 
//         // x = (x / 10 = -12.3) 取負數整數-12
//         // x = (x / 10 = -1) 取負數整數 -1
//         // x = (x / 10 = -0.1) 取負數整數 0
//         x = x < 0 ? Math.ceil(x / 10) : Math.floor(x / 10);
//         console.log(n, x)
//     }
//     return n > 2147483647 || n < -2147483648 ? 0 : n;
// };
// 2147483647
// 9646324351
