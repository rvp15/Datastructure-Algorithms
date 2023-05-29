// in the given array find the index of given element , if element not found return -1

function linearsearch(t,array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === t) {
      return i
    }
  }
  return -1
}

console.log(linearsearch(4,[2, 4, 8, 3, 5]));


//Big O for linear search = O(n)