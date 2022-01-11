/**
 * @param {number[]} digits
 * @return {number[]}
 */
let plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i]++;
        if (digits[i] < 10) {
            return digits;
        } else {
            digits[i] %= 10;
        }
    }
    digits.unshift(1)
    return digits;
};
// 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。
// 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
// 你可以假设除了整数 0 之外，这个整数不会以零开头。
// 输入：digits = [1,2,3]
// 输出：[1,2,4]
// 解释：输入数组表示数字 123。
console.log(plusOne([9, 9, 9, 9]));

// 输入：digits = [4,3,2,1]
// 输出：[4,3,2,2]
// 解释：输入数组表示数字 4321。
// console.log(plusOne([4, 3, 2, 1]));

// 输入：digits = [0]
// 输出：[1]
// console.log(plusOne([0]));

// 输入：digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
// 输出：[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
