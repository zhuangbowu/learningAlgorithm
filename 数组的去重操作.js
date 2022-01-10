/**
 * @param {number[]} nums
 * @return {number}
 */
let removeDuplicates = function (nums) {
    // 判断传入不是数组返回长度为0
    if (!(nums instanceof Array)) {
        return 0;
    }
    // 判断数组长度小于/等于1的时候直接返回数组长度
    if (nums.length <= 1) {
        return nums.length;
    }
    let i = nums.length - 1;
    for (let j = nums.length; j > 0; j--) {
        if (nums[j] === nums[i]) {
            nums.splice(j, 1)
        }
        i--;
    }
    return nums.length;
};
let removeDuplicatesTwo = function (nums) {
    // 判断传入不是数组返回长度为0
    if (!(nums instanceof Array)) {
        return 0;
    }
    // 判断数组长度小于/等于1的时候直接返回数组长度
    if (nums.length <= 1) {
        return nums.length;
    }
    let i = 1, j = 1;
    while (j < nums.length) {
        if (nums[j] !== nums[j - 1]) {
            nums[i] = nums[j];
            i++;
        }
        j++;
    }
    return i;
};

console.log(removeDuplicatesTwo([0, 0, 0, 0, 0, 1, 1, 2, 2, 3, 3]));
console.log(removeDuplicatesTwo([1, 2, 5, 9, 12]));
console.log(removeDuplicatesTwo('sda'));
