function sumPairs(ints, s) {
    const pairs = {}
    for(let i = 0; i < ints.length; i++){
      const missingNum = s - ints[i]
      if(pairs[missingNum]){
        return [missingNum, ints[i]]
      }
      pairs[ints[i]] = true; 
    }
    return undefined
}
