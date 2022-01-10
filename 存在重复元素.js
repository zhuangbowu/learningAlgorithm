/**
 * @param {number[]} nums
 * @return {boolean}
 */
let containsDuplicate = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] === nums[j] && i !== j) {
                return true;
            }
        }
    }
    return false;
};


let containsDuplicateTwo = function (nums) {
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
        if (arr.findIndex(findIndexItem => findIndexItem === nums[i]) !== -1) {
            return true;
        }
        arr.push(nums[i]);
    }
    return false;
};

// 输入: [1,2,3,1]
// 输出: true
console.log(containsDuplicateTwo([1, 2, 3, 1]));
// 输入: [1, 2, 3, 4]
// 输出: false
console.log(containsDuplicateTwo([1, 2, 3, 4]));
// 输入: [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
// 输出: true
console.log(containsDuplicateTwo([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));