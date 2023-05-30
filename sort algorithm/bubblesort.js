 //poor sorting algo, just for an idea learn
 //compare only adjecent elements of array
 //if elements are swapped the repeat the comparsion  //use do while loop
 //if not swapped then sorting is over

function bubbleSort(arr){
    let swapped
    do{
        swapped = false
     for(let i=0; i<arr.length-1; i++){
        if(arr[i]>arr[i+1]){
          [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
            swapped = true
        }
    }
}while(swapped)
return arr
}
 
let arr = [12, 10, 3, -7, 4];
console.log(bubbleSort(arr))