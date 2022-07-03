function maxStockProfit(arr) {
  let maxProfit = -1;
  let buyPrice = 0;
  let sellPrice = 0;
  let changeBuyPrice = true;

  for (let i = 0; i < arr.length; i++) {
    if (changeBuyPrice) buyPrice = arr[i];

    sellPrice = arr[i + 1];
    if (sellPrice < buyPrice) {
      changeBuyPrice = true;
    } else {
      let tempProfit = sellPrice - buyPrice;
      if (tempProfit > maxProfit) maxProfit = tempProfit;
      changeBuyPrice = false;
    }
  }
  console.log(maxProfit);
  return maxProfit;
}

maxStockProfit([10, 18, 4, 5, 9, 6, 24, 12]);

// Buy At 4
// Sell at 24
// Max Profit = 20
