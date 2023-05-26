function fibo(n){
    const arr = [0,1]
    for (let i=2; i<n;i++){
        arr.push(arr[i-1]+arr[i-2])
    }
    return arr
}

console.log(fibo(7))

//Big-0 - O(n)