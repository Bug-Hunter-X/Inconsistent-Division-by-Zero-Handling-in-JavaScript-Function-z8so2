function foo(a, b) {
  // Check if either input is zero before performing division.
  if (a === 0 || b === 0) {
    return 0; // Handle zero inputs consistently.
  }
  return a / b;
}

console.log(foo(10, 0)); // Returns 0
console.log(foo(0, 10)); // Returns 0
console.log(foo(10, 5)); // Returns 2