var maxProfit = function(prices) {
    let maxProf = 0;
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            let profit = prices[j] - prices[i];
            if (profit > maxProf) {
                maxProf = profit;
            }
        }
    }
    
    return maxProf
};