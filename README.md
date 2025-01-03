# Type Error in TypeScript Addition

This repository demonstrates a common type error in TypeScript when performing arithmetic operations with mismatched types.

## Bug
The `add` function is defined to accept two numbers and return their sum. However, the code calls `add` with a number and a string, resulting in a type error.

## Solution
The solution involves type checking or type assertion to ensure both arguments are numbers before performing the addition operation.