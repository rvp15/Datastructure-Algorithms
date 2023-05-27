//factoria of 0! =1
// fact of 4 = 4*3*2*1 =  24
//O(n)

function factorialRecursive(n) {
  if (n === 0) return 1;
  return n * factorialRecursive(n - 1);
}
console.log(factorialRecursive(1));
