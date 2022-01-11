/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 冒泡排序
let sort = (nums1) => {
    // 循环数组
    for (let i = 0; i < nums1.length; i++) {
        // 第一遍
        for (let j = nums1.length - i; j < nums1.length; j++) {
            // 当前元素和前一个元素做对比
            // 如果当前元素小于前一个元素那么两个元素进行互换
            if (nums1[j] < nums1[j - 1]) {
                let num = nums1[j];
                nums1[j] = nums1[j - 1];
                nums1[j - 1] = num;
            }
        }
    }
    console.log(nums1);
}
let intersect = function (nums1, nums2) {
    sort(nums1);
    sort(nums2);
    console.log(nums1);
    console.log(nums2);
    let i = 0, j = 0;
};
// 给你两个整数数组nums1 和 nums2 ，请你以数组形式返回两数组的交集。返回结果中每个元素出现的次数，应与元素在两个数组中都出现的次数一致（如果出现次数不一致，则考虑取较小值）。可以不考虑输出结果的顺序。
// 输入：nums1 = [1,2,2,1], nums2 = [2,2]
// 输出：[2,2]
// console.log(intersect(nums1 = [1, 2, 2, 1], nums2 = [2, 2]));
// 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出：[4,9]
// console.log(intersect(nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4]))
sort([1, 43, 54, 5, 653, 423, 543, 645, 667]);