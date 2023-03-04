function formatDuration (time) {
  if(time == 0) return 'now'
  
  const clock = { 
    year: 0,
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
  }
    clock.second += time % 60; 
      time -= clock.second;
    
    clock.minute += (Math.floor(time / 60) % 60)
      time -= (clock.minute * 60)
    
    clock.hour += (Math.floor(time / 3600) % 3600) % 24
      time -= (clock.hour * 3600)
    
    clock.day += Math.floor(time / (3600 * 24)) % 365
      time -+ (clock.day * 3600 * 24)
    
    clock.year += Math.floor(time / (3600 * 24 * 365))
      time -= (clock.year * 3600 * 24 * 365)
    
  let humanReadable = [];
  for(const key in clock){
    if(clock[key] > 0){
      clock[key] > 1 ? humanReadable.push(`${clock[key]} ${key}s`) : humanReadable.push(`${clock[key]} ${key}`) 
    }
  }
  humanReadable = humanReadable.join(', ')
  if(humanReadable.includes(',')){
    humanReadable = humanReadable.substring(0, humanReadable.lastIndexOf(',')) + ' and ' + humanReadable.substring(humanReadable.lastIndexOf(',') + 2)
  }
  return humanReadable
}
