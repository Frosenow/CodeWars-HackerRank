function narcissistic(value) {
  let sum = 0;
  const power = String(value).length;
  String(value).split('').forEach(num => {
    sum += num ** power 
  })
  return sum == value
}
