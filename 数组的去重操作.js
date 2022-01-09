/**
 * @param {number[]} nums
 * @return {number}
 */
// 性能最差
let removeDuplicates = function (nums) {
    if (!(nums instanceof Array)) {
        return 0;
    }
    if (!nums || nums.length < 2) {
        return nums.length;
    }
    let i = nums.length - 1;
    for (let j = nums.length; j > 0; j--) {
        if (nums[i] === nums[j]) {
            nums.splice(j, 1);
        }
        i--;
    }
    return nums.length;
};
// 性能第二
let removeDuplicatesTwo = function (nums) {
    if (!(nums instanceof Array)) {
        return 0;
    }
    if (!nums || nums.length < 2) {
        return nums.length;
    }
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
};
// 性能最优
let removeDuplicatesThree = function (nums) {
    if (!(nums instanceof Array)) {
        return 0;
    }
    if (!nums || nums.length < 2) {
        return nums.length;
    }
    let i = 1, j = 1;
    while (j < nums.length) {
        if (nums[j] !== nums[j - 1]) {
            nums[i] = nums[j];
            ++i;
        }
        ++j;
    }
    return i;
};


console.log(removeDuplicatesThree([0, 0, 1, 1, 2, 2, 3, 3]));
console.log(removeDuplicatesThree([1, 2]));
// console.log(removeDuplicatesTwo('sda'));
