// Full Name of Kata: Delete occurrences of an element if it occurs more than n times
function deleteNth(arr,n){
  let numbers = {}
  const filtered = []
  arr.forEach(num => {
    if(!numbers[num]){
      numbers[num] = 0;
    }
    numbers[num]++; 
    if(numbers[num] <= n)
      filtered.push(num)
  })
  return filtered
}
