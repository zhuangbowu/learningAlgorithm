/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const flip = (nums, start, end) => {
    while (start < end) {
        [nums[start++], nums[end--]] = [nums[end], nums[start]];
    }
}
let rotate = function (nums, k) {
    k %= nums.length;
    flip(nums, 0, nums.length - 1);
    flip(nums, 0, k - 1);
    flip(nums, k, nums.length - 1);
};
// 给你一个数组，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。
// 向右轮转 1 步: [7,1,2,3,4,5,6]
// 向右轮转 2 步: [6,7,1,2,3,4,5]
// 向右轮转 3 步: [5,6,7,1,2,3,4]
//              [1,2,3,4,5,6,7]
rotate([1, 2, 3, 4, 5, 6, 7], 5);
// 向右轮转 1 步: [99,-1,-100,3]
// 向右轮转 2 步: [3,99,-1,-100]
// rotate([-1, -100, 3, 99], 2);
