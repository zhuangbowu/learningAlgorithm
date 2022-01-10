/**
 * @param {number[]} nums
 * @return {number}
 */
let removeDuplicates = function (nums) {
    let set = new Set();
    for (let i = 0; i < nums.length; i++) {
        set.add(nums[i]);
    }
    nums.length = 0;
    for (const setElement of set) {
        nums.push(setElement)
    }
    return nums.length;
};

// 输出数组长度
console.log(removeDuplicates([0, 0, 0, 0, 0, 1, 1, 2, 2, 3, 3]));
console.log(removeDuplicates([1, 2, 5, 9, 12]));
