# Inconsistent Division by Zero Handling in JavaScript Function

This repository demonstrates an uncommon bug in JavaScript related to inconsistent handling of division by zero.  The `foo` function is intended to handle cases where either input is zero, but its behavior is inconsistent:

- When 'a' is 0, it correctly returns 0.
- When 'b' is 0, it throws an error (division by zero).

The `bug.js` file contains the buggy code. The `bugSolution.js` file offers a solution to make the function's behavior consistent.