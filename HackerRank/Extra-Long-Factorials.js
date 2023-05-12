function extraLongFactorials(n) {
    let output = factorial(n);
    console.log(output.toString())
}

function factorial(n){
    if(n < 2){
        return 1; 
    } else {
        return BigInt(n) * BigInt(factorial(n - 1));
    }
}
