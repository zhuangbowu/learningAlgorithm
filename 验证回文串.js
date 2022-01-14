/**
 * @param {string} s
 * @return {boolean}
 */
let isPalindrome = function (s) {
    let arr = [];
    for (const sElement of s) {
        if (new RegExp("[A-Za-z0-9]").test(sElement)) {
            arr.push(sElement.toLowerCase());
        }
    }
    let start = 0, end = arr.length - 1;
    while (start < end) {
        if (arr[start] !== arr[end]) {
            return false;
        } else {
            start++;
            end--;
        }
    }
    return true;
};
// 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
// 说明：本题中，我们将空字符串定义为有效的回文串。
// 输入: "A man, a plan, a canal: Panama"
// 输出: true
// 解释："amanaplanacanalpanama" 是回文串
// console.log(isPalindrome("A man, a plan, a canal: Panama"));
// 输入: "race a car"
// 输出: false
// 解释："raceacar" 不是回文串
// console.log(isPalindrome("race a car"));
// 输入: "0P"
// 输出: false
// 解释："P0"" 不是回文串
console.log(isPalindrome("0P"));


