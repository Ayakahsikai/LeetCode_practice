/*
Given an array of integers nums and an integer target,
return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution,
and you may not use the same element twice. You can return the answer in any order.

InputL nums = [2, 7, 11, 15], target = 9
Output: [0, 1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
*/
const twoSum = (nums, target) => {
    for (i in nums) {
        let tmp = [parseInt(i)];
        n = target - nums[i];
        let idx = nums.indexOf(n);
        while (idx != -1) {
            if (idx != i) {
                tmp.push(idx);
                return tmp
            }
            idx = nums.indexOf(n, idx + 1);
        }
    }
}

/*LeetCode 解
InputL nums = [2, 7, 11, 15], target = 9
var twoSum = function (nums, target) {
    let hash = {};
    for (let i = 0; i < nums.length; i++) {
        if (hash[target - nums[i]] !== undefined) {
            return [i, hash[target - nums[i]]];
        }
        hash[nums[i]] = i;
    }
    return [];
};
*/
