/**
 * @param {number} x
 * @return {number}
 */
let reverse = function (x) {
    let num = x;
    if (x < 0) {
        num = x - x - x
    }
    let arr = num.toString().split('');
    let start = 0, end = arr.length - 1;
    while (start < end) {
        [arr[start++], arr[end--]] = [arr[end], arr[start]]
    }
    let i = 0;
    while (i < 1) {
        if (arr[i] == 0) {
            arr.splice(i, 1)
        } else {
            i++;
        }
    }
    if (x < 0) {
        arr.unshift('-')
    }
    console.log(arr)
    let rev = Number(arr.join(''));
    if (rev < Math.pow(-2, 31) || rev > Math.pow(2, 31) - 1) {
        return 0;
    }
    return rev;
};
// -2147483412
// -2143847424
// -2143847412
// 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
// 如果反转后整数超过 32 位的有符号整数的范围[−231, 231− 1] ，就返回 0。
// 假设环境不允许存储 64 位整数（有符号或无符号）。
// 输入：x = 123
// 输出：321
console.log(reverse(-2147483412));
// 输入：x = -123
// 输出：-321
// console.log(reverse(-123));
// 输入：x = 120
// 输出：21
// console.log(reverse(120));
// 输入：x = 0
// 输出：0
// console.log(reverse(0));