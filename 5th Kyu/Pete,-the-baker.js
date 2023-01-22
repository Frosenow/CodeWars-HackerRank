function cakes(recipe, available) {
  let cakes = Infinity; 
  let min = 0; 
  for(let key in recipe){
    if(!(available.hasOwnProperty(key))){
      return 0; 
    } else {
      min = Math.floor(available[key] / recipe[key]) 
      if(min < cakes)
        cakes = min; 
    }
  }
  return cakes; 
}
