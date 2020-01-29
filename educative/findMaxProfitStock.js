//   const stockPrices = [10, 7, 5, 8, 11, 9];


// Returns 6 (buying for $5 and selling for $11)

function getMaxProfit(arr){
    // find a start and end value with the biggest sum
    let highestProfit = 0 //?
    for(let i=0; i<arr.length-1;i++){
        for(let j=i; j<arr.length-1; j++){
            if(arr[i] > arr[j]) continue;

            if(highestProfit < arr[j]-arr[i]){
                highestProfit = arr[j]-arr[i]
            }
        }

    }
    return highestProfit
}

function getMaxProfit2(stockPrices){
        if (stockPrices.length < 2) {
          throw new Error('Getting a profit requires at least 2 prices');
        }
      
        // We'll greedily update minPrice and maxProfit, so we initialize
        // them to the first price and the first possible profit
        let minPrice = stockPrices[0];
        let maxProfit = stockPrices[1] - stockPrices[0];
      
        // Start at the second (index 1) time
        // We can't sell at the first time, since we must buy first,
        // and we can't buy and sell at the same time!
        // If we started at index 0, we'd try to buy *and* sell at time 0.
        // this would give a profit of 0, which is a problem if our
        // maxProfit is supposed to be *negative*--we'd return 0.
        for (let i = 1; i < stockPrices.length; i++) {
          const currentPrice = stockPrices[i];
      
          // See what our profit would be if we bought at the
          // min price and sold at the current price
          const potentialProfit = currentPrice - minPrice;
      
          // Update maxProfit if we can do better
          maxProfit = Math.max(maxProfit, potentialProfit);
      
          // Update minPrice so it's always
          // the lowest price we've seen so far
          minPrice = Math.min(minPrice, currentPrice);
        }
      
        return maxProfit;
}

console.log(getMaxProfit([10,7,5,8,13,9]))
console.log(getMaxProfit([10,9,8,7,6,5]))

console.log(getMaxProfit2([10,7,5,8,13,9]))
console.log(getMaxProfit2([10,9,8,7,6,5]))