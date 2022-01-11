/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
    let profit = 0, minPrices = prices[0];
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minPrices) {
            minPrices = prices[i];
        } else {
            profit = Math.max(profit, prices[i] - minPrices);
        }
    }
    return profit;
};
// 给定一个数组 prices ，它的第i 个元素prices[i] 表示一支给定股票第 i 天的价格。
// 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
// 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。
// 只能购买一次的情况下输出最大利润
console.log(maxProfit(prices = [7, 1, 5, 3, 6, 4, 7, 9]));
console.log(maxProfit(prices = [7, 6, 4, 3, 1]));
console.log(maxProfit(prices = [1, 2, 3, 3, 5]));
