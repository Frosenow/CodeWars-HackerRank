function solution(list){
    let arr = []
    for(let j = 0; j < list.length; j++){
      let i = 0;
      let range = 1;
      while(Math.abs(list[j + i] - list[j + 1 + i]) === 1){
        range++; 
        i++; 
      }
      if(range >= 3){
        arr.push(`${list[j]}-${list[j+i]}`)
        j += i;
      } else {
        arr.push(list[j])
      }
    }
    return arr.join(','); 
  }
