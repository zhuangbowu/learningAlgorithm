/**
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = function (prices) {
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            profit += prices[i] - prices[i - 1];
        }
    }
    return profit;
};
// 给定一个数组 prices ，其中prices[i] 是一支给定股票第 i 天的价格。
// 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
// 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

// 可以重复购买的情况下输出最大利润
console.log(maxProfit(prices = [7, 1, 5, 3, 6, 4]));
console.log(maxProfit(prices = [1, 1, 2, 3, 4, 5]));
console.log(maxProfit(prices = [7, 6, 4, 3, 1]));