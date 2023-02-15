function solution(input, markers) {
  
  const re = new RegExp(`\\s*[${markers.join('|')}].+`,'g')
  
  const output = input.split('\n').map(line => {
    if(line.match(re) && line.length > 1){
      return line.split(re)[0].trim()
    } else {
      return line
    }
  }).join('\n')
  return output 
};
