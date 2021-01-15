def getMaxColors(prices, money):
  maxLength = 0
  workingCost = 0
  i = 0
  j = 0
  while j < len(prices):
    if workingCost + prices[j] <= money:
      maxLength = max(maxLength, j-i+1)
      workingCost += prices[j]
      j += 1
    else:
      workingCost -= prices[i]
      i += 1
      if i > j:
        workingCost = 0
        j = i      
  return maxLength