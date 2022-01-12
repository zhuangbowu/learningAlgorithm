/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
let reverseString = function (s) {
    let start = 0, end = s.length - 1;
    while (start < end) {
        [s[start++], s[end--]] = [s[end], s[start]];
    }
};
// 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 s 的形式给出。
// 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。

// 输入：s = ["h","e","l","l","o"]
// 输出：["o","l","l","e","h"]
console.log(reverseString(["h", "e", "l", "l", "o"]))
// 输入：s = ["H","a","n","n","a","h"]
// 输出：["h","a","n","n","a","H"]
console.log(reverseString(["H", "a", "n", "n", "a", "h"]))