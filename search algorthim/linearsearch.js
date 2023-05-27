// in the given array find the index of given element , if element not found return -1

function linearsearch(t) {
  let array = [2, 4, 8, 3, 5];

  for (let i = 0; i < array.length; i++) {
    if (array[i] === t) {
      return i
    }
  }
  return -1
}

console.log(linearsearch(4));


//Big O for linear search = O(n)