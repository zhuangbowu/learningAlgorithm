/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function (nums, target) {
    let arr = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (arr.has(target - nums[i])) {
            return [arr.get(target - nums[i]), i]
        } else {
            arr.set(nums[i], i);
        }
    }
    return [];
};

// 给定一个整数数组 nums和一个整数目标值 target，请你在该数组中找出 和为目标值 target 的那两个整数，并返回它们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
// 你可以按任意顺序返回答案。
// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
console.log(twoSum(nums = [2, 7, 11, 15], target = 9));
// 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
// 输入：nums = [3,2,4], target = 6
// 输出：[1,2]
// console.log(twoSum(nums = [3, 2, 4], target = 6));

// 输入：nums = [3,3], target = 6
// 输出：[0,1]
// console.log(twoSum(nums = [3, 3], target = 6));