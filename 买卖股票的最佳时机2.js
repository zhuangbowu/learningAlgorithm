/**
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = function (prices) {
    // 利润为零
    let profit = 0;
    // 通过循环遍历
    for (let i = 1; i < prices.length; i++) {
        // 如果当天交易值比前一天的交易值大
        if (prices[i] > prices[i - 1]) {
            // 那么当天利润+=当天交易值减去前一天的交易值
            profit += prices[i] - prices[i - 1];
        }
    }
    console.log(profit)
    return profit;
};
maxProfit(prices = [7, 1, 5, 3, 6, 4]);
maxProfit(prices = [1, 1, 2, 3, 4, 5]);
maxProfit(prices = [7, 6, 4, 3, 1]);