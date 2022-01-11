/**
 * @param {number[]} nums
 * @return {number}
 */
let singleNumber = function (nums) {
    let i = 0;
    for (const num of nums) {
        i ^= num;
    }
    return i;
};
// 输入: [2,2,1]
// 输出: 1
console.log(singleNumber([2, 2, 1, 5, 1]));
// 输入: [4,1,2,1,2]
// 输出: 4
console.log(singleNumber([4, 1, 2, 1, 2]));