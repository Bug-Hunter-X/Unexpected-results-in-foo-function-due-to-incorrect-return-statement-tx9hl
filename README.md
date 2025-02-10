# JavaScript Bug: Unexpected Results in foo Function

This repository demonstrates a common JavaScript bug involving an incorrect return statement that leads to unexpected results.

## Bug Description
The `foo` function is designed to return the sum of two numbers. However, it contains a bug where if either `a` or `b` is 0, the function returns 0 instead of the expected sum of a and b. 

## Bug Reproduction
1. Clone this repository.
2. Run `bug.js`.
3. Observe the incorrect output for the inputs that include 0.

## Solution
The solution involves correcting the return statement in the `foo` function. See `bugSolution.js` for the corrected code. 