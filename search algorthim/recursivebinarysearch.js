function recursiveBS(array, target) {
  return search(array, target, 0, array.length - 1);
}

function search(array, target, leftIndex, rightIndex) {
  //after searching all element ,no elements to check return -1
  if (leftIndex > rightIndex) {
    return -1;
  }
  //find middleindex
  let middleIndex = Math.floor((rightIndex + leftIndex) / 2);
  //if middleindex is the target number
  if (target === array[middleIndex]) return middleIndex;
  //decide which side to continue left or right
  if (target < array[middleIndex]) {
    return search(array, target, 0, middleIndex - 1);
  }
  if (target > array[middleIndex]) {
    return search(array, target, middleIndex + 1,rightIndex);
  }
}

console.log(recursiveBS([-5, 2, 4, 6, 10],2));
//BigO - Ologn