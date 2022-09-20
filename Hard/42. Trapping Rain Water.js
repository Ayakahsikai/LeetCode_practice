/*Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

 

Example 1:

|        w
|    wSSSwwSw
|_ wSwwSwwwwww_
  0123
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9

|      w
| wSSSSw
| wSSwSw
| wwSwww
|_wwSwww_

Constraints:

n == height.length
1 <= n <= 2 * 10^4(20000)
0 <= height[i] <= 105
寬1-20000
高0-105
*/

const height = [4,2,0,3,2,5]
/**
 * @param {number[]} height
 * @return {number}
 */
// 2572ms
 var trap = function(height) {
    let water = 0;
    for(i = 1; i < height.length - 1; i++) {// 頭尾的水不計
            let rh = height[i], lh = height[i];
            for(r = i + 1; r < height.length; r++) if(height[r] > rh) rh = height[r]; //紀錄右邊最大的
            for(l = i - 1; l >= 0; l--) if(height[l] > lh) lh = height[l]; //紀錄左邊最大的
            let wh = Math.min(rh, lh) - height[i]; //水的高度 = 比對取得最小的柱子 - 目前的柱子高度
            water += wh > 0 ? wh : 0; //如果大於0 回傳水的高度 反之 0
    }
    return water
};

/* 44ms
var trap = function (height) {
    let i = 0, j = height.length - 1, leftmax = 0, rightmax = 0, res = 0
    while (i < j) {
        leftmax = Math.max(height[i], leftmax)
        rightmax = Math.max(height[j], rightmax)
        if (leftmax < rightmax) {
            res += leftmax - height[i]
            i++
        }else{
            res += rightmax - height[j]
            j--
        }
    }
    return res
};
*/
