/**
 * @param {number[]} nums
 * @return {boolean}
 */
let containsDuplicate = function (nums) {
    let set = new Set();
    let i = 0;
    while (i < nums.length) {
        if (set.has(nums[i])) {
            console.log(nums[i])
            return true;
        }
        set.add(nums[i]);
        i++;
    }
    return false;
};


// 输入: [1,2,3,1]
// 输出: true
console.log(containsDuplicate([1, 2, 3, 1]));
// 输入: [1, 2, 3, 4]
// 输出: false
console.log(containsDuplicate([1, 2, 3, 4]));
// 输入: [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
// 输出: true
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));