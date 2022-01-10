/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let rotate = function (nums, k) {
    let start = nums.slice(0, nums.length - k), end = nums.slice(nums.length - k, nums.length);
    let arr = end.concat(start);
    for (let i = 0; i < nums.length; ++i) {
        nums[i] = arr[i];
    }
};
// 给你一个数组，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。
// 向右轮转 1 步: [7,1,2,3,4,5,6]
// 向右轮转 2 步: [6,7,1,2,3,4,5]
// 向右轮转 3 步: [5,6,7,1,2,3,4]
let nums1 = [1, 2, 3, 4, 5, 6, 7];
let k1 = 3;
rotate(nums1, k1)
console.log(nums1);
// 向右轮转 1 步: [99,-1,-100,3]
// 向右轮转 2 步: [3,99,-1,-100]
console.log(rotate([-1, -100, 3, 99], 2));


