/*
* Complete the 'getTotalX' function below.
*
* The function is expected to return an INTEGER.
* The function accepts following parameters:
* 1. INTEGER_ARRAY a
* 2. INTEGER_ARRAY b
*/

function getTotalX(a, b) {
 // Write your code here
  let num = 0;
  const integers = [];
  for(let i = 1; i <= 100; i++){
    if(a.every(num => i % num == 0)) integers.push(i)
   }
  return integers.filter(integer => {
    let flag = true;
    b.forEach(number => {
    if(number % integer !== 0)
      flag = false;
    })
    return flag;
  }).length

}
