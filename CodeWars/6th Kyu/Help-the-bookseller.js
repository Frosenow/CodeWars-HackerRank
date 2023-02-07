function stockList(listOfArt, listOfCat){
  if(listOfArt.length < 1)
    return ''
  
  const stockStatus = {};
  listOfCat.forEach(cat => {
    stockStatus[cat] = 0;
  })
  
  listOfArt.forEach(art => {
    if(Object.hasOwn(stockStatus, art[0]))
      stockStatus[art[0]] += +art.split(' ')[1]
  })
  
  const outputArr = []
  for(const key in stockStatus){
    outputArr.push(`(${key} : ${stockStatus[key]})`)
  }
  
  return String(outputArr.join(' - '))
}
