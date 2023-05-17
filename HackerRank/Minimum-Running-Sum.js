function minSum(arr){
    return arr.reduceRight((x, val) => Math.max(1, x-val), 1)
}
