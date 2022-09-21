/*
Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

 

Example 1:

Input: x = 2.00000, n = 10
Output: 1024.00000
Example 2:

Input: x = 2.10000, n = 3
Output: 9.26100
Example 3:

Input: x = 2.00000, n = -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25
 

Constraints:

-100.0 < x < 100.0
-231 <= n <= 231-1
n is an integer.
-104 <= xn <= 104
*/

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
 var myPow = function(x, n) {
    return Math.pow(x, n)
};

/**
var myPow = function (x, n) {
  // 如果n = 0則 回傳0, n = 1 回傳本身
  if (n == 0 || n == 1) return n === 0 ? 1 : x
  //如果是n是負數
  //x = 1 / x轉成小數
  //將n轉成正數
  if (n < 0) {
    return myPow(1 / x, Math.abs(n))
  }
  // 如果n 求於 = 0
  // x 相乘, n / 2
  if (n > 1) {
    return n % 2 === 0 ? myPow(x * x, n / 2) : myPow(x * x, (n / 2) | 0) * x
  }
}
*/
