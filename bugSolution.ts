function add(a: number, b: number): number {
  return a + b;
}

let result = add(1, 2); // Correct: Both arguments are numbers.
console.log(result);

function addSafe(a: number, b: number | string): number {
  if (typeof b === 'string') {
    return add(a, parseFloat(b));
  } else {
    return add(a, b);
  }
}

let result2 = addSafe(1, '2');
console.log(result2); 