// Dado un índice de renglón, regresa el renglón correspondiente del triángulo de Pascal.

function pascalsTriangle(rowIndex) {
  const pascalList = [[1]];

  if (rowIndex === 0) return pascalList[0];

  for (let i = 0; i < rowIndex; i++) {
    const row = [];

    row.push(1);
    for (let j = 0; j < i; j++) {
      const prevRow = pascalList[i];
      const numToAdd = prevRow[j] + prevRow[j + 1];
      row.push(numToAdd);
    }
    row.push(1);

    pascalList.push(row);
  }

  return pascalList[rowIndex];
}

console.log("Row 0:", pascalsTriangle(0));
console.log("Row 1:", pascalsTriangle(1));
console.log("Row 2:", pascalsTriangle(2));
console.log("Row 10:", pascalsTriangle(10));
console.log("Row 25:", pascalsTriangle(25));
