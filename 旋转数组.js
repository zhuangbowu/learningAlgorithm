/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const reverse = (nums, start, end) => {
    while (start < end) {
        [nums[start++], nums[end--]] = [nums[end], nums[start]];
    }
}
let rotate = function (nums, k) {
    k %= nums.length;
    for (let i = 0; i < k; i++) {
        let temp = nums.pop();
        nums.unshift(temp)
    }
};
let rotateTwo = function (nums, k) {
    k %= nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
};
let rotateThree = function (nums, k) {
    const n = nums.length;
    const newArr = new Array(n);
    for (let i = 0; i < n; i++) {
        newArr[(i + k) % n] = nums[i];
    }
    for (let i = 0; i < n; i++) {
        nums[i] = newArr[i];
    }
};
// 给你一个数组，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。
// 向右轮转 1 步: [7,1,2,3,4,5,6]
// 向右轮转 2 步: [6,7,1,2,3,4,5]
// 向右轮转 3 步: [5,6,7,1,2,3,4]
//              [1,2,3,4,5,6,7]
// rotate([1, 2, 3, 4, 5, 6, 7], 5);
// rotateTwo([1, 2, 3, 4, 5, 6, 7], 5);
rotateThree([1, 2, 3, 4, 5, 6, 7], 3);
// 向右轮转 1 步: [99,-1,-100,3]
// 向右轮转 2 步: [3,99,-1,-100]
// rotate([-1, -100, 3, 99], 2);
// rotate([443772, 165171, 21470], 54944);
