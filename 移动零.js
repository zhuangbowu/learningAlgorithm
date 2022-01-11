/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let moveZeroes = function (nums) {
    let i = 0, j = 0;
    while (i < nums.length) {
        console.log(nums)
        if (nums[i] !== 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
            j++;
        }
        i++;
    }
    console.log(nums);
};
// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
// 输入: [0,1,0,3,12]
// 输出: [1,3,12,0,0]
moveZeroes([0, 1, 0, 3, 12]);

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr);
[arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
[arr[1], arr[arr.length - 2]] = [arr[arr.length - 2], arr[1]];
console.log(arr);
// [arr[1], arr[2]] = [arr[2], arr[1]];
// console.log(arr);