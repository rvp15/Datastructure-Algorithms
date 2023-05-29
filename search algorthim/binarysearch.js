//BS only works with sorted array

// // In the given array find the index of given element , if element not found return -1
 //arr = [-4,6,2,8,1], t=8 -> 3(return index)
function binarysearch(arr,target){
    // define leftindex and right index
    let leftIndex = 0
    let rightIndex = arr.length-1

    //while loop 
    while(leftIndex <= rightIndex){
        //find middleindex
        let middleIndex = Math.floor((rightIndex+leftIndex)/2)
        //if middleindex is the target number
        if(target === arr[middleIndex]) return middleIndex
        //decide which side to continue left or right
        if(target < arr[middleIndex]){
            rightIndex = middleIndex -1
        }else{
            leftIndex = middleIndex + 1
        }
    }
    return -1
}

console.log(binarysearch([-5,2,4,6,10],10))