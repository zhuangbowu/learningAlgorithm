/**
 * @param {number[]} nums
 * @return {number}
 */
let removeDuplicates = function (nums) {
    let i = 1, j = 1;
    let n = nums.length;
    while (j < n) {
        if (nums[j] !== nums[j - 1]) {
            nums[i] = nums[j];
            i++;
        }
        j++;
    }
    return i;
};
// 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。
// 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
// 输出数组长度
console.log(removeDuplicates([0, 0, 0, 0, 0, 1, 1, 2, 2, 3, 3]));
console.log(removeDuplicates([1, 2, 5, 9, 12]));
