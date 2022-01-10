/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
    // 判断不等于数组的时候最大利润为0
    if (!(prices instanceof Array)) {
        return 0;
    }
    // 利润值,最小交易值
    let profit = 0, minPrices = prices[0];
    for (let i = 1; i < prices.length; i++) {
        if (minPrices > prices[i]) {
            minPrices = prices[i];
        } else {
            profit = Math.max(profit, prices[i] - minPrices);
        }
    }
    return profit;
};
// 只能购买一次的情况下输出最大利润
console.log(maxProfit(prices = [7, 1, 5, 3, 6, 4, 7, 9]));
console.log(maxProfit(prices = [7, 6, 4, 3, 1]));
console.log(maxProfit(prices = [1, 2, 3, 3, 5]));
