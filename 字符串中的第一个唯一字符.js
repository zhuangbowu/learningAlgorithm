/**
 * @param {string} s
 * @return {number}
 */
let firstUniqChar = function (s) {
    let arr = new Map();
    for (const sElement of s) {
        arr.set(sElement, arr.get(sElement) + 1 || 1);
    }
    for (const arrElement of arr) {
        if (arrElement[1] === 1) {
            return s.indexOf(arrElement[0])
        }
    }
    return -1;
};
// 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

// s = "leetcode"
// 返回 0
console.log(firstUniqChar("leetcode"))
// s = "loveleetcode"
// 返回 2
console.log(firstUniqChar("loveleetcode"))