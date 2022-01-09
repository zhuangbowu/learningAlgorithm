/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
    // 大佬写法我完全看不懂、
    // https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/solution/mai-mai-gu-piao-wen-ti-by-chen-wei-f-uye0/
    let n = prices.length;
    let dp = Array.from(new Array(n), () => new Array(2));
    // 第一个是不持有
    // 第二个是持有
    dp[0][0] = 0;
    dp[0][1] = -prices[0];
    for (let i = 1; i < n; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
        dp[i][1] = Math.max(dp[i - 1][1], -prices[i]);
    }
    console.log(dp[n - 1][0])
    return dp[n - 1][0];
};

const maxProfitTwo = function (prices) {
    // 默认利润等于0
    let profit = 0;
    // 最小值
    let minPrices = prices[0];
    for (let i = 1; i < prices.length; i++) {
        // 如果当天交易价格小于最小值
        if (prices[i] < minPrices) {
            // 那么最小交易价格改为当前交易价格
            minPrices = prices[i];
        } else {
            // 当天交易价格减掉最小交易之是当前利润
            // 之前的利润
            // 两个利润进行对比取出最大利润
            profit = Math.max(prices[i] - minPrices, profit)
        }
    }
    console.log(profit)
    return profit;
}

maxProfitTwo(prices = [7, 1, 5, 3, 6, 4]);
maxProfitTwo(prices = [7, 6, 4, 3, 1]);
maxProfitTwo(prices = [1, 2, 3, 3, 5]);
