/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }
    let arr = new Map();
    for (const sElement of s) {
        arr.set(sElement, arr.get(sElement) + 1 || 1);
    }
    for (const tElement of t) {
        if (arr.get(tElement) > 0) {
            arr.set(tElement, arr.get(tElement) - 1);
        } else {
            return false
        }
    }
    return true;
};
// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
// 注意：若s 和 t中每个字符出现的次数都相同，则称s 和 t互为字母异位词
// 输入: s = "anagram", t = "nagaram"
// 输出: true
console.log(isAnagram(s = "anagram", t = "nagaram"));
// 输入: s = "rat", t = "car"
// 输出: false
console.log(isAnagram(s = "rat", t = "car"));
