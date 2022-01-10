/**
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = function (prices) {
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        // 当天交易值比前一天的交易值大、那么累加利润
        if (prices[i] > prices[i - 1]) {
            profit += prices[i] - prices[i - 1];
        }
    }
    return profit;
};
// 可以重复购买的情况下输出最大利润
console.log(maxProfit(prices = [7, 1, 5, 3, 6, 4]));
console.log(maxProfit(prices = [1, 1, 2, 3, 4, 5]));
console.log(maxProfit(prices = [7, 6, 4, 3, 1]));