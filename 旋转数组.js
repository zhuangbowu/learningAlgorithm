/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function (nums, k) {
    console.log(nums, k);
};
// 给你一个数组，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。
// 向右轮转 1 步: [7,1,2,3,4,5,6]
// 向右轮转 2 步: [6,7,1,2,3,4,5]
// 向右轮转 3 步: [5,6,7,1,2,3,4]
console.log(rotate(nums = [1, 2, 3, 4, 5, 6, 7], k = 3));
// 向右轮转 1 步: [99,-1,-100,3]
// 向右轮转 2 步: [3,99,-1,-100]
console.log(rotate(nums = [-1, -100, 3, 99], k = 2));