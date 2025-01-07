function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values
  }

  // ... rest of the function, now safe to use a and b without errors
  return a + b;
}