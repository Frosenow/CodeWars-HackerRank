function solution(N: number): number {
  const binVal: string[] = N.toString(2).split("");
  let max: number = 0;
  let counter: number = 0;
  let foundOne: boolean = false;
  for (let i: number = 0; i < binVal.length; i++) {
    if (binVal[i] === "1") {
      foundOne = true;
      max = Math.max(max, counter);
      counter = 0;
    } else if (foundOne) {
      counter++;
    }
  }
  return max;
}
