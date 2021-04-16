// Dado un arreglo de números y un valor deseado, regresa los índices de los dos números en el arreglo que sumen ese valor.
// Puedes asumir que siempre hay una sola solución. No puedes usar el mismo elemento dos veces.

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return "None of them sums the target";
}

console.log("Números positivos:", twoSum([2, 7, 1, 5], 9));
console.log("Incluye negativos:", twoSum([3, -1, 0, 1], 0));
console.log("Ningún par suma el target:", twoSum([3, 2, 0, 5], 4));
