/**
 * @param {number[]} nums
 * @return {number}
 */
let singleNumber = function (nums) {
    let numBer = 0;
    for (const num of nums) {
        numBer ^= num;
    }
    return numBer;
    // for (let i = 0; i < nums.length; i++) {
    //     let num = nums.filter(item => item === nums[i]);
    //     if (num.length === 1) {
    //         return nums[i];
    //     }
    // }
};
// 输入: [2,2,1]
// 输出: 1
console.log(singleNumber([2, 2, 1, 5, 1]));
// 输入: [4,1,2,1,2]
// 输出: 4
console.log(singleNumber([4, 1, 2, 1, 2]));