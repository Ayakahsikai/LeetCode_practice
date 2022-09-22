/**
Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.

The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.

Return the quotient after dividing dividend by divisor.

Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For this problem, if the quotient is strictly greater than 231 - 1, then return 231 - 1, and if the quotient is strictly less than -231, then return -231.

 

Example 1:

Input: dividend = 10, divisor = 3
Output: 3
Explanation: 10/3 = 3.33333.. which is truncated to 3.
Example 2:

Input: dividend = 7, divisor = -3
Output: -2
Explanation: 7/-3 = -2.33333.. which is truncated to -2.
 

Constraints:

-2^31 <= dividend, divisor <= 2^31 - 1
divisor != 0
 */

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */

// const dividend = 700, divisor = -3;

// var divide = function (dividend, divisor) {
//     const count = 0;
//     let c = false;
//     c = divisor < 0 ? !c : c;
//     const run = (dividend, divisor, count) => {
//         if(dividend < divisor) return c ? -count : count;
//         dividend -= divisor;
//         count++;
//         return run(dividend, divisor, count);
//     }
//     return run(dividend, Math.abs(divisor), count);
// };
const dividend = -2147483648, divisor = 4;
var divide = function (dividend, divisor) {
    let endc = dividend < 0 ? true : false; //正負數判斷
    let sorc = divisor < 0 ? true : false; //正負數判斷
    let sum = 0;
    dividend = Math.abs(dividend); //絕對值
    divisor = Math.abs(divisor); //絕對值
    let count = String(dividend).length - String(divisor).length; //計算 除數 * 10 ^ n 的n值
    while(dividend >= divisor) {
        let tmp = parseInt(String(divisor) + String(Math.pow(10, count)).substring(1)); //因為不使用* 轉乘字串後補0 再轉回數字
        let n = dividend < tmp ? Math.pow(10, count - 1) : Math.pow(10, count); // 計算sum需要+的數值
        sum += n;
        if(dividend < tmp) tmp = parseInt(String(divisor) + String(Math.pow(10, count - 1)).substring(1)); //如果被除數 小於 要減的值 count - 1
        if(dividend >= tmp) dividend -= tmp; //如果被除數 大於 要減的值 將被除數減掉
        else sum -= n; // 如果小於 則將sum 計數移除
        if(dividend < tmp) count--; // 如果被除數 已經減到比要減值小 則count - 1
    }
    sum = endc === sorc ? sum : -sum //判定該返回正負
    if(sum > 2147483647 || sum < -2147483648) return 2147483647 //超出特定數值回傳2147483647
    return sum;
}

divide(dividend, divisor);


// var divide = function(dividend, divisor) {
//     if (divisor === 0) return Infinity;
//     if (dividend === 0) return 0;
//     if (dividend === -2147483648 && divisor === -1) return 2147483647;

//     let res = 0;
//     let flag = '';
//     if (dividend < 0 && divisor > 0 || dividend > 0 && divisor < 0) {
//         flag = '-';
//     }
//     dividend = Math.abs(dividend);
//     divisor = Math.abs(divisor);
    
//     while (dividend >= divisor) {
//         let temp = divisor, m = 1;
//         while (temp <= (dividend >> 1)) { // 位运算模拟乘法，撑到最大。防止溢出
//             temp <<= 1;
//             m <<= 1;
//         }
//         dividend -= temp;
//         res += m;
//     }
//     return parseInt(flag + res);
// };
